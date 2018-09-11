 let fs = require('fs');
 let nj = require('nunjucks');
 var contact = fs.readFileSync('./src/contact.html','utf8');
 nj.configure('src');
 let result = nj.render('contact.html');
 console.log(result);