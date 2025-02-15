# 更新记录

## [0.0.3] - 2025-02-15

### 优化
- 优化 protoc 命令的环境变量配置
  - 添加 GOROOT/bin 到 PATH
  - 添加 GOPATH/bin 到 PATH
  - 确保 Go 工具链可以正常使用
- 修复 Protocol Buffers 枚举命名冲突问题
  - 修改 MemMode.Undefined 为 None
  - 保持 LogLevel.Undefined 不变
  - 避免同一 package 中的枚举值命名冲突

### 文档
- 完善 README 常见问题说明
  - 添加 Protocol Buffers 枚举命名规范
  - 说明 C++ 作用域规则的影响
  - 提供具体的命名示例

## [0.0.2] - 2025-02-11

### 新增
- 添加 follow-redirects 处理下载重定向
- 添加 @types/follow-redirects 类型定义

### 优化
- 统一使用 XEnv.LocalPath 替代 XEnv.DataPath
- 优化工具链下载过程，支持 HTTP/HTTPS 重定向
- 更新 ep.uni.util 依赖至 0.0.4 版本

### 文档
- 完善 README.md 使用说明
- 添加 CONTRIBUTING.md 贡献指南
- 添加技术讨论和插件开发指南

### 构建
- 更新 package.json 依赖配置
- 更新 package-lock.json 版本锁定

## [0.0.1] - 2025-01-25
- 首次提交
- 支持 protoc/gRPC 工具链安装
- 支持多语言代码生成
