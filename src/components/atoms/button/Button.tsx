import React from 'react';

interface ButtonProps {
	label?: string;
	color?: string;
	size?: 'sm' | 'md' | 'lg';
	onClick?: () => void;
}

export const Button = ({ color = '#c21c1c', size, label, ...props }: ButtonProps) => {
	return (
		<button
			className={`text-2xl font-mono 
			${size === 'sm' ? 'py-1 px-2' : ''}
			${size === 'md' ? 'py-2 px-4' : ''}
			${size === 'lg' ? 'py-4 px-6' : ''}
			`}
			style={{ backgroundColor: `${color}` }}
			onClick={() => {
				console.log('clicked!');
			}}
			{...props}
		>
			{label}
		</button>
	);
};
