require('bootstrap');
var test1 = require('./js/test1');
var test2 = require('./js/test2');
var compile = require('./handlebars/test.handlebars');
var tpl = compile(test1);
console.log(test1.getName()); 
console.log(test2.getName());
$('body').append(tpl);
setTimeout(function(){
	$('.alert').alert('close');
},3000);
