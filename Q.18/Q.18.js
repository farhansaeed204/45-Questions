var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// create a array with define its type and print a array
var countriestoVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("original order:", countriestoVisit);
// Print your array in alphabetical order without modifying the actual list
console.log("alphabetical without modifying original:", __spreadArray([], countriestoVisit, true).sort());
// Show that your array is still in its original order by printing it
console.log("show original order:", countriestoVisit);
// Print your array in reverse alphabetical order without changing the order of the original list
console.log("reverse alphabetical:", __spreadArray([], countriestoVisit, true).reverse());
// Show that your array is still in its original order by printing it again
console.log("show original order:", countriestoVisit);
// Reverse the order of your list. Print the array to show that its order has changed
console.log("reverse original order:", countriestoVisit.reverse());
//  Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("back to original order:", countriestoVisit.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("print alphabetical original order:", countriestoVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("back to original order:", countriestoVisit.reverse());
