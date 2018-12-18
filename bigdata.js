const db=connect('bigdata')
db.datas.drop()
// 生成随机数
function getRandomNum(min,max){
    let rang=max-min
    let rand=Math.random()
    return (min+Math.round(rand*rang))
}
function getRandomName(min,max){
    let tempStringArray='123456789asdfghjklmnbvcxzqwertyuiop'.split('')
    let outResult=''
    for(let i =0;i<getRandomNum(min,max);i++){
        outResult=outResult+tempStringArray[getRandomNum(0,tempStringArray.length)]
    }
    return outResult
}
let list=[]
for(let i=0;i<2000000;i++){
    list.push({
        username:getRandomName(7,16),
        regeditTime:new Date(),
        randNum0:getRandomNum(100000,999999),
        randNum1:getRandomNum(100000,999999),
        randNum2:getRandomNum(100000,999999),
        randNum3:getRandomNum(100000,999999),
        randNum4:getRandomNum(100000,999999),
        randNum5:getRandomNum(100000,999999),
        randNum6:getRandomNum(100000,999999),
        randNum7:getRandomNum(100000,999999),
        randNum8:getRandomNum(100000,999999),
        randNum8:getRandomNum(100000,999999)
    })
}
db.datas.insert(list)