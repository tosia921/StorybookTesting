import React, { useState } from 'react';

export interface DropdownItemProps {
	label: string;
	hasChildren: boolean;
	itemChildrens?: string[] | undefined;
}

export const DropdownItem = ({ label, hasChildren, itemChildrens }: DropdownItemProps) => {
	const [open, isOpen] = useState(false);

	const handleClick = () => {
		isOpen(!open);
	};

	return (
		<li className="list-none">
			{!hasChildren && (
				<a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
					<span className="px-1">{label}</span>
				</a>
			)}
			{hasChildren && (
				<li onClick={handleClick}>
					<button
						type="button"
						className="flex items-center w-full py-2 px-3 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
						aria-controls="dropdown-example"
						data-collapse-toggle="dropdown-example"
					>
						<span className="flex-1 text-left whitespace-nowrap" sidebar-toggle-item>
							{label}
						</span>
						<svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
						</svg>
					</button>
					<ol className={`${open ? '' : 'hidden'} py-2 space-y-2 transition-all`}>
						{itemChildrens &&
							itemChildrens.map((item) => {
								return (
									<li className="bg-gray-300 hover:bg-gray-500">
										<a href="#" className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg grou pl-6">
											{item}
										</a>
									</li>
								);
							})}
					</ol>
				</li>
			)}
		</li>
	);
};
