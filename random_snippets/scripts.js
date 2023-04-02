//Javascript comments use the same syntax as java.
/* 
This multi-line comment is just hear to show you that you can do that.
*/
console.log('I shoulda learned this like 13 years ago!');

let magic;
let prev = null;
console.log(magic);
magic = 1
console.log(prev);
prev = 0;

for (let i = 0; i < 10; i++) {
    console.log(magic);
    magic = magic + prev;
    prev = magic - prev;
}

/*
//uncomment this section to make the button happen in the html
//it has been commented out for doing the rest of the exercises from the console.

const btn = window.document.querySelector('.button');
//references an html element <a class="button">...</a>
btn.addEventListener('click', () => {
    console.log('clicked');
    window.document.body.style.backgroundColor = 'red';   
});
*/

const human = {
    constructor: function(name, age, sex, orientation) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.orientation = orientation;
    },
    dna: 'AACTGCT'
}

const aristocrat = {
    speak: function() {
        console.log('How dare you impose upon the exalted person of ' + this.name + '!');
    },
    dna: 'AAAAAAA'
}

const commoner = {
    speak: function() {
        console.log('I am ' + this.name + ', and I am a commoner.');
    }
}

Object.setPrototypeOf(aristocrat, human);
Object.setPrototypeOf(commoner, human);

console.log(commoner.dna);
console.log(aristocrat.dna);

console.log(Object.getPrototypeOf(aristocrat));
