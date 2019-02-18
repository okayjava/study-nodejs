require('date-utils');

 
module.exports = function(app)
{
     app.get('/',function(req,res){
        var cheerio = require('cheerio');  
        var request = require('request');

        var url = 'http://localhost:3001';  
        request(url, function(error, response, html){  
        if (error) {throw error};
            
            j = JSON.parse(html);
            var dt = new Date();

            j.head.time = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
            console.log(__dirname);
            const myModule = require( __dirname +'/../include/module.js');
            j.head.text = myModule.hello();

            const MyClass = require ( __dirname + '/../include/class.js');
            const cat = new MyClass();
            j.head.class = cat.makeSound();
            
            console.log (j);
            res.render('index.html', j);

        });
        
        // res.render('index.html')
     });
     app.get('/about',function(req,res){
        res.render('about.html');
    });
}