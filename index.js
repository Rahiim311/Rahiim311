// function sayHello() {
//     console.log("Hello")
// }
// let fanStaus = false;
// let fanSpeed = 1;

// function toggleFan() {
//     if (fanStaus == false) {
//         fanStaus = true;
//         console.log("fan Is On ");
//     }

//     else {
//         fanStaus = false;
//         console.log("fan is  off")
//     }

// }
// function incremntFan() {

//     if (fanSpeed < 3 && fanStaus == true) {
//         fanSpeed++;

//         console.log(" fan speedis : " + fanSpeed);
//     }
// }

// function decremntFan() {

//     if (
//         fanSpeed >= 1 && fanStaus == true) {
//         fanSpeed--;
//         console.log("fan speed :" + fanSpeed)
//     }

// }

// // كود المروحة

// let input = document.querySelector("#billValue");

// function showDiscount() {
//     let value = input.value * 14 / 100;
//     console.log(value);
// }

// // كود الضريبة

// let valInput = document.querySelector("#val");
// let wifeIndex = document.querySelector("#select");
// let maleInput = document.querySelector("#male");
// let femaleInput = document.querySelector("#female");

// function calc() {
//   let merathValue = +valInput.value;
//   let isWife = +wifeIndex.value;
//   let wifeValue = 0;

//   function isWifeFun() {
//     wifeValue = (1 / 8) * merathValue;
//     merathValue -= wifeValue;
//   }

//   isWife == 1 ? isWifeFun() : null;

//   let finalSaham = merathValue / (2 * +maleInput.value + +femaleInput);

//   isWife == 1 ? console.log(  + wifeValue) : null;

//   console.log(`قيمة ميراث الذكر : ` + finalSaham * 2);
//   console.log(`قيمة ميراث الأنثي : ` + finalSaham);
// }

//  المواريث بها خطامسالة عند عدم وجود الزوجة الحسبة خطا

// let a = 10;
// let b = 20;

// function avvege() {

//   let final = (a + b) / 2;

//   document.write(final);

//   return final;

// }

// let ava = avvege();

// الجزئية الاولي

// let a = 10;
// let b = 15;

// let x = 100;
// let y = 150;

// // function avvege(no1, no2 ,type) {
// //   let sub = no1 + no2;
// //   let ava = (no1 + no2) / 2;

// //   if (type==1){return sub;}
// //   else {return ava;}

// // }

// // console.log (avvege(10,20, 1  ));

// // console.log (avvege(10,20, 2 ));

// // // console.log(avvege (50,100));
// // // console.log(avvege (a,b));
// // // console.log(avvege(x,y));
// الجزئية الثانية

// let in1input = document.querySelector("#num1");
// let in2input = document.querySelector("#num2");
// let typeInput = document.querySelector("#type");

// function calc(no1, no2, type) {
//   if (type == 1) {
//     return no1 + no2;
//   } else if (type == 2) {
//     return (no1 + no2) / 2;
//   } else if (type == 3) {
//     return no1 * no2;
//   } else if (type == 4) {
//     return no1 / no2;
//   }
//   let result = calc(in1input.value, in2input.value, typeInput.value);
//   console.log(result);
// }

// // كود حسبة الضرب والقمسة والجمع

// // array الجزئية الاولي
// let prouduct=["ipone8","ipohnex","ipohne11",];
// console.log(prouduct[0]);
// console.log(prouduct[1]);
// console.log(prouduct[2 ]);
// // array الجزئية الاولي

// // array الجزئية الثانية

// let prouduct = ["ipone8", "ipohnex", "ipohne11"];
// let price = [600, 400, 800];

// price[0]=900;

// prouduct.push("note 23");
// prouduct.push("iphone13");

// console.log(prouduct);
// console.log(prouduct[0] + ":" + price[0]);
// console.log(prouduct[1] + ":" + price[1]);
// console.log(prouduct[2] + ":" + price[2]);

// function addnew(){
// let newproudect=prompt("enter new proudect ");
// prouduct.push(newproudect);
// console.log(prouduct);

// }

// // الجزئية الثانية

