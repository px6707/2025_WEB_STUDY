## git

### 基本配置
1. 设置用户信息
```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

2. 为指令配置别名
- 方法1， 命令
```bash
git config --global alias.别名 '原始命令'
# 例子
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
# 查看已设置的别名
git config --get-regexp alias
# 删除别名
git config -global --unset alias.别名
```
- 方法2，bashrc文件
```bash
# 在用户根目录下创建.bashrc文件
touch ~/.bashrc
```
在文件中配置
```bash
# 基本配置
alias git-log='git log --pretty=oneline --all --graph --abbrev-commit'
alias ll='ls -al'
```


### 基础操作指令
1. 文件状态
    - 刚创建的文件 未跟踪
    - git add 之后加入到暂存区
    - git commit 暂存区 提交到 本地仓库

2. 文件状态查看
    - git status

3. 添加到暂存区
    - git add 文件名
    - git add .

4. 提交到本地仓库
    - git commit -m "提交消息"
    -am "提交消息" 表示add已经创建的修改，但新创建的不会在提交中，还是需要收 add .
5. 查看所有提交记录
    - git log
    参数 
    --all 显示所有分支
    --pretty=onelne 一行打印信息
    --abbrev-commit 缩写信息

6. 版本回退
```bash
git reset --hard HEAD^
# HEAD^ 使用git log获取
# 重置到版本之后 git log就找不到之后版本的内容了
# 插叙所有版本，可以查看回退记录，当时使用哪一个head^来回退的
git reflog

```

### git 分支
1. 创建分支
```bash
git branch 分支名
```
2. 切换分支
```bash
git checkout 分支名
# 切换并创建分支
git checkout -b 分支名
```
3. 合并分支
```bash
git merge 分支名
```
4. 删除分支
```bash
# 删除，会做检查
git branch -d 分支名
# 强制删除
git branch -D 分支名
```


### 远程分支
1. 配置秘钥
```bash
ssh-keygen -t rsa -C "你的邮箱@example.com"
```
2. 添加远程仓库
```bash
git remote add origin 你的远程仓库地址
# 修改仓库url
git remote set-url origin 你的远程仓库地址
```
3. 代码推送
如果不想每次命令都打这么全，可以进行绑定，之后只要git push即可
```bash
git push origin 分支名
```

4. 本地分支与远程分支绑定
一般的流程：git checkout -b 本地分支名
然后 git push --set-upstream origin 本地分支名推送到远端，并和远端建立关联
```bash
# 将当前本地分支与远程分支绑定
git branch --set-upstream-to=origin/远程分支名
# 或
git branch -u origin/远程分支名

# 推送并绑定当前分支到远程
git push -u origin 分支名

# 创建并切换到新分支，同时与远程分支建立关联（需要现有远程分支）
git checkout -b 本地分支名 origin/远程分支名

# 从已有的远程分支创建新分支
git push origin master:分支名

# 删除远程仓库
git push origin --delete 远程分支名

# 查看分支关联关系：
git branch -vv
```

5. 克隆
```bash
git clone 仓库地址
```
6. 抓取和拉取
```bash
# 拉取远程分支，但不合并，拉取的代码在.git/refs/origin下
# 可以通过origin/分支名称 来访问
git fetch 远程仓库名 分支名
# 手动合并
git merge 远程仓库名/分支名
# 拉取并合并
git pull
```

7. 切换到特定的提交
```bash
git checkout 提交hash

# 使用相对引用切换
git checkout HEAD^      # 切换到上一次提交
git checkout HEAD^^     # 切换到上上次提交
git checkout HEAD~3     # 切换到前3次提交

# 基于某个提交创建新分支并切换
git checkout -b 新分支名 提交hash

```
8. 查询提交之间的差异
```bash
git diff 提交hash1 提交hash2

# 查看与上一次提交的差异
git diff HEAD^

# 查看指定文件的差异
git diff 提交hash1 提交hash2  文件路径
```