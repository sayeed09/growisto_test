import React from 'react';
import AddChildComponent from './AddChildComponent';

function Section(props) {
    let TagElement = Object.keys(props)[0];
    let TagData = Object.values(props)[0];
    return (
        <>
            <TagElement>{TagData}</TagElement>
            <p>{props.text}</p>
            <AddChildComponent data={props.children} />
        </>
    );
}

export default Section;
