import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { componentFromContainer } from "../../modules/ioc_container/registerComponent";
import {container} from "../../modules/ioc_container";

function Component({ name }) {
    const ComponentFromContainer = componentFromContainer(name);
    return (<ComponentFromContainer />);
}

export function AppContents(props) {
    const pages = container.resolve('pages');

    return (
        <Switch>
            {pages.map(({ id, route, name }) => (
                <Route key={ id } path={ route }> <Component name={ name } /> </Route>
            ))}
            <Route path='/'>Index page of <b>demo</b></Route>
        </Switch>
    );
}
