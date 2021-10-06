const dataURL = '../data/cars.json';
const req = new XMLHttpRequest();
req.open('GET', dataURL);
req.responseType = 'json';
req.send();

console.log('Data reseved');
        
req.onload = () => {
    const data = req.response;
    console.log(data);
    
    const cars = data['Cars'];

    const myList = document.createElement('ul');

    

    
    for (let i = 0; i < cars.length; i++) {
        console.log(i);

        const listItem = document.createElement('li');
        listItem.textContent = cars[i].Make + ' ' + cars[i].Model + ' ' + cars[i].Year;
        myList.appendChild(listItem);
    }

    document.getElementById('myCars').appendChild(myList);
    
}