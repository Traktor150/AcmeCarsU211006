exports.home = (req, res) => {
    //const homes = require('../public/home.html');
    res.sendfile('public/home.html')
    console.log('sent home')
};