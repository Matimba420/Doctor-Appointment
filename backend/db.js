const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"Doctor",
    password:"123456",
    port:5433,
});

module.exports=pool;