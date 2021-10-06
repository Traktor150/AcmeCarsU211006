exports.carDataJs = (req, res) => {
    //const data = '../public/script/app.js';
    res.sendfile('public/script/app.js');
    console.log('sent js');
};