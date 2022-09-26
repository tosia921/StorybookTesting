import React from 'react';
import { DropdownItem } from './DropdownItem';

import { ComponentStory, ComponentMeta } from '@storybook/react';

// Default export to define story
export default {
	title: 'Components/Atoms/DropdownItem',
	component: DropdownItem,
	parameters: {
		actions: {
			handles: ['click', 'click button'],
		},
		layout: 'centered',
	},
} as ComponentMeta<typeof DropdownItem>;

// defining template
const Template: ComponentStory<typeof DropdownItem> = ({ label, hasChildren, itemChildrens }) => {
	return <DropdownItem label={label} hasChildren={hasChildren} itemChildrens={itemChildrens} />;
};

//defining varitions
export const DropdownItemPrimary = Template.bind({});
DropdownItemPrimary.args = {
	label: 'Dashboard',
	hasChildren: true,
	itemChildrens: ['First Link', 'Second Link', 'Third Link'],
};
