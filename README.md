## Capen Burbank, TodoMVC implemented with Vanilla-ES6

> Link to original application using vanilla-es6: https://todomvc.com/examples/vanilla-es6/ 

<br>

> Link to source code on github: https://github.com/tastejs/todomvc/tree/gh-pages/examples/vanilla-es6

## Installation

Please have the latest version of NodeJS installed, and make sure npm is installed globally. Then clone the repository into your code editor. You should see an index.html file. Next right click and copy the path, then paste it and load that path in your browser.

## Description of Implemented Feature

> Feature: I have added a prioritization feature to the todo list application. This feature allows you to prioritze items, under three different levels urgency and also view a list of sorted tasks in descending priority, where the most urgent
>          items are rendered at the top of the list, and the least urgent items are rendered at the bottom of the list.
<br>

## Instructions for Using Implemented Feature

<br> 

To begin prioritizing your tasks, simply click on the "page-exclamation-mark" icon on the right. A dropdown box with three priority options will appear.
These buttons are red, yellow, and green circles, that are labeled with text identifying their values. In order to view the list of tasks in order of descending urgency, please click the link labled "Priority" located in the footer of the application.

<br>

> red button: High

<br>

> yellow button: Medium

<br>

> green button: Low

<br>
<br>

## Changes Made to Original Application 

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

Once the priority is adjusted, the user will see a large colored dot applied to the todo item next to the priroity icon, which indicated the priority
that was chosen by the user for the specific task.

<br>

In the original template the following filters could be located in the footer of the application to sort the list according to their title:

<br>

> All, Active, Completed, Clear Completed(if some items were completed)

<br>

I implemented the Priority filter, so when the user selects priority to filter by, the list will be sorted in descending order, with the most urgent items
appearing at the top, and the lowest priority items at the bottom. By default, items without a priority value greater than zero, will render below the lowest 
priority items.

<br>

While in the priority filter, if you edit any item's priority, the list will be re-organized and the edited item will be placed according to its updated  
priority property value.

## Highlights That Make This Project Uniquely Mine

<br>

If I were to describe my coding style, I would say that it's very well thought out and organized. I probably code this way from many years of being a pastry chef haha!    

Before rushing to implement my features, I wanted to make sure that I had a 
thorough understanding of how the application worked. Once I felt that I had a good understanding of the program, I wrote my
added features in the same style, utilizing the same methods, event listeners, classes, and update methods. 
My goal was to seemlessely add my code into the various files, so that anyone reading it, couldn't tell that someone else, other than the original creator updated this code, three years after it's original
publish date on github! I would say that my careful planning, deliberate organization, and seemless integration of my code with the original author's, is what makes this code uniquely mine!

<br>

## Possible Areas of Improvement

<br>

I'm definitely happy with the implementation of my features, however, I think I could definitely build on them. For example, it's nice that users have the ability to choose the priority of an item, and get a list of items organized by their urgency. However, unfortunately, the user currently doesn't have the ability to remove the priority of an item. So if you did not want to use the priority feature, and you accidentally set the priority of an item, you would not be able to remove it, and people may have the preference of not wanting to have a priority set. So I definitely beilieve that I could improve upon that functionality in the priority features.

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

send_Nice_Thank_You_Message( 

`Dear Hiring Manager` ,

`
  Thank you so much for reviewing my coding project!
  I am extreamly thrilled to be consered to become a member of The Motely Fool Team! 
  I hope to show you how my skills in my previous life as a pastry chef, make me a great future developer, worthy of joining your team!
  Getting a job like this would truly be life changing for me, 
  so I sincereley hope you find me a good candidate for this position!
  Thank you again so much for evaluating me, and have a great day!
  
  Warm Regards,
  
  Capen Burbank
`
);

```



















