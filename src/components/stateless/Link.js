import React from 'react';
import { Link } from 'react-router-dom';

export function NavigationLink({ route, name }) {
    return (
        <Link to={ route }>{ name }</Link>
    );
}