// // الجزئية الثالثة
// let tasks = [];

// let input = document.querySelector("input");

// function addtask() {
//   tasks.push(input.value);
//   console.log(tasks);
// }

// function deltask() {
//   tasks.pop(input.value);
//   console.log(tasks);
// }

// // الجزئية الثالثة

// for (let index = 0; index < 20; index++) {
//   console.log("hello" + (index + 1));
// }

// let nos = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25,
// ];

// for (let i = 0; i <= 25; i++) {

//   // big if

//   let rename = i % 5;
//   if (rename == 0) {
//     console.log("boom");
//   } else {
//     console.log(i);
//   }

//   // short if
//   // i % 5 == 0 ? console.log("bom") : console.log(i);
// }

// producet
// let proudects = ["iphone", "iphone7", "iphone8", "iphonex"];
// proudects.forEach((el) => {
//   console.log(el);
// });

// producet

// // Opjects
// let userinfo = {
//   name: "ali",
//   lastName: "ali",
//   age: 33,
//   country: "egy",

//   showFullName: function () {
//     console.log(userinfo.name, +"  " + userinfo.lastName);
//   },
// };
// console.log(userinfo);
// console.log(userinfo.country + " :  " + userinfo.lastName);
// // console.log(userinfo.lastName + " :  " + userinfo.lastName);

// userinfo.showFullName();
// console.log;
// // opject

// let prooducts = [
//   {
//     name: "iphone 13",
//     price: 900,
//     color: ["white ", "red ", "blue"],
//     qty: 17,
//   },

//   {
//     name: "ihpone6S",
//     price: 450,
//     color: ["red", "red", "green"],

//     qty: {
//       alex: 50,
//       egypt: 29,
//       mina: 12,
//       quna: 17,
//     },
//   },
// ];

// prooducts.forEach((all, index) => {
//   console.log(all.name +   "  >>"     +  all.price);
// });

// // console.log(prooducts[1].qty);

// console.log(prooducts[1].qty.quna);
// console.log(prooducts[0].color[1]);

// DOm Start
// Selecetors
// let h1 = document.getElementById("#h1");
// let headrs = document.getElementsByClassName("h1");
// // العناصر في ال class بتكون عبارة عن arrary يمكن تفكه بي for.each
// let hs = document.getElementsByTagName("h1");

// let h1 = document.querySelector("#h1");
// // QuereySelector ديه بتحدد اي عنصر سواء id or Class or or
// let h1 = document.querySelectorAll("#h1");
// // QuereySelector ديه بتحدد اي عنصر سواء id or Class or or ديه لكل العناصر الي ال واخدة نفس ifor class

// وفي حجات seclect ODD

// let h1 = document.querySelector("#h1");
// لاضافة html نسخدم inner html
// لتعديل ال text نستخدم inner Text
// color +background +font   == style="  "
// لمسح عنصر نستخدم remove
// للتعديل في class attritupte -dispiale

// 1   //
// h1.innerText = "hello from java script";

// let ans = "Cairo";
// let ansIndex = false;
// let p = document.querySelector("#p1");

// function toGshowAns() {
//   if (ansIndex == false) {
//     p.innerText = ans;
//     ansIndex = true;
//   } else {
//     p.innerText = "";
//     ansIndex = false;
//   }
// }

// 1  //

// 2//
// let counter = 1;
// let span = document.querySelector("span");
// span.innerText = counter;

// function plus() {
//   counter++;
//   span.innerText = counter;
// }

// function plus() {
//   counter++;
//   span.innerText = counter;
// }
// function minus() {
//   if (counter > 1) {
//     counter--;
//   }
//   span.innerText = counter;
// }
// 2//

// 3//

// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let user = "ali  ";
// h2.innerText = "<h1> Hello From JS </h1>";
// h1.innerHTML = `

// <ul>
//   <li>test 1 </li>
//   <li>${user} </li>
//   <li>test 3 </li>
//   <li>test4</li>
// </ul>`;

// 3//

// 4//

// let color = ["red", "green", "blue"];
// let ul = document.querySelector("ul");
// color.forEach((color) => {
//   ul.innerHTML += `<li>${color}</li>`;
// });

