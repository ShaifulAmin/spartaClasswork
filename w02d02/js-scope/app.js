//var	people = 5;
//
//	function prison() {
//		var harvey = "CRIMINAL";
//		function solitaryConfirment() {
//			Var matt ="BADLY BEHAVED CRIMINAL";
//
//		}
//	}
//
//console.log(people);


function joinStringsAndPrint( string1 , string2 ) {

    var newString =  string1 + string2;
    
    function printString( string ) {
    
        console.log(string);
        
        // Q3
        // console.log(newString);
        
        // Q4
        console.log(string1 + string2);
    
    }
    
    printString( newString );
    
    return newString;
    printString( "run from outside joinStrings" );

}
var string1 = "hello, ";
var string2 = "world";
joinStringsAndPrint( string1 , string2 );

// Q1 
// printString( "run from outside joinStrings" );

// Q2
// console.log(newString)