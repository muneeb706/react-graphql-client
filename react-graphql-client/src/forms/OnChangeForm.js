import React from 'react'
import Form from 'react-bootstrap/Form'

const OnChangeForm = ({ fields }) => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ textAlign: 'left' }}
    >
      <Form className="w-75">
        {fields.map((field) => (
          <Form.Group key={field.id} className="mb-3">
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type="input"
              name={field.id}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </Form.Group>
        ))}
      </Form>
    </div>
  )
}

export default OnChangeForm
