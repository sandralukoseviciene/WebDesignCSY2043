
/*function print5() {
   console.log(1);
   console.log(2);
   console.log(3);
   console.log(4);
   console.log(5);

}

print5();
print5(); 
function myClickFunction() {
    var element = document.getElementById('pageheading');
 element.firstChild.nodeValue = 'New Heading';

 var element = document.getElementById('paragraph');
 element.firstChild.nodeValue = 'New paragraph text';
}

function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('click' , myClickFunction);
}

document.addEventListener('DOMContentLoaded' , myLoadFunction);
*/

function updateParagraph() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
}

function updateH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New paragraph contents';
}

function myLoadFunction() {
    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateParagraph);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);