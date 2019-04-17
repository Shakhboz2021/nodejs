// Object property shorthand

const name = 'Shakhboz';
const userAge = 25;

const user = {
    name, // It is same syntax with => name: name, it is called object property shorthand
    age: userAge,
    location: 'Tashkent'
};
console.log(user);

// Object destructing

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4
};

// const label = product.label;
// const stock = product.stock;

const {label: productName, stock, rating = 5} = product;

// console.log(label);
console.log(productName); // can change name of object property
console.log(stock);
console.log(rating);

const transaction = (type, {label, stock}) => { // object property can be used as an argument
    console.log(type, label, stock);
};

transaction('order', product);