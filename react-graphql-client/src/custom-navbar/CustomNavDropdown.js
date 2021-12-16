import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react'

// uses bootstrap NavDropdown to create dropdown based on properties passed in actions
const CustomNavDropdown = ({ title, actions }) => {
  return (
    <NavDropdown style={{ marginRight: '10px' }} title={title}>
      {/* dropdown link for each action   */}
      {actions.map((action) => (
        <NavDropdown.Item onClick={() => action.onAction()}>
          {action.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  )
}

export default CustomNavDropdown
