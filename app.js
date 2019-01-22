var express = require('express');
var app = express();
let promise = require('bluebird');

const initOptions = {
    promiseLib: promise,
};

const config = {
    host: 'localhosdt',
    port: 5432,
    database: 'classPostgres',
    user: 'Oscar'
}

const pgp = require('pg-promise')(initOptions);

const db = pgp(config);

// db.query('SELECT * FROM people')
// .then((results)=>{

//     results.forEach(()=> {
//         console.log(`${r.name} ${r.age} ${r.id}`)
//     })
// })

db.one('SELECT * FROM people WHERE id=3')
.then((result)=> {
    console.log(`Their name is: ${result.name}`)
})

db.result("INSERT INTO people VALUES(DEFAULT, 'Raul', 21)")
.then((result)=> {
    console.log(result);
})

app.listen(300, ()=> {
    console.log("listening on port 3000")
})