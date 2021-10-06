exports.carData = (req, res) => {
    const data = '../public/data/Cars.json';
    res.sendfile(data);
    console.log('sent data')
};