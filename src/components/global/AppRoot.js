import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export function AppRoot({ menu, content }) {
    return (
        <Router>
            {menu}
            {content}
        </Router>
    );
}
