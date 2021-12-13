import React, { useEffect, useState } from 'react'
import { ENTITY_TITLE } from '../utils/constant'
import OnSubmitForm from '../forms/OnSubmitForm'
import { ADD_CLINIC, ADD_PATIENT, ADD_VISIT } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import Alert from 'react-bootstrap/Alert'

const ENTITY_MUTATIONS = {
  clinic: ADD_CLINIC,
  patient: ADD_PATIENT,
  visit: ADD_VISIT,
}

const Add = ({ entity }) => {
  const [add, { data, loading, error }] = useMutation(ENTITY_MUTATIONS[entity])

  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const onSubmit = (event) => {
    add({
      variables: {
        input: {
          ...event,
        },
      },
    })
      .then((response) => {
        setSuccess(true)
      })
      .catch((error) => {
        setSuccess(false)
        setErrorMessage(error.message)
      })
  }

  const entityFields = {
    clinic: [
      {
        id: 'name',
        label: 'Name',
      },
      {
        id: 'city',
        label: 'City',
      },
      {
        id: 'state',
        label: 'State',
      },
    ],
    patient: [
      {
        id: 'name',
        label: 'Name',
      },
      {
        id: 'phone',
        label: 'Phone #',
      },
    ],
    visit: [
      {
        id: 'clinicName',
        label: 'Clinic Name',
      },
      {
        id: 'patientName',
        label: 'Patient Name',
      },
      {
        id: 'purpose',
        label: 'Purpose',
      },
    ],
  }

  const entityName = ENTITY_TITLE[entity]

  useEffect(() => {
    // resetting states if entity changes
    setSuccess(false)
    setErrorMessage(undefined)
  }, [entity])

  return (
    <div>
      <h1 className="p-5">Add {entityName}</h1>
      <OnSubmitForm
        fields={entityFields[entity]}
        id={entity}
        onSubmit={onSubmit}
        buttonText="Add"
      />

      <div className="m-5">
        {error && (
          <Alert variant="danger">
            Error occurred while adding {entityName}.<br />
            Error Message (from server): {errorMessage}
          </Alert>
        )}

        {success && (
          <Alert variant="success">{entityName} Successfully Added</Alert>
        )}
      </div>
    </div>
  )
}

export default Add
