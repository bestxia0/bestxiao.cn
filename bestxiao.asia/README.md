# bestxiao.asia

肖建军的个人网站 — 产品管理 & AI 工具研究

## 技术栈

纯静态网站：HTML + CSS + JavaScript

- 深色主题，暖金色点缀
- Noto Serif SC / Noto Sans SC 中文字体
- 响应式设计，适配移动端
- 滚动渐入动画
- 无需构建工具，直接部署

## 本地开发

直接用浏览器打开 `index.html` 即可预览：

```bash
open index.html
```

或使用本地服务器（推荐）：

```bash
# Python
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

## 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 仓库名输入：`bestxiao0.github.io`
3. 设置为 **Public**
4. 点击 Create repository

### 第二步：上传代码

```bash
# 克隆仓库
git clone https://github.com/bestxiao0/bestxiao0.github.io.git
cd bestxiao0.github.io

# 将本网站代码复制进去
cp -r /path/to/bestxiao.asia/* .

# 提交并推送
git add .
git commit -m "Initial commit: personal website"
git push origin main
```

### 第三步：配置 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择 **Deploy from a branch**
3. Branch 选择 **main**，目录选择 **/(root)**
4. 点击 Save

### 第四步：绑定自定义域名

1. 在 Settings → Pages 的 Custom domain 输入 `bestxiao.asia`
2. 勾选 **Enforce HTTPS**
3. 在你的域名注册商（阿里云/Godaddy/Cloudflare 等）添加 DNS 记录：

| 记录类型 | 主机记录 | 记录值 |
|---------|---------|--------|
| CNAME | @ | bestxiao0.github.io |
| CNAME | www | bestxiao0.github.io |

> 注意：`CNAME` 文件已包含在项目根目录，GitHub Pages 会自动读取。

DNS 生效后（几分钟到几小时），访问 https://bestxiao.asia 即可看到网站。

## 目录结构

```
bestxiao.asia/
├── index.html          # 主页面
├── CNAME               # 自定义域名配置
├── .gitignore
├── assets/
│   ├── css/
│   │   └── style.css   # 样式文件
│   └── js/
│       └── main.js     # JavaScript 交互
└── README.md
```

## 自定义内容

### 修改个人信息

编辑 `index.html` 中的以下部分：
- **Hero 区**: 标题、副标题
- **About**: 个人介绍、职业经历
- **Projects**: 项目卡片内容
- **Articles**: 文章列表
- **Contact**: 邮箱地址（目前为占位符）

### 修改颜色主题

编辑 `assets/css/style.css` 中的 `:root` 变量：

```css
--accent: #c9a84c;  /* 主色调 */
--bg-primary: #0c0c14;  /* 背景色 */
```

## 许可

MIT