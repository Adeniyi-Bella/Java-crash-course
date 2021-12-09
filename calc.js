var numField1 =document.getElementById("numField1");
/*Document = An internal property that JS knows how to find
Every browser knows how to handle document
getelementbyID is a function that can grab ID on the browser*/

var numField2 =document.getElementById("numField2");
var resultField = document.getElementById("resultField");

var form = document.getElementById('xisWhatPErcentOfY');

form.addEventListener('submit', function(event) {
   if (!numField1.value || !numField2.value) {
       alert('Please enter values in the fied')
   } else {
       var x = parseFloat(numField1.value);
       var y = parseFloat(numField2.value);

       var result = x/y;
       var percent = result * 100;
       resultField.innerText = 'Answer: ' + percent + '%';
       event.preventDefault();
   }
});