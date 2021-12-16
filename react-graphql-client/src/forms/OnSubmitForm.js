import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React from 'react'

// form that captures form data on submit
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
          /*
           * creating FormData object with entered values in the input
           * it will contain data in key value pairs
           * where key is the name of the input
           * and value is the entered value in the input
           */
          const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
          onSubmit(formDataObj)
        }}
      >
        {/* creating form elements / fields based on given schema */}
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
