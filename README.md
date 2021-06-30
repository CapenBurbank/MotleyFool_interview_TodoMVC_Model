## Capen Burbank, TodoMVC implemented with Vanilla-ES6

> Link to original application using vanilla-es6: https://todomvc.com/examples/vanilla-es6/ 

<br>

> Link to source code on github: https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6

## Installation

Please have the latest version of NodeJS installed, and make sure npm is installed globally. Then clone the repository into your code editor, you should see an index.html file, right click and copy path, then paste and load that path in your browser.

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

Once the priority is adjusted, the user will see a large colored dot applied to the todo item next to the priroity icon, which is based on the priority
that was chosen for that specific todo item.

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

If I were to describe my coding style, I would say that it's very well thought out and organized. I probably code this way from the years being a pastry chef haha!    
But when I read through the original source code, and thought of a plan on how to implement the priority feature. I spent some time reading through all the
files in the `src` folder, and wanted to have a good understanding of how this MVC worked. Once I had a good understanding of the application, I wrote my
added features in the same style, utilizing the same methods, event listeners, classes, and update methods. 
My goal was to add my code into the various files, and while reading through it, you wouldn't know somebody else updated this three years after it's original
publish date on github! I believe I truly achieved that, and I would definitely say that's what makes this code unique for me!

<br>


## Possible Areas of Improvement

<br>

I'm definitely happy with the implementation of my features, however, I think I could definitely build on top of them. For example, it's nice that users have the ability to choose priority of an item, and get a list of items organized by their urgency, unfortunately the user currently doesn't have the ability to remove the priority of an item. So if you did not want to use the priority feature, and you accidentally set the priority of an item, you would not be able to remove it, and people may have the preference of not wanting to have priority set. So I definitely beilieve that I could improve upon that functionality in the priority features.

<br>

## Final Notes

<br>

```
/*
*Takes a parameter of who the message is sent to and parameter of receiver, displays message to receiver
*
*@param {string} message
*@param {string} receiver
*/

const send_Nice_Thank_You_Message = (receiver, message) => {
  console.log(receiver);
  console.log(message);
}
```
```

const send_Nice_Thank_You_Message( 

"Dear Potential Hiring Manager" ,

"
  Thank you so much for reading through giving me the chance to work at the Motley Fool. 
  Programming is definitely different from being a pastry chef, but I love it 
  just as much if not more! Getting a job like this would truly be life changing for me, 
  and I hope you consider me a good candidate for this position!
  Thank you again so much for evaluating me, and have a great day!
  
  Warm Regards,
  
  Capen Burbank
"
);

```



















