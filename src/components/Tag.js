import React from 'react';

function Tag(props) {
    let TagElement = props.tag;
    return !Array.isArray(props.children) ? <TagElement>{props.children}</TagElement> :
        props.children.map((item) => {
            return <TagElement>{item}</TagElement>
        })                         //to handle scenario given in case study for multiple tag elements
}

export default Tag;
