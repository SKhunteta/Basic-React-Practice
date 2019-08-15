import React from 'react';

const output = (props) => {
    return (
<div>
<p onChange={props.changed}>Hello this is the first paragraph written by {props.username}.</p>
<p>Hello this is the second paragraph</p> 
</div>
)
};

export default output;