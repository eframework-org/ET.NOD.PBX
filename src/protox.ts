//-------------------------------------------------//
//                    MIT License                  //
//    Copyright (c) 2025 EFramework Organization   //
//          SEE LICENSE.md FOR MORE DETAILS        //
//-------------------------------------------------//

import { XEnv, XFile } from "ep.uni.util"
import { Install } from "./utility/Install"
import { Protoc } from "./protoc"

(async () => {
    const args = process.argv.slice(2)
    if (args.length == 0 || args.indexOf("--help") >= 0) {
        try {
            const mfile = XFile.PathJoin(XEnv.DataPath, "..", "README.md")
            if (XFile.HasFile(mfile)) {
                const lines = XFile.OpenText(mfile).split("\n")
                const nlines = new Array<string>()
                let manual = false
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i]
                    if (!manual && line.indexOf("## Manual") >= 0) manual = true
                    else if (manual && line.startsWith("##")) manual = false   // End of manual section
                    if (manual) nlines.push(line)
                }
                if (nlines.length == 0) console.info(XFile.OpenText(mfile))
                else console.info(nlines.join("\n"))
            }
        } catch (err) { console.error("Readout README.md failed: ", err) }
    } else if (args.indexOf("--version") >= 0) {
        console.info(XEnv.Version)
    } else if (args.indexOf("--install") >= 0) {
        await Install.Process([...process.argv.slice(2)])
    } else {
        await Protoc([...process.argv.slice(2)])
    }
})()