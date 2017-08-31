
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'my home', year: new Date().getFullYear() });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'my contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.skills = function (req, res) {
	res.render('skills', { title: 'skills', year: new Date().getFullYear() });
};