import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'

const CustomNavDropdown = ({id, title}) => {
    return (
        <NavDropdown style={{marginRight: "10px"}} title={title} id={id}>
            <NavDropdown.Item href={`add-${id}`}>Add</NavDropdown.Item>
            <NavDropdown.Item href={`search-${id}`}>Search</NavDropdown.Item>
        </NavDropdown>
    );
};

export default CustomNavDropdown;