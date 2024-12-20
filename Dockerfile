# 阶段 1：安装依赖
FROM node:18-alpine AS base

WORKDIR /app

# 仅拷贝必要文件以利用 Docker 缓存
COPY package.json package-lock.json* .npmrc* ./

RUN npm ci 

# 阶段 2：构建
FROM base AS builder

WORKDIR /app

# 拷贝源代码和依赖
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 阶段 3：运行时
FROM node:18-alpine AS runner

WORKDIR /app

# 创建非 root 用户
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# 仅拷贝运行所需文件
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

# 切换到非 root 用户
USER nextjs

# 暴露端口
EXPOSE 3000

# 环境变量
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# 启动服务
CMD ["node", "server.js"]
