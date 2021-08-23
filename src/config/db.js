const Pool = require("pg").Pool;


const pool = new Pool({
    user:'postgres',
    password:'queijo123',
    database:'project',
    host:'localhost',
    port:5432,
});

// pool.query('select * from users', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })

module.exports = pool;