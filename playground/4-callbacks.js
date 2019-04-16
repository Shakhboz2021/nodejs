const names = ['Shakhboz', 'Mirodil', 'Suxrob'];
const shortNames = names.filter((name) => { // Syncronous function
    return name.length <= 4
});
const geocode = (addr, callback) => { //fully Asyncronous function
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        };
        callback(data)
    }, 2000)
};

geocode('Tashkent', (data) => {
   console.log(data);
});
