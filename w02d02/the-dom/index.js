var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];
//
//
function addListItem(value) {
    var selectedItems = document.createElement("li");
    selectedItems.innerHTML = value;
    document.getElementById('list').appendChild(selectedItems);
}
// loop
for (var i = 0; i < listItems.length; i++) {
	addListItem(listItems[i]);
}

var listItems = document.getElementsByTagName()
for (var i =0; <listItems.length; i+= 2){
	listItems.[i].className = "even";
	var count = document.getElementById("even");
	count.innerHTML = listItems.length;
}

//  This colours list item text
var wrapperDiv = document.getElementById("wrapper");
 console.log(wrapperDiv);
 wrapperDiv.style.backgroundColor = "#B7D3F2";

var wrapperDiv2 = document.getElementById("wrapper2");
 console.log(wrapperDiv2);
 wrapperDiv2.style.backgroundColor = "#8A84E2";

 var element = document.getElementById("wrapper2");
element.classList.add("selected3");














//
//  
//
//}
//
//// write append loop here
//
//
//// write the class loop here


// Getting elements and changing them in the DOM

 // var wrapperDiv = document.getElementById("wrapper");
 // console.log(wrapperDiv);
 // wrapperDiv.style.backgroundColor = "blue";

 // var lis = document.getElementsByTagName("li");
 // console.log(lis);
 // lis[1].innerHTML = "Check it out, I've only gone and bloody chnaged";

 // var selected = document.querySelectorAll("li.selected");

 // for (var i = 0; i < selected.length; i++) {
 	// selected[i].style.color="red";
 // }


// putting brand new things onto the page
//
//var	ptag = document.createElement('p');
//
//ptag.innerHTML = "Brand new p tag";
//
//document.body.appendChild(ptag);