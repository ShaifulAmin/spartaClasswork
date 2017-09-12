var trainers = ["ollie", "niall, steve"];

for(var i=0; i < 10; i++) {
	console.log(i);
}

// While loops

var j = 0;
while (j < 5) {
	console.log("This loop has run " + " times.");
	j++;
}

// For in Loop

var myObject = {
	a: 1,
	b: 2,
	c: 3
}

for (var key in myObject){
	console.log(key);
	console.log(myObject[key]);
}
