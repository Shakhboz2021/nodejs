const event = {
    name: 'Birthday party',
    guestList: ['Shakhboz', 'Mirodil', 'Suxrob'],
    printGuests() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach(guest => {
            console.log(guest + ' is attending at ' + this.name)
        })
    }
};
event.printGuests();