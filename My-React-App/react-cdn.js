// import React from 'react';
// import ReactDOM from 'react-dom'

/*
const parent = document.getElementById("root");
const element = React.createElement("h1", {}, "Shopping Cart App");
const root = ReactDOM.createRoot(parent);

const item1 = React.createElement("li",{},"Item 1")
const item2 = React.createElement("li",{},"Item 2")
const item3 = React.createElement("li",{},"Item 3")
const list = React.createElement("ul",{},item1,item2,item3)

root.render([element,list]);
*/

// Using JSX
const parent = document.getElementById("root")
const element = <h1>Shopping Cart App</h1>
const root = ReactDOM.createRoot(parent)
root.render(element)
