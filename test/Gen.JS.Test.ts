//-------------------------------------------------//
//                    MIT License                  //
//    Copyright (c) 2025 EFramework Organization   //
//          SEE LICENSE.md FOR MORE DETAILS        //
//-------------------------------------------------//

import { XEnv, XFile, XTest } from "ep.uni.util"
import { Protoc } from "../src/protoc"

XTest.Test("Protoc Gen for Javascript(Web)", async () => {
    const src = XFile.PathJoin(XEnv.DataPath, "..", "test", "proto", "src")
    const out = XFile.PathJoin(XEnv.DataPath, "..", "test", "proto", "out", "js")
    if (XFile.HasDirectory(out)) XFile.DeleteDirectory(out)
    XFile.CreateDirectory(out)

    await Protoc([`--proto_path=${src}`,
        `--js_opt=import_style=es6`,
    `--js_out=${out}`,
        `--grpc-web_opt=import_style=typescript,mode=grpcwebtext`,
    `--grpc-web_out=${out}`,
    XFile.PathJoin(src, "*.proto")])

    await Protoc([`--proto_path=${src}`,
    `--js-fix_opt=${out}`,
    `--js-fix_out=${out}`,
    XFile.PathJoin(src, "*.proto")])
})