# 贡献指南

感谢您考虑为本项目做出贡献！

## 技术路线

### 1. 开发语言
- TypeScript 4.1.6：主要开发语言
- Node.js 16.11.7：运行环境

### 2. 核心依赖
- ep.uni.util 0.0.4：工具库
  - XFile：文件操作
  - XLog：日志记录
  - XString：字符串处理
  - XTest：测试框架
- follow-redirects 1.15.9：HTTP 重定向处理
- google-protobuf 3.21.4：Protobuf 支持
- grpc-web 1.5.0：gRPC Web 支持
- protobufjs 7.4.0：Protobuf 工具库

### 3. 构建工具
- rollup 2.79.1：代码打包
- rollup-plugin-typescript2：TypeScript 编译
- rollup-plugin-terser：代码压缩
- rollup-plugin-sourcemaps：源码映射

### 4. 开发流程
- 本地开发 -> 单元测试 -> 构建打包 -> 发布商店
- 遵循 TypeScript 严格模式
- 使用 Rollup 优化打包体积
- 支持 source map 便于调试

### 5. 版本控制
- 使用 Git 进行版本控制
- 遵循语义化版本规范
- 使用 GitHub Actions 自动发布

### 6. 质量控制 
- 单元测试覆盖核心功能
- 代码审查确保质量
- 自动化构建和发布

## 目录规范

### 1. 源码目录
- src/：源码目录
  - protox.ts：工具入口
  - protoc.ts：protoc 命令封装
  - protoc-gen-*.ts：代码生成插件
  - utility/：工具类

### 2. 构建目录
- dist/：构建输出目录
  - protox.js：主程序
  - protoc.js：protoc 封装
  - protoc-gen-*.js：生成器插件

### 3. 资源目录
- res/：资源文件目录
  - XProto.proto：协议定义
  - Descriptor.proto：描述文件

### 4. 配置目录
- .vscode/：VSCode 配置
  - launch.json：调试配置
  - tasks.json：任务配置
- .github/：GitHub 配置
  - workflows/：工作流配置

### 5. 测试目录
- test/：测试目录
  - Gen.*.Test.ts：生成器测试
  - Install.Test.ts：安装测试
  - proto/：测试用 proto 文件

### 6. 根目录文件
- package.json：项目配置
- tsconfig.json：TypeScript 配置
- rollup.config.js：打包配置
- jest.config.js：测试配置
- README.md：项目说明
- CONTRIBUTING.md：贡献指南
- CHANGELOG.md：更新记录
- LICENSE：许可证声明
- .gitignore：Git 忽略配置

### 7. 自动生成目录
- node_modules/：依赖目录
- dist/：构建输出
- test/log/：测试日志

## 文档规范

### 1. 语言规范
- 首选语言：中文
- 专有名词保持原文，如：Node.js、TypeScript
- 中英文之间需要空格，如：Hello 你好

### 2. 标点规范
- 中文文档使用中文标点
- 代码、命令示例使用英文标点

### 3. 格式规范
- 使用 Markdown 编写文档
- 标题使用 ATX 风格（#）
- 列表使用短横线（-）作为标记
- 代码块使用三个反引号（```）
- 文件末尾保留一个空行

### 4. 文档类型
- README.md：项目说明
- CONTRIBUTING.md：贡献指南
- CHANGELOG.md：更新记录
- LICENSE：许可证声明

### 5. 链接规范
- 使用相对路径链接项目内文件
- 使用完整 URL 链接外部资源
- 锚点使用小写，空格替换为连字符

## 代码规范

### 1. 代码风格
- 使用 TypeScript 语言编写
- 使用 4 空格缩进代码
- 使用双引号作为字符串引号
- 使用 ASI（自动分号插入）规则
- 版权声明、类、函数之间及文件末尾保留一个空行

### 2. 命名规范
- 类名：使用 PascalCase
- 函数名：使用 PascalCase
- 变量名：使用 camelCase
- 常量名：使用 UPPER_CASE
- 文件名：使用 PascalCase

### 3. 注释规范
- 基于 [JSDoc](https://jsdoc.app/) 标准
- 所有公开 API 必须包含注释
- 复杂逻辑需要添加详细注释说明
- 遵循 [语言规范](#1-语言规范) 和 [标点规范](#2-标点规范)
- 代码源文件抬头必须包含版权声明
```
// Copyright (c) 2025 EFramework Organization. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.
```

## 提交规范

### 1. 分支命名
- 功能分支：`feature/功能名称`
- 修复分支：`fix/问题描述`
- 优化分支：`optimize/优化内容`

### 2. 提交信息
- 遵循 [语言规范](#1-语言规范) 和 [标点规范](#2-标点规范)
```
<类型>: <描述>

[可选的详细描述]

[可选的关闭问题]
```

- 类型包括：
  - `feat`: 新功能
  - `fix`: 修复问题
  - `docs`: 文档更新
  - `style`: 代码格式调整
  - `refactor`: 代码重构
  - `perf`: 性能优化
  - `test`: 测试相关
  - `chore`: 构建过程或辅助工具的变动

### 3. 提交示例
```
feat: 添加XX功能
- 添加了XX特性A
- 优化了XX流程B
- 更新相关文档
  
