const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"doctor",
    password:"Letsdoit!",
    port:5432,
});

module.exports=pool;