const express = require('express')  //引入模块
var mysql      = require('mysql');  //引入mysql模块
const app = express()               //调用express
const port = 8080                   //服务运行的端口

//数据库接口
app.get('/user',function(req,res){
    var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : 'root',
          database : '2008vue'
        });
         
        connection.connect();
         
        connection.query('select * from p_users limit 5', function (error, results, fields) {
        if (error) throw error;
            // console.log('The solution is: ', results);
            res.send(JSON.stringify( results))
        });
         
        connection.end();

})
app.get('/', (req, res) => {
    const list = [
        {
            name:"aiqi",
            age:11
        },
        {
            name:"aiqi",
            age:11
        },
        {
            name:"aiqi",
            age:11
        }
    ]
    //将数组转化为JSION字符串

    res.send(JSON.stringify(list))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})