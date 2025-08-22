//-----------STRING CONCEPT

// --------SPLIT

let a = "I am a good boy";
a = a.split(""); //aita letter wise split, double quotation-ar moddhe jodi gap dei, than oita word wise split hobe(gap tao print hobe)//
console.log(a);

let b = "I am a good boy";
let c = b.split(" "); //akhane double quotation-ar moddhe gap deoa hoeche tai aita word wise split hobe(word wise-a gap print hoina )//
console.log(c);

let x = "I, am, a, good, boy";
x = x.split(","); //double quotation-ar moddhe jeta likhbo seta hatiye debe//
console.log(x);

let d = "I am a good boy";
d = d[3].split(""); //index wise split vabe kaaj korche
console.log(d);

let e = "I am a good boy";
e = e.split("", 4); //position wise split hoche , jotota position number debo tototai print hobe ,gap tao count hoche(aita letter wise position hoche)
console.log(e);

let f = "I am a good boy";
f = f.split(" ", 4);//position wise split hoche, akhane gap deoa hoche tai aita word wise poistion hoche
console.log(f);



//--------LENGTH

let a = "   Biswajit Makhal ";
console.log(a.length);//koto gulo elements ache seta bojhar jonno length use kori,space tao count hoi//

let b = "   Biswajit Makhal ";
b = b.trim().length; //unusual space ke hatiye dei kintu middle-ar gap ta thakbei//
console.log(b);



//--------REPLACE

let c = "Biswajit Makhal";
c = c.replace("Makhal", "Dutta");//first tai ki replace korte hobe , tarporer tai konta diye replace korbo//
console.log(c);

let d = "Biswajit Makhal";
d = d.replace(" ", "");//middle-ar space ta hatanor jonno, space ta replace korlam nothing diye//
console.log(d);















