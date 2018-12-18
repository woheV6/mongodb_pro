const db=connect('company')
const result= db.workmate.find({
    age:{
        $gte:30
    }
},{
    name:1,age:1,_id:0
})
result.forEach(item=>{
    printjson(item)
})