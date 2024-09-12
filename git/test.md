#### 使用过的git命令
* `git add`：添加修改的代码
* `git commit`：提交当前修改的代码
* `git reset`
  `--mixed`：默认值，回退到某个版本
  `--soft`：回退到某个版本
  `--hard`：回退所有未修改的内容并删除
* `git fetch`：拉取远程的代码，使本地与之同步
* `git merge`：请求合并
* `git rebase`：变基，将本地的分支与当前远程分支保持同步
  `--abort`：撤销`rebase`
  `--skip`：丢弃引起冲突的`commit`
  `--continue`：手动解决冲突后，重新提交