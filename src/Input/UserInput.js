import React from 'react'

const input = (props) => {
    return (
<input type="text" onChange={props.changed} ></input>
)
};

export default input;