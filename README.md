# ET.NOD.PBX
[![Version](https://img.shields.io/npm/v/et.nod.pbx)](https://www.npmjs.com/package/et.nod.pbx)
[![Downloads](https://img.shields.io/npm/dm/et.nod.pbx)](https://www.npmjs.com/package/et.nod.pbx)  
Tool NOD.PBX easily installs protoc/grpc toolchains and compiles .proto files into various languages such as Go, C#, JavaScript, Lua, etc.  
NOD.PBX 工具能够快捷安装protoc/grpc工具链，并将.proto文件编译成多种语言，包括Go、C#、JavaScript、Lua等。

## Features | 功能特性
### Languages | 多语言输出
| Lang/Format | Protobuf | GRpc | XProto |
| :-: | :-: | :-: | :-: |
| Go | ✅ | ✅ | ✅ |
| C#(.NET) | ❓ | ❓ | ❌ |
| Javascript(Web) | ✅ | ✅ | ➖ |
| Lua | ❌ | ❌ | ➖ |
- ✅: Supported&Tested ➖: Ignored
- ❓: Developing/Testing ❌: Planing

### Toolchains | 快捷工具链
- Installs protoc/grpc toolchains easily. 快捷安装 protoc/grpc。
- Simplify access restrictions for China region mirrors. 优化中国区镜像访问限制。

## Manual | 使用手册
- Install/安装: npm i -g et.nod.pbx

- Cmd1/命令1: protox [options], distinct with protoc. 与protoc消歧义。
  * --help: reveal manual. 查看文档。
  * --version: print version. 显示版本。
  * --install: install protoc toolchains. 安装工具链。
  * * --all: install all toolchains. 安装所有。
  * * --protoc=${version}: protoc tool version, default: 29.2. protoc工具版本, 默认: 29.2。
  * * --protoc-gen-go=${version}: protoc-gen-go tool version, default: latest. protoc-gen-go工具版本, 默认: 最新。
  * * --protoc-gen-go-grpc=${version}: protoc-gen-go-grpc tool version, default: latest. protoc-gen-go-grpc工具版本, 默认: 最新。
  * * --protoc-gen-js=${version}: protoc-gen-js tool version, default: 3.21.4. protoc-gen-js工具版本, 默认: 3.21.4。
  * * --protoc-gen-web-grpc=${version}: protoc-gen-web-grpc tool version, default: 1.5.0. protoc-gen-web-grpc工具版本, 默认: 1.5.0。
  * * --protoc-gen-ts=${version}: protoc-gen-ts tool version, default: latest. protoc-gen-ts工具版本, 默认: 最新。
  * * --gitproxy=${url}: git proxy url, default: https://ghproxy.cn/. git代理地址, 默认: https://ghproxy.cn/。
  * * --goproxy=${url}: go proxy url, default: https://goproxy.cn,direct. go代理地址, 默认: https://goproxy.cn,direct。
  * * --npmproxy=${url}: npm proxy url, default: https://registry.npmmirror.com/. npm代理地址, 默认: https://registry.npmmirror.com/。
  * --xxx_out: equals to protoc, 与原生工具参数相同。

- Cmd2/命令2: protoc [options], origin tool, 原生工具。
  * --help: reveal manual. 查看文档。
  * --version: print version. 显示版本。
  * --xxx_out: compile proto. 编译proto文件。

- Cmd3/命令3: protoc-gen-go-pbx [options], parse services meta and register into XProto. 解析grpc服务描述并注册至XProto协议中。
  * --go-pbx_out=/path/to/output

- Cmd4/命令4: protoc-gen-js-fix [options], fix some es6 gen issues. 修复在es6模式下的库导入及模块导出问题。
  * --js-fix_out=/path/to/input:/path/to/output

- Cmd5/命令5: protoc-gen-ts-fix [options], fix some bad gen issues. 修复在grpc-web模式下的若干代码生成问题。
  * --ts-fix_out=/path/to/input:/path/to/output

## FAQ | 常见问题
- Note1/注1: 使用protox或protoc命令时会注入proto库目录及工具链path。
- Note2/注2: protoc支持匹配一级目录的所有*.proto, 但不支持目录递归**/*.proto。
- Note3/注3: 经过protoc-gen-ts-fix生成的文件中 import XXX from "XXX" 报错, 解决方法: tsconfig.json中加入"esModuleInterop": true。

## Changelog | 版本记录
### 0.0.1 - 
- [0.0.1] Initial commit. 首次提交。

## Developer | 开发者
### Developing | 开发流程
- 运行测试: Test Current/All
- 本地安装: npm run release && npm link

### Publishing | 发布流程
- Trigger [workflow](https://github.com/eframework-org/ET.NOD.PBX/actions/workflows/publish.yml) to publish.
- 触发 [工作流](https://github.com/eframework-org/ET.NOD.PBX/actions/workflows/publish.yml) 以发布。

### Disscussion | 开发议题
- protoc工具链安装参考
  - https://github.com/timostamm/protobuf-ts
  - https://github.com/YePpHa/node-protoc
  - https://grpc.io/blog/installation/

- proto3和proto2有什么区别?
  - 语法上更加简洁, 去掉了required支持, 所有的字段都是可选的。
  - 不再支持自定义默认值, 字段的默认值只能根据字段类型由系统决定。
  - WireType相互兼容。

- protoc-gen-xxx使用小记:
  - protoc-gen-js: 无注释, es6支持有限, import依赖不自动生成, 成员通过函数形式调用(**没加括号**很容易写错), 无命名空间, 枚举的字段**全部转大写了**。
    - protobuf-javascript/generator/js_generator.cc -> JSIdent -> is_upper_camel. protobuf-javascript/generator/js_generator.cc -> JSIdent -> is_upper_camel
    - grpc-web/generator/grpc_generator.cc -> LowercaseFirstLetter. grpc-web/generator/grpc_generator.cc -> LowercaseFirstLetter
  - protoc-gen-ts: 无注释, typescript支持良好, import依赖自动生成, 成员通过字段形式调用, 包名作为命名空间, 未使用的枚举/消息**不导出**。
  - protoc-gen-go: 有注释, 各种特性支持良好。
  - protoc-gen-csharp: 有注释, 各种特性支持良好。

- 如何开发protoc-gen-xxx插件?
  - --xxx_out: 调用protoc-gen-xxx插件。
  - --xxx_opt=key1=value1,..: 将参数传递给上述插件。
  - 多个插件的调用是无序的, 且所有插件执行完毕后才会输出。
  - 开发补丁形式的插件应当设置输入和输出。
  - 参考本项目protoc-gen-go-pbx等插件的源码。
