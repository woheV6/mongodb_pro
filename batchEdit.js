const db=connect('company')
// set
//db.worksat.update({name:'zs'},{$set:{age:2}},{multi:true})
// inc
//db.worksat.update({name:'zs'},{$inc:{age:+2}},{multi:true})
// 给每一项加一个字段
db.worksat.update({},{$set:{insertList:[]}},{multi:true})
print('[num] update ok!')