import React from 'react';
import ReactDOM from 'react-dom';

import { container } from './modules/ioc_container';
import './modules/app_config';
import './modules/app_init';

import { Menu } from "./components/stateless/Menu";
import { AppRoot } from "./components/global/AppRoot";
import { AppContents } from "./components/global/AppContents";

const menuLinks = container.resolve('menuLinks');

console.log(container.resolve('Scheduler'))

ReactDOM.render((
    <AppRoot
        menu={ <Menu links={ menuLinks } /> }
        content={ <AppContents /> }
    />
), document.getElementById('root'));
