let cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        console.log('hello,said'+" " +this.name+" "+'the'+" "+this.breed);
    }
};
let cat2 = {
    name: 'nehu',
    breed: 'videsi',
    color: 'black',
    greeting: function () {
        console.log('hello,said'+" " +this.name+" "+'the'+" "+this.breed);
    }
}
let section = document.createElement('div');
let para1 = document.createElement('p');
let para2 = document.createElement('p');

// para1.innerHTML = cat.greeting();
para1.textContent = cat.greeting();
para2.textContent = cat2.greeting();
section.appendChild(para1.textContent);
section.appendChild(para2)

