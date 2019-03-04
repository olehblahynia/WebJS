function checkFields(obj) {     
    if ("age" in obj) { 
        alert( 'field age is present in object -' + obj);  //не понятно, вместо имени обьекта выводит [object Objekt]???
    } 
    if ("sex" in obj) {
        alert( 'field sex is present in object -' + obj);
    } 
    if ("fathername" in obj) {
        alert( 'field fathername is present in object -' + obj);
    }
}

let a = {};
a.name ="";
a.surname = "";
a.age = "";
a.sex = "";

checkFields(a);

let b = {};
b.name ="";
b.surname = "";
b.fathername = "";
b.age = "";

checkFields(b);

let c = {};
c.name ="";
c.surname = "";
c.fathername = "";
c.sex = "";

checkFields(c);



