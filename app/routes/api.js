var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// connection configurations
/*const mc = mysql.createConnection({
    host: 'inventorydatabase.cisctc4b8ieq.ap-south-1.rds.amazonaws.com',
    user: 'rajmvjn',
    password: 'myamazon',
    database: 'inventoryDB'
});

// connect to database
mc.connect();*/

router.post('/api/authenticate', function(req, res) {
    var userData = req.body;

   /* mc.query("SELECT id,name FROM user WHERE uname=? AND pwd = ?;", [userData.uname, userData.pwd], function (error, results, fields) {
        if (error){
            throw error;
        } else{
            if(results.length > 0){
                return res.send({ error: false, data: results, message: 'User authenticated' });
            }else{
                return res.send({ error: true, data: results, message: 'User authentication failed' });
            }
        }
    });*/
	
	return res.send({ error: false, data: {}, message: 'User authenticated' });

});

module.exports = router;
