const db=connect('numbase')
const starttime= Date.now()
const list=[]
for(let i=1;i<10000;i++){
    list.push({num:i})
}
db.numbase.insert(list)
const r=Date.now()-starttime
print(r)
print('[num] insert ok!')