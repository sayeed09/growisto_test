import React from 'react';
import Section from './Section';
import Row from './Row';
import Card from './Card';
import Markdown from './Markdown';
import Tag from './Tag';
import Col from './Col';

const Components = {
    Section: Section,
    Row: Row,
    Card: Card,
    Markdown: Markdown,
    Tag: Tag,
    Col: Col
}
function AddChildComponent(props) {
    return (
        <div className="App">
            {props.data.map((item, indx) => {
                if (typeof Components[item.component] !== "undefined") {
                    let ChildComponent = Components[item.component];
                    return <ChildComponent {...item.props} key={indx} />
                }
                else {
                    //handling the others components
                    console.log("Invalid Component Found", item.component);
                    return null;
                }
            })}
        </div>
    );
}

export default AddChildComponent;
