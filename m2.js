let nj = require("nunjucks");
nj.configure(["src", "node_modules"]);

let result = nj.render("m2.html", function(err, res) {
  if (err) {
    console.log(err);
  } else console.log(res);
});