详细说明此功能的主要变更和影响范围
  
Closes #123
```

## 测试规范

### 1. 测试覆盖
- 新功能必须包含对应的测试用例
- 修复问题时需要添加相关的测试用例
- 重构代码时确保现有测试用例通过

### 2. 测试用例编写
- 测试文件命名：`*.Test.ts`
- 使用 [EP.UNI.UTIL/XTest](https://github.com/eframework-org/EP.UNI.UTIL) 测试框架
- 测试用例需要包含正常和异常场景

## 开发流程

### 1. 克隆仓库
```bash
git clone https://github.com/eframework-org/ET.NOD.PBX.git
cd ET.NOD.PBX
```

### 2. 安装依赖
```bash
npm install
```

### 3. 开发调试
- 在 VSCode 中打开项目
- 运行 `npm run debug` 进行构建
- 使用 Jest 调试配置运行测试

### 4. 本地测试
```bash
npm run release
npm link
protox --version
```

## 发布流程

### 1. 版本号规范
- 遵循 [语义化版本](https://semver.org/lang/zh-CN/) 2.0.0
- 格式：`主版本号.次版本号.修订号`
- 示例：`1.0.0`、`1.2.3`

### 2. 更新记录规范
- 使用年月日格式：`YYYY-MM-DD`
- 按版本号降序排列
- 分类记录变更内容：
  ```markdown
  ## [1.0.0] - 2024-03-21
  ### 新增
  - 添加了新功能 A
  - 添加了新功能 B
  
  ### 优化
  - 优化了功能 C 的性能
  - 改进了功能 D 的用户体验
  
  ### 修复
  - 修复了问题 E
  - 修复了问题 F
  
  ### 变更
  - 调整了配置项 G
  - 更新了依赖库版本
  ```

### 3. 发布步骤
- 更新版本号：`npm version patch/minor/major`
- 构建发布包：`npm run release`
- 发布到商店：Run workflow [Publish](.github/workflows/publish.yml)

## 技术讨论

### 1. 工具链安装参考
以下项目提供了不同的 protoc 工具链安装方案：
- [protobuf-ts](https://github.com/timostamm/protobuf-ts)
- [node-protoc](https://github.com/YePpHa/node-protoc)
- [gRPC Installation](https://grpc.io/blog/installation/)

### 2. Proto2 vs Proto3
主要区别：
- 语法简化：Proto3 移除了 required 支持，所有字段默认 optional
- 默认值：Proto3 不支持自定义默认值，由字段类型决定
- 兼容性：WireType 保持相互兼容

### 3. 代码生成器对比

#### protoc-gen-js
- 缺点：
  - 无注释生成
  - ES6 支持有限
  - import 依赖不自动生成
  - 成员通过函数形式调用（**没加括号容易出错**）
  - 无命名空间
  - 枚举字段**全部转大写**
- 源码关键点：
  - protobuf-javascript/generator/js_generator.cc
    - JSIdent -> is_upper_camel
  - grpc-web/generator/grpc_generator.cc
    - LowercaseFirstLetter

#### protoc-gen-ts
- 优点：
  - TypeScript 支持良好
  - import 依赖自动生成
  - 成员通过字段形式调用
  - 包名作为命名空间
- 缺点：
  - 无注释生成
  - 未使用的枚举/消息**不导出**

#### protoc-gen-go
- 优点：
  - 注释生成完整
  - 各种特性支持良好

#### protoc-gen-csharp
- 优点：
  - 注释生成完整
  - 各种特性支持良好

### 4. 插件开发指南

#### 基本概念
- `--xxx_out`: 调用 protoc-gen-xxx 插件
- `--xxx_opt=key1=value1,..`: 传递参数给插件

#### 开发要点
1. 插件执行特点：
   - 多个插件并行执行
   - 所有插件执行完毕后统一输出

2. 补丁插件开发：
   - 需要设置输入和输出路径
   - 参考本项目的 protoc-gen-go-pbx 等插件实现

3. 源码参考：
   - protoc-gen-go-pbx：XProto 元数据生成
   - protoc-gen-js-fix：ES6 模块修复
   - protoc-gen-ts-fix：gRPC-Web 修复

## 问题反馈

### 1. 提交问题前：
- 搜索现有 [issues](https://github.com/eframework-org/ET.NOD.PBX/issues) 避免重复
- 确认问题可以稳定重现
- 收集必要的环境信息

### 2. 问题报告格式：
```markdown
### 问题描述
[清晰简洁的问题描述]

### 重现步骤
1. [步骤1]
2. [步骤2]
3. [步骤3]

### 期望行为
[描述期望的结果]

### 实际行为
[描述实际的结果]

### 环境信息
- Node.js 版本：如 16.11.7
- 操作系统：如 Windows 11
- 工具版本：如 0.0.1
```

## 许可证

通过提交代码，您同意将您的代码贡献置于 [MIT 许可证](LICENSE) 之下。
