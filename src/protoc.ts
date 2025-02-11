// Copyright (c) 2025 EFramework Organization. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import { XEnv, XFile, XLog, XTest } from "ep.uni.util"
import { Install } from "./utility/Install"
import { execSync, spawnSync } from "child_process"

export async function Protoc(args: string[]) {
    await Install.Process(args)

    if (!(args.length == 0 || args.indexOf("-h") >= 0 || (args.indexOf("--help") >= 0 || (args.indexOf("--version") >= 0)))) {
        process.env["PATH"] = `${process.env["PATH"]}${process.platform == "win32" ? ";" : ":"}${XEnv.DataPath}` // Add local plugin bin for building.
        args.push(`--proto_path=${XFile.PathJoin(XEnv.DataPath, "..", "res")}`) // Add proto lib for searching.
    }
    XLog.Debug("Protoc with arguments: {0}", args.join(" "))

    const bin = XFile.PathJoin(XEnv.DataPath, "protoc", "bin", process.platform === "win32" ? "protoc.exe" : "protoc")
    if (XTest.IsJest) {
        execSync(`${bin} ${args.join(" ")}`, { env: process.env })
    } else {
        const child = spawnSync(bin, args, {
            stdio: [process.stdin, process.stdout, process.stderr],
            shell: false,
            env: process.env
        })
        if (child.error) throw child.error
        process.exit(child.status)
    }
}

if (process.argv[1].endsWith("protoc.js")) {
    (async () => await Protoc([...process.argv.slice(2)]))()
}