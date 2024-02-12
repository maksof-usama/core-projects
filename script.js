// function even() {
// 	var getValue = document.getElementById('user-input').value;
// 	var convertValue = parseInt(getValue);

// 	if (!isNaN(getValue) && parseInt(getValue)) {
// 		if (convertValue % 2 == 0) {
// 			document.getElementById('number-output').innerHTML = 'Even';
// 		} else {
// 			document.getElementById('number-output').innerHTML = 'Odd';
// 		}
// 		document.getElementById('user-input').value = ' ';
// 	} else {
// 		alert('Kindly enter a number');
// 		location.reload();
// 	}
// }
// function percent() {
// 	var obtainedMarks = document.getElementById('obtained-marks').value;
// 	var convertObtained = parseInt(obtainedMarks);
//     var percentage = (convertObtained / 500) * 100;

//     if(convertObtained <=500 ){
//         var percent = (convertObtained / 500) * 100;
//         if(!isNaN(obtainedMarks)){
//             if (percent >= 90) {
//                 alert("A++" + percent.toFixed(3));
//                 console.log("A++")
//             } else if (percent >= 80) {
//                 console.log("A+")
//                 alert("A+" + percent.toFixed(3));
//             } else if (percent >= 70) {
//                 console.log("A")
//                 alert("A" + percent.toFixed(3));
//             } else if (percent >= 60) {
//                 console.log("B")
//                 alert("B" + percent.toFixed(3));
//             }
//             else {
//                 alert("Congratulations you are Fail" + percent.toFixed(3));
//                 console.log("Congratulations you are Fail")
//             }
//         }
//         else{
//             alert("pleae enter an integer")
//         }
//     }
//     else{
//         alert('please enter numbers in a givern range')
//     }
// }
// function printTime(){
//     var time = document.getElementById('time').value;
//     var date = new Date(time);
//     var hours = date.getHours();
//     console.log(hours);

//     if(hours >= 6 &&  hours < 12){
//         alert("Good Morning")
//     }
//     else if(hours >=12 && hours <18){
//         alert("Good Afternoon")
//     }
//     else if(hours >=18 && hours <21 ){
//         alert("Good Evening")
//     }
//     else{
//         alert("Good Night")
//     }

// }
// function trafficLight() {
// 	let greenLight = document.getElementsByName('traffic');
// 	let checkradio = null;

// 	for (i = 0; i < greenLight.length; i++) {
// 		if (greenLight[i].checked) {
// 			checkradio = greenLight[i];
// 			break;
// 		}
// 	}

// 	if (checkradio) {
// 		switch (checkradio.value) {
// 			case 'red':
// 				alert('please wait');
// 				break;
// 			case 'green':
// 				alert('kindly go');
// 				break;
// 			case 'yellow':
// 				alert('please start your vehicle');
// 				break;
// 			default:
// 				alert('please wait');
// 				break;
//             }
//             location.reload();
// 	} else {
// 		alert(' ');
// 	}
// }
// function Topping() {
// 	let pizzaTopping = document.getElementsByName('pizzatopping');
// 	let toppingValue = null;

// 	for (i = 0; i < pizzaTopping.length; i++) {
// 		if (pizzaTopping[i].checked) {
// 			toppingValue = pizzaTopping[i].value;
// 			break;
// 		}
// 	}

// 	if (toppingValue) {
// 		switch (toppingValue) {
// 			case 'ham':
// 			case 'pepperoni':
// 			case 'sausage':
// 			case 'bacon':
// 				document.getElementById('piz-top-value').innerHTML =
// 					toppingValue + ' is meat category';
// 				break;

// 			case 'mushrooms':
// 			case 'onions':
// 			case 'peppers':
// 			case 'olives':
// 				document.getElementById('piz-top-value').innerHTML =
// 					toppingValue + ' is vegetable category';
// 				break;

// 			default:
// 				alert('Unknown Pizza Type');
// 				break;
// 		}
// 	} else {
// 		alert('kindly select any value');
// 	}
// }
// function UserRole(){
//     let userrole = document.getElementsByName("user");
//     let userroleValue = null;

//     for(i=0; i<userrole.length; i++){
//         if(userrole[i].checked){
//             userroleValue = userrole[i].value;
//             break;
//         }
//     }

// console.log(userroleValue)
//     switch (userroleValue) {

//         case "admin":
//             alert("YOur role is admin")
//             break;
//         case "moderator":
//             alert("YOur role is moderator")
//             break;
//         case "user":
//             alert("YOur role is user")
//             break;

//         default:
//             alert("role doesnt exist")
//             break;
//     }
//     console.log(userrole)
// }

// strings = [
//   "level", "hello", "world", "deed", "python", "madam",
//   "racecar", "apple", "civic", "banana", "radar", "openai",
//   "rotor", "moon", "stats", "kayak", "example", "refer",
//   "redder", "peep", "algorithm", "repaper", "noon", "drawer",
//   "deified", "gadget", "reviver", "stats", "step on no pets",
//   "deleveled", "able was I ere I saw elba", "a man a plan a canal panama",
//   "never odd or even", "a Toyota's a Toyota", "was it a car or a cat I saw",
//   "stack cats", "Mr. Owl ate my metal worm", "madam in eden I'm adam",
//   "madam, in Eden, I'm Adam", "Able was I ere I saw Elba",
//   "A man, a plan, a canal, Panama!", "No lemon, no melon",
//   "Eva, can I see bees in a cave?", "A man, a plan, a canal, Panama!"
// ]

// let result = {
//   plaindrome:[],
//   nonplaindrome:[],
// }
// let mainarr = [];

// function checkplaindrom(strr){
//   var reversed = strr.split('').reverse().join('');
//   if(reversed === strr){
//     var newele = reversed;
//     result.plaindrome.push(newele)
//   }
//   result.nonplaindrome.push(reversed);
// }

// strings.forEach(checkplaindrom);
// console.log(result);


document.addEventListener("DOMContentLoaded", function () {
	var header = document.getElementById("myHeader");
	var sticky = header?.getBoundingClientRect().top;

	window.onscroll = function () {
		myFunction(header, sticky);
	};

	function myFunction(header, sticky) {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}
});