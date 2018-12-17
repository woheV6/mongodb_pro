const db=connect('company')
const work1={
    name:"lisi",
    age:12,
    sex:1,
    skill:{
        fe:'html'
    }
}
const work2={
    name:"zs",
    age:10,
    sex:1,
    skill:{
        fe:'css'
    }
}
const work3={
    name:"wu",
    age:19,
    sex:0,
    skill:{
        fe:'vue'
    }
}
const works=[work1,work2,work3]
db.worksat.insert(works)
print('ok!')