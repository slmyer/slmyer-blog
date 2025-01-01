## Slmyer Blog

使用 `NextJS` 与 `TailWind` 开发的 `MDX` 个人网站，[Slmyer Blog 网站地址](slmyer.cn)。

## 部署方式

1. 使用 `Github Actions` 推送至服务器，后端使用 Docker 进行部署，具体可以参考 `deploy.yaml`:

```yaml:deploy.yaml
name: Deploy to Server

on:
push:
  branches:
    - main # 只在推送到 main 分支时触发

jobs:
deploy:
  runs-on: ubuntu-latest
  steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Execute remote SSH commands
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SERVER_IP }} # 部署服务器的 IP 或域名
        username: ${{ secrets.SERVER_USER }} # SSH 用户名
        key: ${{ secrets.SSH_PRIVATE_KEY }} # SSH 私钥，已配置在 GitHub Secrets 中
        port: 2222 # 你的自定义 SSH 端口
        script: |
          # 设置项目路径和仓库地址，作为动态环境变量
          PROJECT_DIR="$HOME/slmyer/slmyer-blog"
          REPO_URL="git@github.com:slmyer/slmyer-blog.git"

          # 进入项目目录，如果不存在则克隆仓库
          cd $PROJECT_DIR || git clone $REPO_URL $PROJECT_DIR && cd $PROJECT_DIR

          # 拉取最新的代码并重置任何本地更改
          git reset --hard
          git pull origin main

          # 启动docker
          docker compose down
          docker compose up -d --build

```

2. NextJS 镜像体积问题：
   修改 `NextJS` 打包输出，参考 `next.config.ts`:

```typescript:next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
}

export default nextConfig

```
