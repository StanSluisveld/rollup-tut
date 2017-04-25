// Import a couple modules for testing.
import { sayHelloTo } from './mod1';
import addArray from './mod2';
import * as messages from './message';

// Run some functions from our imported modules.
const result1 = sayHelloTo("Jason");
const result2 = addArray([1, 2, 3, 4]);

//livereload snippet
 document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>')


// Print the results on the page.
var app = document.getElementById("app");

app.innerHTML = `sayHelloTo("Jason") => ${result1}\n\n`;
app.innerHTML += `addArray([1, 2, 3, 4]) => ${result2}`;
app.innerHTML  = '<p>' + messages.foo + messages.bar + '</p>';
