import { readJSON, writeJSON } from "https://deno.land/x/flat@0.0.15/mod.ts";

const filename = Deno.args[0]; // Same name as downloaded_filename

// read file downloaded by flat (landscape-items.json)
const landscape = await readJSON(filename);

for (let i = 0; i < landscape.length; i++) 
{
    const card = landscape[i];

    //
    // MEMBER := { false, Platinum, Nonprofit, Silver, Gold, End User Supporter, Academic }
    // strip 'false'
    //
    if( card['member'] === false ) {
        delete card['member'];
    }

    //
    // LICENSE contains "NotOpenSource" as a license type
    //
    if (card['license'] === 'NotOpenSource') {
        delete card['license']
    }

    //
    // RELATION := { false, sandbox, member, incubating, graduated, archived }
    // strip false and member, as both are duplicative.
    //
    const relVal = card['relation'];
    if( false === relVal || 'member' === relVal ) {
        delete card['relation'];
    }

    // TODO: re-write dates to by Cypher friendly!
}

let newfile: string = "landscape-items-clean.json"

console.log('Writing cleaned up landscape file: ' + newfile)

// strip out all null or empty values
const cleanedLandscape = JSON.parse(JSON.stringify(landscape, (key, value) => value === null || value === '' ? undefined : value));
await writeJSON(newfile, cleanedLandscape, null, 2)
