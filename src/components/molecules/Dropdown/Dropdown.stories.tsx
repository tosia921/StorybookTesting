import React from 'react';
import { Dropdown } from './Dropdown';

import { ComponentStory, ComponentMeta } from '@storybook/react';

// Default export to define story
export default {
	title: 'Components/Molecules/Dropdown',
	component: Dropdown,
	parameters: {
		actions: {
			handles: ['click', 'click button'],
		},
		layout: 'centered',
	},
	// argTypes: {
	// 	items: {
	// 		control: {
	// 			type: 'select',
	// 			labels: {
	// 				first: 'First Option',
	// 				second: 'Second Option',
	// 			},
	// 		},
	// 		options: ['first', 'second'],
	// 		mapping: {
	// 			first: { label: 'First Link', hasChildren: true, itemChildrens: ['one', 'two', 'three'] },
	// 			second: { label: 'Second Link', hasChildren: false, itemChildrens: ['one', 'two', 'three'] },
	// 		},
	// 	},
	// },
} as ComponentMeta<typeof Dropdown>;

// defining template
const Template: ComponentStory<typeof Dropdown> = ({ items }) => {
	return <Dropdown items={items} />;
};

//defining varitions
export const DropdownPrimary = Template.bind({});
DropdownPrimary.args = {
	items: [
		{
			label: 'First link',
			hasChildren: false,
			itemChildrens: ['one', 'two', 'three'],
		},
		{
			label: 'Second link',
			hasChildren: true,
			itemChildrens: ['one', 'two', 'three'],
		},
	],
};
