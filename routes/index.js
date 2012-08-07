var mu = require ("mu2");
mu.root = __dirname + '/../views';
/*
 * GET home page.
 */

exports.index = function(req, res){
	var stream = mu.compileAndRender('index.mu', {});
	stream.pipe(res);
};