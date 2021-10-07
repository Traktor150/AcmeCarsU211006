'use strict';

exports.carData = (req, res) => {
    const data = '../public/data/Cars.json';
    res.sendfile(data);
    console.log('sent data')
};

exports.carId = (req, res) => {
    const cars = '../public/data/Cars.json';
    const CarsData = cars['Cars'];

    let car_data = CarsData.find( x => {
        return x.Id == req.params.Id;
    });

    

    res.send(car_data);
    console.log('sent singel data');
};