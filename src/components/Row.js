import React from 'react';
import AddChildComponent from './AddChildComponent';

function Row(props) {
    return <AddChildComponent data={props.children} />
}

export default Row;