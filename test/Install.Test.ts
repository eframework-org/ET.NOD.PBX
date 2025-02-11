// Copyright (c) 2025 EFramework Organization. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import { XEnv, XFile, XTest } from "ep.uni.util"
import { Install } from "../src/utility/Install"

XTest.Test("Install Toolchains", async () => {
    XFile.DeleteDirectory(XEnv.DataPath)
    await Install.Process(["--protoc=29.2", "--gitproxy=https://ghproxy.cn/"]) // Install specified version.

    XFile.DeleteDirectory(XEnv.DataPath)
    await Install.Process(["--all"]) // Install all toolchains.
})