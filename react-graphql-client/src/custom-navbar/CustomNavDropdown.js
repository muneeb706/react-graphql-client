import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'

const CustomNavDropdown = ({id, title, onAdd, onSearch}) => {
    
    return (
        <NavDropdown style={{marginRight: "10px"}} title={title}>
            <NavDropdown.Item onClick={()=>onAdd()}>Add</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>onSearch()}>Search</NavDropdown.Item>
        </NavDropdown>
    );
};

export default CustomNavDropdown;