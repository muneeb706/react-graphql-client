import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React from 'react'

const OnSubmitForm = ({ fields, id, onSubmit, buttonText }) => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ textAlign: 'left' }}
    >
      <Form
        key={id}
        className="w-75"
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
          onSubmit(formDataObj)
        }}
      >
        {fields.map((field) => (
          <Form.Group key={field.id} className="mb-3">
            <Form.Label>{field.label}</Form.Label>
            <Form.Control type="input" name={field.id} />
          </Form.Group>
        ))}
        <Button className="btn-lg mt-3" variant="success" type="submit">
          {buttonText}
        </Button>
      </Form>
    </div>
  )
}

export default OnSubmitForm
