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