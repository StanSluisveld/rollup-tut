
import * as messages from "./message";
import { multiply } from "./someFunction";



// //livereload snippet
//  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
//   ':35729/livereload.js?snipver=1"></' + 'script>')

const newMessage = () => (multiply(4, 3));

// Print the results on the page.
var app = document.getElementById("app");

app.innerHTML  = "<p>" + newMessage() + messages.foo + messages.bar + "</p>";
