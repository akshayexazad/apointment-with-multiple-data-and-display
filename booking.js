let add =document.getElementById('btn-add');
add.addEventListener('click' , addone)

function addone(){
let name=document.getElementById('textip').value;
let addid=document.getElementById('ulc');
let  elmcreate=document.createElement('li');
let addtext=document.createTextNode(name);
elmcreate.appendChild(addtext); 

addid.appendChild(elmcreate)
let str= '--'
let email=str+document.getElementById('textip2').value;
let addid2=document.getElementById('ulc');
let addtext2=document.createTextNode(email);
elmcreate.appendChild(addtext2);
addid.appendChild(elmcreate);
let obj={
    name,
    email
}
let arrobj=Object.keys(obj);
for(i=0;i<=arrobj.length;i++){
    console.log(arrobj[i]);
}

localStorage.setItem(obj.email,JSON.stringify(obj));


 
}