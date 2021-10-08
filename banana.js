let vegetables=[
 {name:"עגבניה",img:"עגבניה.png",price:3.99 },
{name:"מלפפון",img:"מלפפון.png",price:2.99 },
{name:"פלפל",img:"פלפל2.png",price:5.99 },
{name:"גזר",img:"גזר.png",price:3.99 },
{name:"צנון",img:"צנון.png",price:7.99 },
{name:"בצל",img:"בצל.png",price:2.99 }
];
let fruit=[
    {name:"אננס",img:"אננס.png",price:15 },
   {name:"בננה",img:"בננה.png",price:5.99 },
   {name:"דובדבן",img:"דובדבן.png",price:8.99 },
   {name:"תות",img:"תות.png",price:9.99 },
   {name:"תפוח",img:"תפוח.png",price:6.99 },
   {name:"אבטיח",img:"אבטיח.png",price:2.99 }
   ];
   let Leafy =[
    {name:"חסה",img:"חסה.png",price:3.99 },
   {name:"כרוב",img:"כרוב.png",price:4.99 },
   {name:"כרובית",img:"כרובית.jpg",price:10.99 }
   ];
   let plus1=[2,3,4,5,6,7,8,9,10,11,12,13,14,15];
   let minus1=[15,14,13,12,11,10,9,8,7,6,5,4,3,2];
let divVegetables=document.getElementById('div1');
let divFruit=document.getElementById('div2');
let divLeafy=document.getElementById('div3');
for (let index = 0; index < vegetables.length; index++) {
    console.log(vegetables[index]);
    let h1=document.createElement('h5');
    let h2=document.createElement("h4");
    let div=document.createElement('div');
    h1.innerHTML=vegetables[index].name;
    h1.style.marginTop="5vh"
    h2.innerHTML=vegetables[index].price+" "+"לקילו";
    h2.style.marginTop="12vh"
    divVegetables.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h2);
    div.classList.add("styleDiv");
    let plus=document.createElement('h3');
    let number=document.createElement('h3');
    let minus=document.createElement('h3');
    div.appendChild(plus);
    div.appendChild(number);
    div.appendChild(minus);
plus.innerHTML="+";
number.innerHTML=1;
minus.innerHTML="-";
number.style.display='inline';
number.style.backgroundColor='rgb(48, 202, 48)';
number.style.margin='15px';
number.style.paddingRight='10px';
number.style.paddingLeft='10px';
minus.style.display='inline';
plus.style.display='inline';
    div.style.backgroundImage=`url("${vegetables[index].img}")`;
    div.style.backgroundSize="cover";
   

}
for (let index = 0; index < fruit.length; index++) {
    console.log(fruit[index]);
    let h1=document.createElement('h5');
    let h2=document.createElement("h4");
    let div=document.createElement('div');
    h1.innerHTML=fruit[index].name;
    h1.style.marginTop="5vh"
    h2.innerHTML=fruit[index].price+" "+"לקילו";
    h2.style.marginTop="12vh"
    divFruit.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h2);
    div.classList.add("styleDiv");
    div.style.backgroundImage=`url("${fruit[index].img}")`;
    div.style.background="cover";
    let plus=document.createElement('h3');
    let number=document.createElement('h3');
    let minus=document.createElement('h3');
    div.appendChild(plus);
    div.appendChild(number);
    div.appendChild(minus);
plus.innerHTML="+";
number.innerHTML=1;
minus.innerHTML="-";
number.style.display='inline';
number.style.backgroundColor='rgb(48, 202, 48)';
number.style.margin='15px';
number.style.paddingRight='10px';
number.style.paddingLeft='10px';
minus.style.display='inline';
plus.style.display='inline';
}
for (let index = 0; index < Leafy.length; index++) {
    console.log(Leafy[index]);
    let h1=document.createElement('h5');
    let h2=document.createElement("h4");
    let div=document.createElement('div');
    h1.innerHTML=Leafy[index].name;
    h1.style.marginTop="5vh"
    h2.innerHTML=Leafy[index].price+" "+"לקילו";
    h2.style.marginTop="12vh"
    divLeafy.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h2);
    div.classList.add("styleDiv");
    div.style.backgroundImage=`url("${Leafy[index].img}")`;
    div.style.background="cover";
    let plus=document.createElement('h3');
    let number=document.createElement('h3');
    let minus=document.createElement('h3');
    div.appendChild(plus);
    div.appendChild(number);
    div.appendChild(minus);
plus.innerHTML="+";
number.innerHTML=1;
minus.innerHTML="-";
number.style.display='inline';
number.style.backgroundColor='rgb(48, 202, 48)';
number.style.margin='15px';
number.style.paddingRight='10px';
number.style.paddingLeft='10px';
minus.style.display='inline';
plus.style.display='inline';

}
for (let index = 0; index < plus1.length; index++) {
    function result(){return plus1[index];

    };
   

};

let bar=result()
console.log(bar);




