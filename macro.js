let nj = require("nunjucks");
nj.configure("src");

let result = nj.render("macro.html", function(err, res) {
  if (err) {
    console.log(err);
  } else console.log(res);
});
