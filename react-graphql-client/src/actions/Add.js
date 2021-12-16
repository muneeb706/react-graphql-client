import { useMutation } from '@apollo/client'
import Alert from 'react-bootstrap/Alert'
import React, { useEffect, useState } from 'react'

import { ADD_CLINIC, ADD_PATIENT, ADD_VISIT } from '../graphql/mutations'
import { ENTITY_TITLE } from '../utils/constant'
import OnSubmitForm from '../forms/OnSubmitForm'

// mutations for entities
const ENTITY_MUTATIONS = {
  clinic: ADD_CLINIC,
  patient: ADD_PATIENT,
  visit: ADD_VISIT,
}

const Add = ({ entity }) => {
  /*
   * states to reflect success / error status of mutation request
   * we need this in case if new entity is passed to this component,
   * then we need to reset the states
   * this is a some sort of a hack as we are controlling
   * everything through states in this application
   * and not leveraging router
   */
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const [add, { data, loading, error }] = useMutation(ENTITY_MUTATIONS[entity])

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

  // fields definition/schema for entities
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
    // resetting states for new given entity
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
