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

const btn = window.document.querySelector('.button');
//references an html element <a class="button">...</a>
btn.addEventListener('click', () => {
    console.log('clicked');
    window.document.body.style.backgroundColor = 'red';   
});