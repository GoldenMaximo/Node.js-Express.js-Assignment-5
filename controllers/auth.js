const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    User.findOne().then(foundUser => {
        let user;
        if (foundUser) {
            user = foundUser
        } else {
            // Create a user for anyone who's accessing the project for the first time
            user = new User({
                name: 'Mock user',
                email: 'email@email.com',
                cart: {
                    items: []
                }
            });
            user.save();
        }
        req.session.user = user;
        req.session.isLoggedIn = true;
        res.redirect('/');
    });
};