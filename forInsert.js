const db= connect('numbase')
const starttime= Date.now()
for(let i=1;i<10000;i++){
    db.numbase.insert({numa:i})
}
const r=Date.now()-starttime
print(r)