// let h1 = document.querySelector("h1");
// function changeStyle() {
//   // h1.remove(); // لمسح عنصر
//   let h1 = document.querySelector("h1");
//   h1.style.color = "red";
//   h1.style.backgroundColor = "blue";
//   h1.style.fontSize = "7rem";
//   h1.style.padding = "2rem";
// }

// 4//

// 5//

// // let h1 = document.querySelector("h1");
// // h1.classList.replace("")         تبع ال boot strap

// let input = document.querySelector("input");

// function togglePass() {
//   if (input.getAttribute("type") == "text") {
//     input.setAttribute("type", "password");
//   } else {
//     input.setAttribute("type", "text");
//   }
// }
// let in2input = document.querySelector("#input2");

// in2input.checked = false;

// in2input.disapled = false;

//   //  لمعرفة القيمة ال مكتبوة جوا الكود input.value مهمة معا ال inputs

//   // inner.html
//   //  inner.text
//   // styles  .
//   // set atritbuite
//   // get atrierbite
//   // في بعض ال atritbtue مميزة مثل value  ,displed

//   // 5//

// Start  8-7-2024  //

//  Start  1     //

// let username = "ali";
// const useColors = ["blue", "red", "white "];
// // فائدة ال const انها تجعل قيمة ثابتة لا تتيح التغير
// useColors.push("hello");
// useColors.splice(1, 3, 4);

// useColors.forEach((el, index) => {
//   console.log(el);
// });

//    End 1     //

//  2 Scoop Start//
// 1-Global Scoop

// 2- Local scoop
// 3- Block scoop
// 4- Lexul Scoop

// 1- اي متغير دايما حدودوه داخل الاقواس ال شغال عليها مهمة

// let x = 20; // ده ال scoop global بيكون متعرف في اي حتة فوق او تحت  بره ال functions
// function sayHello() {
//   let x = 50;
//   if (x == 50) {

//     let x = 30;    // ده ال ليكس سكوب بيكون فنص ال الfuntion
//   }
//   console.log(x);
// }

// 2 Scoop end//

// 3- Events Start  Mouse CLICK

// function sayHello() {
//   alert("TesT");
// }

//                      SCRLOING Mouse STart
// function changeColor(event) {
//   event.target.remove();
// }

// let header = document.querySelector("header");

// function cahngeHeadrColor(event) {
//   console.log(event);
//   if (window.scrollY != 0) {
//     header.style.backgroundColor = "blue";
//     header.style.position = "fixed";
//   } else {
//     header.style.backgroundColor = "white";
//     header.style.position = "static";
//   }
// }
//                      SCRLOING Mouse end
// 3-Events End

// <!-- Asynchronous and synchronous  CODE   START -->

// setTimeout(() => {
//   //Asynchronous  CODE مثال الجزئ ده غير متزامن (غير ملتزم بالترتيب )

//   console.log("hello from set Time"); // Asynchronous  CODE مثال الجزئ ده  غير متزامن (غير ملتزم بالترتيب )
// }, 3000); // Asynchronous  CODE مثال الجزئ ده  غير متزامن (غير ملتزم بالترتيب )

// console.log("hllo from java script"); //مثال هذا الجزئ syncoruyec code متزامن (ملتزم بالترتيب)

// function sayHello() {
//   setTimeout(() => {
//     console.log("get date From backend");
//   }, 3000);
// }

// function sayHello() {
//   setTimeout(() => {
//     console.log("get date From backend");
//   }, 3000);
// }

// console.log("Hello1");
// sayHello();
// console.log("hello 2");

// // 1-Function to fetch data from an API  مثال لل ----Async ,await-----
// async function fetchData(url) {
//   try {
//     // Await: انتظر الحصول على الاستجابة من API
//     let response = await fetch(url);

//     // Await: انتظر تحويل الاستجابة إلى JSON
//     let data = await response.json();

//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Test
// let apiUrl = "https://api.example.com/data";
// fetchData(apiUrl).then((data) => {
//   // Process the data
//   console.log(data);
// });

