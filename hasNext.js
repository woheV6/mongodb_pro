const db=connect('company')
const result= db.workmate.find({age:{
    $gte:30
}},{_id:0,name:1,age:1})
while(result.hasNext()){
    printjson(result.next())
}