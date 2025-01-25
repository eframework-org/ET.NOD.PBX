//-------------------------------------------------//
//                    MIT License                  //
//    Copyright (c) 2025 EFramework Organization   //
//          SEE LICENSE.md FOR MORE DETAILS        //
//-------------------------------------------------//

import { XEnv, XFile, XTest } from "ep.uni.util"
import { Install } from "../src/utility/Install"

XTest.Test("Install Toolchains", async () => {
    XFile.DeleteDirectory(XEnv.DataPath)
    await Install.Process(["--protoc=29.2", "--gitproxy=https://ghproxy.cn/"]) // Install specified version.

    XFile.DeleteDirectory(XEnv.DataPath)
    await Install.Process(["--all"]) // Install all toolchains.
})