// //1- Function to fetch data from an API  مثال لل ----Async ,await-----

// // 3- مثال الي ال Callback Funtion

// function great(name) {
//   alert("hello" + name + "!");
// }

// function processUserInput(callback) {
//   let userInbut = document.getElementById("userInput").value; // عند السمتخدم اما يدخل الداتا
//   callback(userInbut); // بننادي علي الfunction عشان نجيب ال داتا ال كتبها user
// }

// function getUserInput() {
//   processUserInput(great); // بعد كده بنجيب ال داتا ونعرضها ال اخدناها
// }

// // 3- مثال الي ال Callback Funtion

// // 2- مثال الي ال Callback Funtion

// // دالة تجلب البيانات من خادم وهمي
// function fetchDataFromServer(callback) {
//   console.log("جاري جلب البيانات من الخادم...");

//   // محاكاة عملية غير متزامنة باستخدام setTimeout
//   setTimeout(() => {
//     let data = "بيانات من الخادم";

//     // استدعاء دالة الاسترجاع وتمرير البيانات إليها
//     callback(data);
//   }, 2000); // محاكاة تأخير 2 ثانية
// }

// // 56-مثال مهم
// setTimeout(() => {}, 3000); // ال function بره بتنادي علي ال function ال جوه بعد التلت ثواني
// //56- مثال مهم

// // دالة الاسترجاع التي ستعالج البيانات بعد جلبها
// function processData(data) {
//   console.log("تم جلب البيانات: " + data);
// }

// // استدعاء الدالة مع دالة الاسترجاع
// fetchDataFromServer(processData);

// شرح الكود
// تعريف دالة fetchDataFromServer:

// تأخذ دالة استرجاع (callback) كمعامل.
// تطبع رسالة تشير إلى بدء جلب البيانات من الخادم.
// تستخدم setTimeout لمحاكاة تأخير لمدة 2 ثانية، مما يمثل الوقت الذي قد يستغرقه الخادم للرد.
// داخل setTimeout:

// بعد 2 ثانية، يتم تعيين قيمة data إلى "بيانات من الخادم".
// يتم استدعاء دالة الاسترجاع (callback) مع تمرير البيانات إليها.
// تعريف دالة الاسترجاع processData:

// تأخذ البيانات كمعامل وتطبع رسالة تشير إلى أنها استلمت البيانات.
// استدعاء fetchDataFromServer:

// يتم تمرير processData كدالة استرجاع. عندما تكتمل عملية جلب البيانات (بعد 2 ثانية)، سيتم استدعاء processData ومعالجة البيانات المستلمة.
// نتيجة التنفيذ
// عند تنفيذ الكود، ستكون النتيجة كما يلي:

// 2- مثال الي ال Callback Funtion

// <!-- Asynchronous and synchronous  CODE   END -->

//  End 8-7-2024  //

// Start 15-7-2024  -- عن المكتبات و العداادات واللودر
// -------------------------Start of Carsal -1--------------------------
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 10,

// //   // Responsive breakpoints
// //   breakpoints: {
// //     // when window width is >= 320px
// //     320: {
// //       slidesPerView: 2,
// //       spaceBetween: 20,
// //     },
// //     // when window width is >= 480px
// //     480: {
// //       slidesPerView: 3,
// //       spaceBetween: 30,
// //     },
// //     // when window width is >= 640px
// //     640: {
// //       slidesPerView: 4,
// //       spaceBetween: 40,
// //     },
// //   },

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
//---------------- end of Carsal -1-----------

// <!--  Start of  Counteinres العدادات --2  --2   -->

// let start = 1;
// let counterEI = document.querySelector("#counter");
// let x = setInterval(() => {
//     let step =start*9;
//   counterEI.innerText = step ++;
//   console.log("Hello");
//   start+=5;
// }, 50);

// testing

// Testeing

// // لازم عشان نوقفال Set Intervel نعملهاواحدة تانية ٍثفلإهةث خعف وبعديها cleaer Intervel
// setTimeout(() => {
//   clearInterval(x);
// }, 5000);

// <!--  End of  Counteinres العدادات --2  --2   -->

