const book = {
    title : "1984",
    author: "George Orwell",
    isAvailable: false
};

const bookJSON = JSON.stringify(book); //แปลงเป็น string 
console.log(bookJSON);

let Obook = JSON.parse(bookJSON);//แปลงจาก string เป็น object 
//console.log(Obook.title);
console.log(Obook)