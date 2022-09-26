// // YourPage.ts|tsx

import React from 'react';

import { Dropdown } from '../molecules/Dropdown/Dropdown';
import { DropdownProps } from '../molecules/Dropdown/Dropdown';

export interface DocumentScreen {
	items?: DropdownProps;
}

function DocumentScreen({ items }) {
	return (
		<>
			<Dropdown items={items}></Dropdown>
		</>
	);
}
