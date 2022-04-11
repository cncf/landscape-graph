import { readJSON, writeJSON } from 'https://deno.land/x/flat/mod.ts';
import * as path from "https://deno.land/std/path/mod.ts";

const filename = Deno.args[0]; // Same name as downloaded_filename

// read file downloaded by flat (landscape-items.json)
const landscape = await readJSON(filename);

for (let i = 0; i < landscape.length; i++) 
{
    let card = landscape[i];

    //
    // MEMBER := { false, Platinum, Nonprofit, Silver, Gold, End User Supporter, Academic }
    // strip 'false'
    //
    if( card['member'] === false ) {
        delete card['member'];
    }

    //
    // RELATION := { false, sandbox, member, incubating, graduated, archived }
    // strip false and member, as both are duplicative.
    //
    let val = card['relation'];
    if( false === val || 'member' === val ) {
        delete card['relation'];
    }
}

let newfile: string = "landscape-items-clean.json"

console.log('Writing cleaned up landscape file: ' + newfile)

await writeJSON(newfile, landscape, null, 2)
