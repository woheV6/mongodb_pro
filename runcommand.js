const db=connect('company')
const myModify={
    findAndModify:'worksat',
    query:{name:'xiaodong'},
    update:{$set:{skill:'java'}},
    new:true
}
const ResultMessage=db.runCommand(myModify)
printjson(ResultMessage)
