//-------------------------------------------------//
//                    MIT License                  //
//    Copyright (c) 2025 EFramework Organization   //
//          SEE LICENSE.md FOR MORE DETAILS        //
//-------------------------------------------------//

import { XEnv, XFile, XTest } from "ep.uni.util"
import { Protoc } from "../src/protoc"

XTest.Test("Protoc Gen for Typescript", async () => {
    const src = XFile.PathJoin(XEnv.DataPath, "..", "test", "proto", "src")
    const out = XFile.PathJoin(XEnv.DataPath, "..", "test", "proto", "out", "ts")
    if (XFile.HasDirectory(out)) XFile.DeleteDirectory(out)
    XFile.CreateDirectory(out)

    await Protoc([`--proto_path=${src}`,
        `--ts_opt=grpc_package=grpc-web,unary_rpc_promise=true,target=web`,
    `--ts_out=${out}`,
    XFile.PathJoin(src, "*.proto")])

    await Protoc([`--proto_path=${src}`,
    `--ts-fix_opt=${out}`,
    `--ts-fix_out=${out}`,
    XFile.PathJoin(src, "*.proto")])
})
