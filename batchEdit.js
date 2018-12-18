const db=connect('company')
// set
//db.worksat.update({name:'zs'},{$set:{age:2}},{multi:true})
// inc
//db.worksat.update({name:'zs'},{$inc:{age:+2}},{multi:true})
// 给每一项加一个字段
//db.worksat.update({},{$set:{insertList:[]}},{multi:true})
// 删除一个字段
// db.worksat.update({name:'zs'},{$unset:{age:''}})
// 修改内嵌字段
//db.worksat.update({name:'zs'},{$set:{'skill.fe':'koa'}})
// 新增数组值
// db.worksat.update({name:'xiaodong'},{$push:{'books':'java'}})
// ne 查找是否存在 不存在就新增一个爱好 music
// db.worksat.update({name:'xiaodong',"books":{$ne:'gos'}},{$set:{like:'music'}})
// addToSet ne的升级版 没有则新增
// db.worksat.update({name:'xiaodong'},{$addToSet:{books:'c++'}})
// each 批量新增数组
db.worksat.update({name:'xiaodong'},{$addToSet:{books:{$each:['es5','es6']}}})
print('[num] update ok!')