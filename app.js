// COntain Method in JS
// let element = document.getElementById("tital")
// let target = document.getElementById("p1")
//====================================
// let find = target.innerText;
// console.log(find);
// (hasAttribute) && (hasChildNode)    Method in JS
// ================================
//  let  element = document.getElementById("tital")
//  let target = element.hasChildNodes();
//  console.log(target);

//===================== isEqualNpde Method in JS ======

// let tax = document.getElementById("tax")
// let tax1 = document.getElementById("tax1")

// let find = tax.isEqualNode(tax1);
// console.log(find);
// let a = 0;
//  let id = setInterval(amin, 1000)

//     function amin(){
//         a = 50;

// if(a == 500){
//     clearInterval(id)

// }else{
//     document.getElementById("test").style.marginLeft = a  + 'px'

//     }

//     }

// JS Method ClientWidth & ClientHeght

//  let targert = document.querySelector("#test");
//   let whi = targert.clientWidth
//   let hei = targert.clientHeight

//   console.log(whi);
//   console.log(hei);

// JS client -X && Client -Y Method.

// ====================================

//   var left = 0;
//   var up = 0 ;

//   document.querySelector("body").addEventListener('keydown', function(e){
//     console.clear()

//     switch(e.key){
//       case "ArrowRight"
//     left +=   5;
//     break;
//      case "ArrowLeft"
//      left -= 5;
//  break;
//      case "ArrowDown"
//      up += 5;
//      break;
//      case "ArrowUp"
//      up -= 5;
//      break;
//      default:
//  console.log("wrong ");
//          break;}

//          console.log ( "left " +  left )
//          console.log ( "up " +  up )

//          var target = document.querySelector("#box");
//          target.style.marginLeft = left + " px"
//          target.style.marginRight = up + " px"

//    })
//================================

//  let welcome =  name => `welcome  ${name}`;
//  console.log(welcome("Muhammad Tayyab"));

//  let fn = (name1, cous, ...args) => {
//     console.clear()
//     document.write(`Hello ${name1} of ${cous}`)

//     let sum = 0;
//     for( let i in args){
//         sum += args[i]
//     }
//     console.log(sum + "<br>")

// sum( "M Tayyab ", "Tayyab", 90,56,44,)

//  }

//=======================================
//Desturctureing array with Function
// function user() {
//     return ["Tayyab", 23, "faisalabad"]
// }
// let [ name, age, city] = user()
// console.log(name);
// console.log(age);
// console.log(city);

//Desturctureing with Obj

// let user = {
//     name: "M tayyab",
//     age : 21,
//     city: "faisalabad"

// }

// let { name, age, city} = user;

// console.log(name);
// console.log(age);
// console.log(city);

// OOP Class==============

// class student{
//     constructor ( name, age){

//         this.studentname = name;
//         this.studentage = age;
//         console.log( " Constructure function");
//     }

//     hello(){
//         Document.write(`Hello ${this.studentname} your age is ${this.studentage}`)
//     }

// }

// let a = new student( "M.Tayyab", 22)
// let b = new student( "Mb", 21)

// a.hello()
// b.hello()

//========= Module in Js ==========

//  export let message = "Muhammad Tayyab";

//    export function yahoo() {
//     console.log(message + " " + "Sarwar");

//  }

//Promises in Js ======

// function prom(pro){
//     return new Promise (function(res, rej){
//         if(pro){
//             res("Tayyab Sb")

//         }else{
//             rej( "tayyab")
//         }

//     })
// }

// console.log(prom(false));

// Fetch Api ==========

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((Response) => Response.json())
// .then((data) => {
//     console.log(data);
//     for( var x in data ){
//         var a = `${data[x].name} </br> ${data[x].email} ${data[x].city}`
//         document.write(a);
//     }
// } )
// .catch((e) => document.write("can't  fetch Data"));

// Itrators in Js========

// var x = "apple"
// let y = x[Symbol.iterator]()
// let res = y.next();
// while(!res.done){
//   console.log(res.value);
//   res = y.next();
// }
// for (let char of x){
//   console.log(char);
// }

//Generators in JS=======
// function *gen(){
//   yield 'yeild no:1'
//   yield 'yeild no:2'
//   yield 'yeild no:3'
// }
// let gan = gen();
// console.log(gan.next());
// gan.next();

//21)Strict Mode in JS=============

// 'use strict'
// function test(a,b ){
//   console.log(a+b);
// }
// test(30,20);
//Error Handling in Js
//  try{
// baaba
//  }catch(e){
// console.log(e.stack);
//  }
// connvert Json to Js obj => Json.parse()
// connvert (Js obj)  to Json => Json.Stringfy()
// ========ERROR Handling In Js==============
// try {
//   let json = '{"name": "Tayyab", "age":"33"}';
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new Error(" Incomplete Message");
//   }
//   console.log(user.name);
//   console.log(user.age);
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("Finally");
// }
