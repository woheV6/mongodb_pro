const db=connect('bigdata')
const starttime=Date.now()
const result = db.datas.find({randNum0:'4948319'},{username:1,randNum0:1}).hint({randNum0:1})
result.forEach(item=>{
    printjson(item)
})
print(Date.now()-starttime)