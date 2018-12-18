const db=connect('company')
// 安装年龄范围查找 12-17
let query={
    age:{
        $lte:17,
        $gte:12
    }
}
// 安装时间查询
const satrtTime=new Date('22/12/2018')

query={
    regeditTime:{$gt:satrtTime}
}
db.worksat.find(query,{
    name:true,
    _id:false,
    age:true,
    "skill.one":true
})

db.worksat.find({
    regeditTime:{$gt:new Date('01/01/2018')}
},{
    name:true,
    _id:false,
    age:true,
    "skill.one":true
})
