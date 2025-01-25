//-------------------------------------------------//
//                    MIT License                  //
//    Copyright (c) 2025 EFramework Organization   //
//          SEE LICENSE.md FOR MORE DETAILS        //
//-------------------------------------------------//

import { XEnv, XFile, XTest } from "ep.uni.util"
import { Protoc } from "../src/protoc"

XTest.Test("Protoc Gen for Go", async () => {
    const src = XFile.PathJoin(XEnv.DataPath, "..", "test", "proto", "src")
    const out = XFile.PathJoin(XEnv.DataPath, "..", "test", "proto", "out", "go")
    if (XFile.HasDirectory(out)) XFile.DeleteDirectory(out)
    XFile.CreateDirectory(out)

    await Protoc([`--proto_path=${src}`,
    `--go_out=${out}`,
    `--go-grpc_out=${out}`,
    `--go-pbx_out=${out}`,
    XFile.PathJoin(src, "*.proto")])
})