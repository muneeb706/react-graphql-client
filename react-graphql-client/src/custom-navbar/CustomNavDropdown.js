import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'

const CustomNavDropdown = ({id, title, actions}) => {
    
    return (
        <NavDropdown style={{marginRight: "10px"}} title={title}>
            {actions.map(action=>(
                <NavDropdown.Item onClick={()=>action.onAction()}>{action.label}</NavDropdown.Item>
            ))}
        </NavDropdown>
    );
};

export default CustomNavDropdown;