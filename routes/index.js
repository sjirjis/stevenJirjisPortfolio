exports.index = function (req, res) {
    res.render('index', { title: 'my home', year: new Date().getFullYear() });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'contact', year: new Date().getFullYear() });
};

exports.skills = function (req, res) {
	res.render('skills', { title: 'skills', year: new Date().getFullYear() });
};

exports.portfolio = function (req, res) {
	res.render('portfolio', { title: 'portfolio', year: new Date().getFullYear() });
};
