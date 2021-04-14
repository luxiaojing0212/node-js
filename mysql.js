var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : '2008vue'
});
 
connection.connect();
 
connection.query('select * from p_users limit 5', function (error, results, fields) {
if (error) throw error;
    console.log('The solution is: ', results);
});
 
connection.end();
