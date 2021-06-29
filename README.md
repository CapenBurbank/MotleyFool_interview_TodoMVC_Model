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
item: {
  id: Date.now(),
  completed: false,
  title: string,
  priority: number, (defaults to 0)
}

```
<br>

By selecting a priority for each item, the user will update the local storage for that specific item's priority (it will be set to 1, 2, or 3 being the highest).

<br>

Once the priority is adjusted, the user will see a noticeable colored dot applied to to the todo item next to the priroity icon, which is based on the priority
that was chosen for that specific todo item.

<br>
<br>

In the footer of the todo list, you originally saw the following filters to select:

<br>

> All, Active, Completed, Clear Completed(if some items were completed)

<br>

I implemented the Priority filter, so when the user selects priority to filter by, the list will be sorted in descending order, with the most urgent items  
appearing at the top, and the lowest priority items at the bottom. By default, items without a priority value greater than zero, will render below the lowest   
priority items.

<br>

While in the priority filter, if you edit any item's priority, the list will be re-organized and the edited item will be organized according to its updated  
priority property value.

## Highlights That Make This Project Uniquely Mine

<br>

Honestly, I'm not exactly sure what my 'style' of coding is or if I have one. However I do know that I love organization and consistency(probably from the years
as a pastry chef haha!).  
But when I read through the original sourcec code, and thought of a plan on how to implement the priority feature. I spent some time reading through all the  
files in the `src` folder, and wanted to have a good understanding of how this MVC worked. Once I had a good understanding of the application, I wrote my  
added features in the same style, utilizing the same methods, event listeners, classes, and update methods.   
My goal was to add my code into the various files, and while reading through it, you wouldn't know somebody else wrote this three years after it's original  
publish date on github! I believe I truly achieved that, and I would definitely say that's what makes this code unique for me!

<br>
<br>

## Possible Areas of Improvement

<br>
<br>




























