# 上传更新到 GitHub（常用命令）

每次你修改完网站文件后，在项目目录执行以下命令：

```bash
git status
git add .
git commit -m "更新说明（写这次改了什么）"
git push
```

## 示例

```bash
git status
git add .
git commit -m "调整移动端菜单显示与首页样式"
git push
```

## 常见补充

- 如果提示没有可提交内容：说明你还没改文件，或改动未保存。
- 如果提示需要指定分支：

```bash
git push origin main
```

- 查看提交历史：

```bash
git log --oneline -n 5
```

