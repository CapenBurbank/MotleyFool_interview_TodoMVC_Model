## Capen Burbank, TodoMVC implemented with Vanilla-ES6

> Link to original application using vanilla-es6: https://todomvc.com/examples/vanilla-es6/ 

<br>

> Link to source code on github: https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6

## Installation

Clone the repository into your code editor, you should see an index.html file, right click and copy path, then paste and load that path in your browser.

## Implemented Feature

> Feature: Adding priority to todo list items, and having the functionality to view a list sorted in descending priority, where the most urgent
>          items will render at the top of the list, and the least urgent items will render at the bottom of the list.
<br>

In the updated version of the TodoMVC I have implemented the priority feature. If you click on the icon to the right, that looks like a document with an exclamation 
point next to it, you will find a small dropdown box titled priority with three buttons.

<br>
<br>

These buttons are red, yellow, and green circles, that are labeled with text identifying their values

<br>
<br>

> red button: High

<br>

> yellow button: Medium

<br>

> green button: Low

<br>
<br>

The todo items you enter, are objects sent to local storage in your browser and stored in an array. Each object orginally conatined the properties 

<br>
<br>

> id: Date.now()  

<br> 

> completed: boolean(automatically sets to false)  

<br>

> title: string (value entered from input, can be edited individually)  

<br>

I updated the items to contain a property of priority so each todo item now looks like the following:

<br>
<br>

```
  item {
    id: Date.now(),
    completed: false,
    title: string,
    priority: number,
  }

```

