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
  - multi=ture 查询所有
  - set 表示只更新目标字段
  - inc 原来的基础上做计算
  - unset 用于将key删除
  - upsert=true 没有查到就新增
    ```
        // set
        db.worksat.update({name:'zs'},{$set:{age:2}},{multi:true})
        // inc 对数字进行计算
        db.worksat.update({name:'zs'},{$inc:{age:+2}},{multi:true})
        // 给每一项加一个字段
        db.worksat.update({},{$set:{insertList:[]}},{multi:true})
        // 删除某个字段
        db.worksat.update({"name":"zs"},{$unset:{"age":""}})
        // 修改内嵌字段
        db.worksat.update({name:'zs'},{$set:{'skill.fe':'node koa'}})
        // 没有查到就新增
        db.worksat.update({name:'xiaodong'},{$set:{'skill.fe':'node koa'}},{upsert:true})
        // 新增数组值
        db.worksat.update({name:'xiaodong'},{$push:{books:"swift"}})
        // ne 查找是否存在 不存在就新增一个爱好 music
        db.worksat.update({name:'xiaodong',"books":{$ne:'gos'}},{$set:{like:'music'}})
        // 批量新增数组值
        const newList=['express','es5']
        db.worksat.update({name:'xiaodong'},{$addToSet:{books:{$each:newList}}})
    ```
### 查询
- 精确查询
  - db.us.find({list:['book']})
- 模糊查询
  - db.us.find({list:'book'}) // 包含book
  - db.us.find({list:{$all:['book','music']}}) // 必须包含这两个
  - db.us.find({list:{$in:['book','music']}})// 只要包含一个即可
- 数组个数查询
  - db.us.find({interest:{$size:4}}) // 查找出interest 数量有4个的情况
### 建立索引
- db.us.ensureIndex({username:1})
- 获取索引：db.us.getIndexes()
- 删除索引：db.us.dropIndex('username_1')
### 建立全文索引
- db.us.ensureIndex({content:'text'})

### 创建用户登陆
  - 创建用户+登陆
  - 建权 db.auth("hehong","123456")
  - 重启mongod服务：mongod --auth （建权之后就不能用 mongo 来登陆了)
  - 查找用户：db.system.users.find()
  - 删除用户：db.system.users.remove({user:'hehong'})
    ```
            const db=connect('admin')
            // 创建一个用户
            //db.system.users.remove({user:'hehong'})
            db.createUser({
                user:'hehong',
                pwd:'123456',
                customData:{
                    name:"何虹",
                    email:"wohev5@163.com",
                    age:18
                },
                roles:[{
                    role:'readWrite',
                    db:'company'
                },"read"]
            })
            // 然后登陆
            // mongo -u hehong -p 123456 127.0.0.1:27017/admin
    ```
## 数据库操作
  - brew services start mongodb  ---启动

  - brew services stop mongodb --停止

  - brew services restart mongodb --重启

### 备份
- mongodump --host 127.0.0.1 --port 27017 --out svn_mes_web/test/mo/
### 恢复
- mongorestore --host 127.0.0.1 --port 27017  svn_mes_web/test/mo/
### mongo GUI工具 
- git@github.com:woheV6/adminMongo.git
- npm install
- npm start