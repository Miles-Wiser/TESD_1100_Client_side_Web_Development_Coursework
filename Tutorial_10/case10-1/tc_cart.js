"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Miles Wiser
   Date:   5/9/2025
   
   Filename: tc_cart.js
	
*/


var orderTotal = 0;

// Holds the table and all information
var cartHTML = "<table><tr><th>Item</th>" + "<th>Description</th>" +
   "<th>Price</th>" + "<th>Qty</th>" + "<th>Total</th></tr>";

// Adds a row to cartHTML
for (var i = 0; i < 4; i++) {
   // item img
   cartHTML += "<tr><td><img src='tc_" + item[i] +
      ".png' alt='" + item[i] + "' /></td>";

   // item description, price, qty
   cartHTML += "<td>"+ itemDescription[i] + "</td>" +
      "<td>$"+ itemPrice[i] + "</td>" +
      "<td>"+ itemQty[i] + "</td>";

   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>";

   // add totals for later use
   orderTotal += itemCost;
}

// display subtotal in a new row
cartHTML += "<tr> <td colspan='4'>Subtotal</td>" +
   "<td>$" + orderTotal + "</td> </tr> </table>"

// assign the cartHTML table to the div element
document.getElementById("cart").innerHTML = cartHTML;