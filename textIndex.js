const db= connect('company')
// const list=[
//     {
//         content:'this is a man,I love life, love family. Every day after work, I write a diary.'
//     },
//     {
//         content:'this is a women,I love life, love family. Every day after work, I write a book.'
//     }
// ]
// db.info.insert(list)
// print('ok!')
db.info.find({$text:{$search:'love'}})

