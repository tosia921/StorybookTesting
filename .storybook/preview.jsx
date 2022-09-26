import '../src/index.css';
import React from 'react';
import Center from '../src/Decorators/Center';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// Global Decorator, wraps every story in another element
// export const decorators = [(Story) => <Center>{Story()}</Center>];
