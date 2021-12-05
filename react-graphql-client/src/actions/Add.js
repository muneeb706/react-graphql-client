import React from 'react'
import { ENTITY_TITLE } from '../utils/constant'
import OnSubmitForm from '../forms/OnSubmitForm'
const Add = ({ entity }) => {

    const onSubmit = (event) => {
        console.log(event)
    }

    const entityFields = {
        'clinic': [
            {
                id: 'name',
                label: 'Name'
            },
            {
                id: 'city',
                label: 'City'
            },
            {
                id: 'state',
                label: 'State'
            }
        ],
        'patient': [
            {
                id: 'name',
                label: 'Name'
            },
            {
                id: 'phone',
                label: 'Phone #'
            }
        ],
        'visit': [
            {
                id: 'clinic_name',
                label: 'Clinic Name'
            },
            {
                id: 'patient_name',
                label: 'Patient Name'
            },
            {
                id: 'purpose',
                label: 'Purpose'
            }
        ]
    }

  return (
    <>
        <h1 className="p-5">Add {ENTITY_TITLE[entity]}</h1>
        <OnSubmitForm fields={entityFields[entity]} onSubmit={onSubmit} buttonText='Add'/>
    </>
  )
}

export default Add
