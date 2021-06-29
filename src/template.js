import {ItemList} from './item';

import {escapeForHTML} from './helpers';

export default class Template {
	/**
	 * Format the contents of a todo list.
	 *
	 * @param {ItemList} items Object containing keys you want to find in the template to replace.
	 * @returns {!string} Contents for a todo list
	 *
	 * @example
	 * view.show({
	 *	id: 1,
	 *	title: "Hello World",
	 *	completed: false,
	 *  priority: 0,
	 * }) 
	 */
	itemList(items) {

		return items.reduce((a, item) => a + `
<li data-id="${item.id}"${item.completed ? ' class="completed"' : ''}>
	<div class="view">
		<input class="toggle" type="checkbox" ${item.completed ? 'checked' : ''}>
		<label>${escapeForHTML(item.title)}</label>

		

		<div class="icons" >

			<div class="e-icons priorityChoice" >

				<div class="priorityMarker" data-id="${item.priority}" >
				</div>

				<div class="priorityChoice_Dropdown">

					<p class="priorityTitle">Priority</p>

					<div class="highPriority_div">
						<button class="highButton" ></button>
						<p class="highPriorityButtonLabel">High</p>
					</div>

					<div class="mediumPriority_div">
						<button class="mediumButton" ></button>
						<p class="mediumPriorityButtonLabel">Medium</p>
					</div>

					<div class="lowPriority_div">
						<button class="lowButton" ></button>
						<p class="lowPriorityButtonLabel">Low</p>
					</div>

				</div>

			</div>

		</div>		

		<button class="destroy"></button>
	</div>
</li>`, '');
	}

	/**
	 * Format the contents of an "items left" indicator.
	 *
	 * @param {number} activeTodos Number of active todos
	 *
	 * @returns {!string} Contents for an "items left" indicator
	 */
	itemCounter(activeTodos) {
		return `${activeTodos} item${activeTodos !== 1 ? 's' : ''} left`;
	}
}
