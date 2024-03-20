#!/bin/bash
set -euo pipefail

handle_sigint() {
    echo "Caught Ctrl+C, stopping..."
    # Perform any necessary cleanup here
    exit 1
}
trap 'handle_sigint' SIGINT

get_system_info() {
    local os=$(uname -s)
    local disk_type=""
    local model=""
    local size=""

    if [[ "$os" == "Darwin" ]]; then
        local disk=$(diskutil info / | grep "Device Identifier" | awk '{print $3}')
        disk_type=$(diskutil info $disk | grep "Protocol" | awk '{print $2}')
        model=$(diskutil info $disk | grep "Device / Media Name" | awk '{for (i=4; i<=NF; i++) printf $i " "; print ""}' | sed 's/ //g')
        size=$(diskutil info $disk | grep "Disk Size" | awk '{print $3 $4}')
    elif [[ "$os" == "Linux" ]]; then
        local root_device=$(df / | tail -1 | awk '{print $1}' | xargs lsblk -no PKNAME | uniq)
        disk_type=$(lsblk -dno TYPE /dev/$root_device)
        model=$(lsblk -dno MODEL /dev/$root_device | tr -d ' ')
        size=$(lsblk -dno SIZE /dev/$root_device)
    fi

    echo "${os}_DiskType_${disk_type}_Model_${model}_Size_${size}"
}


convert_to_mbs_and_gbs() {
    local bytes_per_sec="$1"
    local mb_per_sec=$(echo "$bytes_per_sec" | awk '{print $1/1024/1024}')
    local gb_per_sec=$(echo "$bytes_per_sec" | awk '{print $1/1024/1024/1024}')
    echo "$mb_per_sec $gb_per_sec" # Return both values
}

system_info=$(get_system_info | tr -d ' ')
csv_filename="${system_info}_filesystem_performance.csv"

# theDate=$(date +"%Y-%m-%d %H:%M:%S")
# echo "theDate: $theDate"

echo "filesize_mb,write_speed_mbps,write_speed_gbps,read_speed_mbps,read_speed_gbps" > "$csv_filename"

# table header
# printf "%10s | %-7s | %-7s | %-7s | %-7s\n" "Size (MB)" "Write" "Write" "Read" "Read"

# Test file sizes from 1 MB to 15 GB
for size in 1 10 100 1000 2500 5000 7500 10000 12500; do
    write_bytes_per_sec=$(dd if=/dev/zero of=testfile bs=1M count=$size 2>&1 | grep -o '[0-9]\+ bytes/sec' | awk '{print $1}')
    read write_speed_mbps write_speed_gbps <<< $(convert_to_mbs_and_gbs "$write_bytes_per_sec")
    read_bytes_per_sec=$(dd if=testfile of=/dev/null bs=1M 2>&1 | grep -o '[0-9]\+ bytes/sec' | awk '{print $1}')
    read read_speed_mbps read_speed_gbps <<< $(convert_to_mbs_and_gbs "$read_bytes_per_sec")
    

    printf "%10d | (w) %-7.2f MB/s (r) | (r) %-7.2f GB/s | (w) %-7.2f MB/s | (r) %-7.2f GB/s\n" $size $write_speed_gbps $read_speed_gbps $write_speed_mbps $read_speed_mbps

    echo "$size,$write_speed_mbps,$write_speed_gbps,$read_speed_mbps,$read_speed_gbps" >> "$csv_filename"
    rm -f testfile
done

echo "Test completed. Results saved to $csv_filename."
