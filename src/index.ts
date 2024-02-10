import { ExtendedClient } from "./structs/ExtendedClient"
import config from "./config.json"

import fs  from "fs"	
import path from "path"
export * from "colors";



// const client = new ExtendedClient();
// client.start();

// export { client }


fs.readdirSync(path.join(__dirname,"comands")).forEach(local => {
    fs.readdirSync(path.join(__dirname,"comands", local))
    .filter(fileName => fileName.endsWith(".ts") || fileName.endsWith(".js"))
    .forEach(filename => {
        console.log(filename)
    })
})