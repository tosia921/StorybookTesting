import React from 'react';
import { DropdownItem } from '../../atoms/DropdownItem/DropdownItem';

export interface DropdownProps {
	items: {
		label: string;
		hasChildren: boolean;
		itemChildrens: string[] | undefined;
	}[];
}

export const Dropdown = ({ items }: DropdownProps) => {
	return (
		<div className="max-w-2xl mx-auto">
			<aside className="w-64" aria-label="Sidebar">
				<div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2">
						{items &&
							items.length > 0 &&
							items.map((item) => {
								return (
									<DropdownItem
										hasChildren={item.hasChildren}
										itemChildrens={item.itemChildrens}
										label={item.label}
									/>
								);
							})}
					</ul>
				</div>
			</aside>
		</div>
	);
};
