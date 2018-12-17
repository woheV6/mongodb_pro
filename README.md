# mongodb_pro
# mac 上安装mongodb

- brow install mongodb
- mkdir -p /data/db/
- sudo chown username /data/db/
- open ~/.bash_profile
    - export PATH=${PATH}:/usr/local/Cellar/mongodb/4.0.4_1/bin
    - Source  ~/.bash_profile
    - 修改 MongoDB 配置文件, 
      - 配置文件默认在 /usr/local/etc 下的 mongod.conf：
        ```
            # Store data in /usr/local/var/mongodb instead of the default /data/db
            # Store data in /usr/local/var/mongodb instead of the default /data/db
        dbpath = /data/db
            # Append logs to /usr/local/var/log/mongodb/mongo.log
            logpath = /usr/local/var/log/mongodb/mongo.log
            logappend = true
            # Only accept local connections
            bind_ip = 127.0.0.1
        ```
- 我们来尝试启动服务端：mongod
    - mongo 的交互式控制台并连接到默认服务器（localhost:27017）
    - show dbs 查看有哪些

### 认识mongodb
- 储存结构：数据库>集合>文件
- show dbs 显示所有的数据库
- use dbname 进入数据库 如果没有则帮你新建，但是在没有集合前，它还是默认为空
- show collections 显示数据库中的集合（关系型数据库叫做表）
- db 显示当前位置

### 操作
- 插入数据 db.user.insert({"name":"zhangsan"})
- 修改数据 db.user.updata({"name":"zhangsan"},{"name":"xiaosan"})
- 删除数据 db.user.remove({"name":"zhangsan"})
- 删除整个集合 db.user.drop()
- 删除整个数据库 db.dropDatabase()

### 用js执行shell命令
    - mongo task.js
### 批量操作比循环操作快很多
### 大文件用静态存储 存路径

### 批量修改
  - multi所有
  - set 表示只更新目标字段
  - inc 原来的基础上做计算
    ```
        // set
        db.worksat.update({name:'zs'},{$set:{age:2}},{multi:true})
        // inc
        db.worksat.update({name:'zs'},{$inc:{age:+2}},{multi:true})
        // 给每一项加一个字段
        db.worksat.update({},{$set:{insertList:[]}},{multi:true})
    ```