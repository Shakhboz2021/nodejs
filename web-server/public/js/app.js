console.log('Client side page loaded');



/*fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then(data => {
        console.log(data);
    })
});*/


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const location_addr = document.querySelector('#location');
const forecast_ = document.querySelector('#forecast');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    forecast_.textContent = 'Loading...';
    location1 = search.value;
    location_addr.textContent = 'You entered ' + location1;
    fetch('/weather?address=' + location1)
        .then(response => {
            response.json().then(data => {
                if (data.error) {
                    console.log(data.error);
                    forecast_.textContent = data.error;
                } else {
                    console.log(data.location);
                    console.log(data.forecast);
                    forecast_.textContent = data.forecast;
                }
            })
        })
});