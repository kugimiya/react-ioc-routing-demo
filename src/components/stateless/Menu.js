import React from 'react';
import { NavigationLink } from './Link';

export function Menu({ links }) {
    const menuItems = links.map(link => (
        <li key={ link.id }>
            <NavigationLink name={ link.name } route={ link.route } />
        </li>
    ));
    const wrappedMenuItems = (
        <nav>
            <ul>
                { menuItems }
            </ul>
        </nav>
    );

    return wrappedMenuItems;
}
