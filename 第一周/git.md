# git和github
-git：版本控制工具
之前有个老项目运行不错，但是觉得技术比较陈旧，设计的风格比较古老，所以公司决定更新迭代，当程序员开发完成之后，测试的时候也没问题，单是上线的时候新网站挂了，你怎么办？
新的挂了，老的可以运行那就用老的不就完了，等新的没问题了在用

-github:网站，远程代码管理仓库，（基友平台）(^_^)

### 集中式 vs 分布式
    集中式缺点：
    必须要联网，不交慢，都是使用一个中央服务器有可能会照成数据丢失。

    分布式：
    不用联网就能进行变笨控制，速度快
### 初始化版本控制状态
    找到要控制的文件目录，鼠标右键，找到 git bash hrer 点击
    打开控制台，输入gitinit
    版本控制都是基于 git这个隐藏文件夹的，如果不小心把，git文件删除了，那么就是不能进行版本控制了

    查看git状态
        git status
    通过tab键补全文件
    通过ll过着ls查看目录文件
    通过上下键去切换刚才输入的命令

### 设置作者信息
-设置用户名  git config --global 
user.name '你的名字'
-设置邮箱   
git config --global user.email'你的邮箱'

工作区到暂存区
 git add 指定文件
 git add . 把把当前目录的所有文件都放到暂存区

 暂存区到版本区
 git commit -m '注释（你能直接识别的注释即可'
 快速把工作区的代码放到版本区（已经被管理过得文件）
 git commit -a-m'注释'
 注意：上边的这个命令。前提条件已经提交过了一次才可以使用

 查看版本
 git log
 git reflog （如果版本操作的多使用这个命令）

 查看每个区域的不同点
    工作区跟暂存区的区别：
    git diff
工作区跟版本区的区别：
git different master
暂存区跟版本区的区别
git different --cached

## 过滤指定文件 
    -创建一个 gitignore（创建文件）
    -touch.gitignore (创建文件)
    -配置过滤项
    https://www.cnblogs.com/zhihang/p/10611475.html（过滤项规则，也是可以在网上找找别的）/create。txt node_modules/

    -如果所配置不起作用 可以先把之前的·操作清除一下，在过滤操作
        清除命令
        git rm -r --cached .

    撤销滚回：
    gitreset --hard 版本ID

#github其实有很多托管平台，github自私其中一个，码云，coding...

把我们的代码放到远程仓库
1.在github上创建一个项目
2.绑定秘钥
ssh-keygen -t rsa -C'邮箱名'（一个电脑绑定一次即可
3.确定版本库是最新的（没有东西可以提交）
4.查看远程仓库：
git remote -v （使用git init的时候是查不出来东西的）
5.添加远程仓库 
git remote add origin （这个名字是可以改变的）
git@gitthub.com:nizp/文件名
6.git pull origin master （保证能上传成功，进行远程和本地的香槟和）
7，git push origin master 上传（第一次会出现让输入用户名和密码）