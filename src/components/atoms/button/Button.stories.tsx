import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// Default export to define story
export default {
	title: 'Components/Atoms/Button',
	component: Button,
	// argTypes: {
	// 	color: { control: { type: 'color', presetColors: ['red', 'blue'] } },
	// 	label: {
	// 		control: 'text',
	// 	},
	// 	size: {
	// 		options: ['sm', 'md', 'lg'],
	// 		control: { type: 'select' },
	// 	},
	// },
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Button>;

// defining template
const Template: ComponentStory<typeof Button> = ({ label, size, color, ...props }) => {
	return <Button label={label} size={size} color={color} {...props} />;
};

//defining varitions
export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
	label: 'Button Primary',
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
	label: 'Button Secondary',
	color: 'blue',
	size: 'md',
};

// Figma designs
ButtonPrimary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
	},
};
ButtonSecondary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
	},
};