// <!--  Start of  Loaders   --3   -->

// let loaderIndex = true;
// let Loader = document.querySelector("#loader");
// function toggleLoader() {
//   // اختصارة للجزء التحت

//   // لو عايز تعكس الشرط
//   loaderIndex
//   Loader.classList.toggle("d-none");
//   Loader.classList.toggle("d-flex");

//   loaderIndex = !loaderIndex;
//   // اختصارة للجزء التحت

//   // if (loaderIndex == true) {
//   //   Loader.style.display="none"
//   //   loaderIndex = false;
//   // } else {
//   //   Loader.style.display="flex"
//   //   loaderIndex = false;
//   // }

//   console.log(loaderIndex);
// }
// setTimeout(() => {
//   toggleLoader();
// }, 2000);

// <!--  End of  Loaders   --3   -->

// Moadls
// let modalIndex = false;
// let modal = document.querySelector(".Modal");
// function toggleModal() {
//   modalIndex
//     ? modal.classList.replace("d-flex", "d-none")
//     : modal.classList.replace("d-none", "d-flex");
//   modalIndex = !modalIndex;
// }

// Modals

// End 15-7-2024  -- عن المكتبات و العداادات واللودر

// ---------------Start 18-7-2024-- Restaunt  +  Decriting  +    Promise//

// ---------------------------Restarunrt-------------------------------//
// let data = [
//   { name: "burger1", price: 200, cat: "burgers" },
//   { name: "burger2", price: 200, cat: "burgers" },
//   { name: "burger3", price: 200, cat: "burgers" },
//   { name: "burger4", price: 200, cat: "burgers" },

//   { name: "Pizza1", price: 200, cat: "Pizza" },
//   { name: "Pizza1", price: 200, cat: "Pizza" },
//   { name: "Pizza1", price: 200, cat: "Pizza" },
//   { name: "Pizza1", price: 200, cat: "Pizza" },

//   { name: "drink1", price: 200, cat: "drinks" },
//   { name: "drink2", price: 200, cat: "drinks" },
//   { name: "drink3", price: 200, cat: "drinks" },
//   { name: "drink4", price: 200, cat: "drinks" },
// ];

// let burgers = data.filter((el, index) => {
//   return el.cat == "burgers";
// });
// let pizza = data.filter((el, index) => {
//   return el.cat.toLowerCase() == "pizza".toLowerCase();
// });
// console.log(groubCats());

// function groubCats() {
//   let cats = [];
//   data.forEach((el, index) => {
//     cats.indexOf(el.cat) == -1 ? cats.push(el.cat) : null;
//   });
//   return cats;
// }
// let catsDiv = document.querySelector(".cats");

// let data2 = {
//   burgers: [
//     { name: "burger1", price: 200 },
//     { name: "burger2", price: 200 },
//     { name: "burger3", price: 200 },
//     { name: "burger4", price: 200 },
//   ],

//   pizza: [
//     { name: "Pizza1", price: 200 },
//     { name: "Pizza1", price: 200 },
//     { name: "Pizza1", price: 200 },
//     { name: "Pizza1", price: 200 },
//   ],
//   drinks: [
//     { name: "drink1", price: 200 },
//     { name: "drink2", price: 200 },
//     { name: "drink2", price: 200 },
//     { name: "drink2", price: 200 },
//   ],
// };
// localStorage.setItem("data", JSON.stringify(data2));

// // console.log(data2.burgers);
// // console.log(Object.keys(data2));

// let cats = Object.keys(data2);

// function renderCats() {
//   catsDiv.innerHTML = "";
//   cats.forEach((el, index) => {
//     // خل بالك وانت بتعبت PARMTER بيوصل متغير مش اسم (قيمة ) فلازم نحطه بين علامة تنصيص
//     catsDiv.innerHTML += `<button  onclick="showProducts('${el}');"  class=" btn btn-primary" >${el}</button>`;
//   });
// }
// renderCats();

