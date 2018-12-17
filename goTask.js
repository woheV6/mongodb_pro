const username="wangwu"
const timeStamp=Date.now()
const josnDatabase={
    loginUser:username,
    loginTime:timeStamp
}
const db=connect('log') // 链接
db.log.insert(josnDatabase) // 插入
print('[data] insert success !')