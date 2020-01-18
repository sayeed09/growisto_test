import React from 'react';
import AddChildComponent from './AddChildComponent';

function Col(props) {
    return <AddChildComponent data={props.children} />
}

export default Col;