// function showProducts(cat) {
//   let products = data2[cat];
//   catsDiv.innerHTML = "";
//   products.forEach((el, index) => {
//     // خل بالك وانت بتعبت PARMTER بيوصل متغير مش اسم (قيمة ) فلازم نحطه بين علامة تنصيص
//     catsDiv.innerHTML += `<button  onclick=";"  class=" btn btn-primary" >${el.name} [${el.price}]</button>`;
//   });
//   console.log(data2[cat]);
// }

// ---------------------------Restarunrt-------------------------------//

// <!-- --Start--Destuctiing -->

// let x = [10, 20, 30, 40, 50, 60, 70, 80];
// let y = [10, 20, 30, 40, 50, 60, 70, 80, 100, 200, 300];

// let z = [...x, 100, 200, 300]; // Sprid نقوم بعملها لفتح ال array ووضع اشيائ داخله
// let [x1, x2, x3, x4, x5, , , x8] = x; // لتفكيك الا ARRRY Dedctricon

// console.log(z);
// let = [, , , , , x6] = x;
// console.log(x6);

// // Plus 2 ARR//
// let g = [55, 85, 97, 41];
// let p = [79, 67, 97, 82, 36];
// let pl = [...g, ...p]; // Plus 2 ARR//

// console.log(pl);

// // لتجميع عدد متغيرات وعناصر  غير معروف في Arry يلم كل شيئ
// function sum(...unknowNumbers) {
//   console.log(unknowNumbers);
// }
// sum(5, 6, 7, 9, 10, 7);

// // /////////Example 2

// function sum(...unknowNumbers) {
//   let final = 0;
//   unknowNumbers.forEach((element) => {
//     final += element;
//   });
//   console.log(final);
// }
// sum(5, 6, 7, 9, 10, 7);

// ----------Opject Decttring Example  ----------//
// let userInfo = {
//   name: "ali",
//   age: 19,
//   from: "cairo",
// };
// let { name, age, from } = userInfo;
// console.log(from);

// لتغيرال key الخاص بي ال opject باسم اخر

// let userInfo = {
//   name: "ali",
//   age: 19,
//   from: "cairo",
// };

// let userData = {
//   x: 1,
//   y: 2,
//   h: 6,
// };

// let plusUsers = { ...userInfo, ...userData }; // لجمع اثنين من Opject
// console.log(plusUsers); // لجمع اثنين من Opject

// let { name: username, from, age } = userInfo; // لتغيرال key الخاص بي ال opject باسم اخر

// console.log(username);

// let newUser = { ...userInfo, pass: 8899 }; //لأضافة صفة جديدة+  Key ادخل ال Opject
// console.log(newUser);

// ----------Opject Decttring Example  ----------//
// <!-- --ENd--Destuctiing -->

// ------Start--Promises--------------//

//  resLove = Succes Proimse نجاح الوعد
//  reject  = fail Proimse   فشل الوعد

// let passtaPromise = new Promise((resLove, reject) => {
//   let buyingDone = true;
//   if (buyingDone == true) {
//     resLove("الحجاة جات تمام نقدر نعمل المكرونة ");
//   } else {
//     reject("منقدرش نعمل المكرونة ");
//   }
// });
// passtaPromise
//   .then((res) => {
//     console.log(res);
//     console.log("ابدا اعمل المكرونة ");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("انت مشتريتش الحاجة اصلن ");
//   });

// Example 2
// let callDb = new Promise((resLove, reject) => {
//   let conect = false;
//   setTimeout(() => {
//     conect = true;
//     if (conect) {
//       resLove("conect Is Done");
//     } else {
//       reject("conet Lost");
//     }
//   }, 5000);
// });

// callDb
//   .then((res) => {
//     console.log(res);
//     console.log("render date to System ");
//   })
//   .catch((err) => {
//     alert(err);
//   });

// Example 2


// Example 3 --axios--// مكتبة اسمها Axios

// First, install Axios if you haven't already:
// npm install axios

// const axios = require('axios');

// // Making a GET request
// axios.get('https://api.example.com/data')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error making GET request:', error);
//   });

// Example 3 --axios--//

// Testing

// Testing

// ------End--Promises--------------//

// ---------------End   18-7-2024-- Restaunt  +  Decriting  +    Promise//
