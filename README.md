# ET.NOD.PBX

[![Version](https://img.shields.io/npm/v/et.nod.pbx)](https://www.npmjs.com/package/et.nod.pbx)
[![Downloads](https://img.shields.io/npm/dm/et.nod.pbx)](https://www.npmjs.com/package/et.nod.pbx)  

NOD.PBX 工具简化了 Protocol Buffers 和 gRPC 的安装与使用，支持多种编程语言的代码生成。

## 功能特性

### 多语言支持
| 语言 | Protobuf | gRPC | XProto |
|:---:|:---:|:---:|:---:|
| Go | ✅ | ✅ | ✅ |
| C#(.NET) | ❓ | ❓ | ❌ |
| JavaScript(Web) | ✅ | ✅ | ➖ |
| Lua | ❌ | ❌ | ➖ |
- ✅已支持  ❓开发中  ❌未支持  ➖不适用

### 工具链管理
- 🚀 一键安装 protoc/gRPC 工具链
- 🌐 优化中国区镜像访问限制

## 操作手册

### 1. 安装工具
```bash
npm install et.nod.pbx
```

### 2. 命令说明

#### protox - 主命令
与 protoc 区分的工具入口命令。

```bash
protox [options]
```

选项：
- --help：查看文档
- --version：显示版本
- --install：安装工具链
  - --all：安装所有工具链
  - --protoc=<ver>：protoc 工具版本,默认：29.2
  - --protoc-gen-go=<ver>：protoc-gen-go 工具版本,默认：latest
  - --protoc-gen-go-grpc=<ver>：protoc-gen-go-grpc 工具版本,默认：latest
  - --protoc-gen-js=<ver>：protoc-gen-js 工具版本,默认：3.21.4
  - --protoc-gen-web-grpc=<ver>：protoc-gen-web-grpc 工具版本,默认：1.5.0
  - --protoc-gen-ts=<ver>：protoc-gen-ts 工具版本,默认：latest
  - --gitproxy=<url>：git 代理地址,默认：https://ghproxy.cn/
  - --goproxy=<url>：go 代理地址,默认：https://goproxy.cn,direct
  - --npmproxy=<url>：npm 代理地址,默认：https://registry.npmmirror.com/
- --xxx_out：与原生工具参数相同

#### protoc - 原生命令
Protocol Buffers 原生编译工具。

```bash
protoc [options] proto_files
```

选项：
- --help：查看文档
- --version：显示版本
- --xxx_out：编译 proto 文件

#### 代码生成插件

1. protoc-gen-go-pbx
解析 gRPC 服务描述并注册至 XProto 协议。
```bash
--go-pbx_out=/path/to/output
```

2. protoc-gen-js-fix
修复 ES6 模式下的库导入及模块导出问题。
```bash
--js-fix_out=/path/to/input:/path/to/output
```

3. protoc-gen-ts-fix
修复 gRPC-Web 模式下的代码生成问题。
```bash
--ts-fix_out=/path/to/input:/path/to/output
```

## 常见问题

如有问题，请提交 [问题反馈](CONTRIBUTING.md#问题反馈)。

### 1. proto 文件编译
- protoc 命令会自动注入 proto 库目录和工具链路径
- 支持 `*.proto` 匹配一级目录，不支持 `**/*.proto` 递归匹配

### 2. TypeScript 导入错误
问题：protoc-gen-ts-fix 生成的文件中 `import XXX from "XXX"` 报错
解决：在 tsconfig.json 中添加 `"esModuleInterop"：true`

## 项目信息

- [更新记录](CHANGELOG.md)
- [贡献指南](CONTRIBUTING.md)
- [许可证](LICENSE)
