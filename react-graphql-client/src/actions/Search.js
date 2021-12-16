import { useQuery } from '@apollo/client'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { useState, useEffect } from 'react'

import { ENTITY_TITLE } from '../utils/constant'
import { VISITS_BY_PATIENT_CLINIC } from '../graphql/queries'
import OnChangeForm from '../forms/OnChangeForm'

// get query for entities
const ENTITY_SEARCH = {
  visit: VISITS_BY_PATIENT_CLINIC,
}

const Search = ({ entity }) => {
  // contains values entered in the form fields
  const [searchValues, setSearchValues] = useState({})
  // contains data fetched based on search values
  const [searchData, setSearchData] = useState()

  // fetching data
  const { loading, error, data } = useQuery(ENTITY_SEARCH[entity], {
    variables: { ...searchValues },
  })

  // search fields for each entity
  const entityFields = {
    visit: [
      {
        id: 'clinicName',
        label: 'Clinic Name',
        onChange: (val) =>
          setSearchValues({ ...searchValues, clinicName: val }),
      },
      {
        id: 'patientName',
        label: 'Patient Name',
        onChange: (val) =>
          setSearchValues({ ...searchValues, patientName: val }),
      },
    ],
  }

  useEffect(() => {
    // resetting states for new given entity
    setSearchValues({})
  }, [entity])

  useEffect(() => {
    // standardizing retrieved list from query
    if (!loading && !error) setSearchData(data.visitsByPatientClinic)
  }, [loading, error, data, entity])

  return (
    <>
      <h1 className="p-5">Search {ENTITY_TITLE[entity]}</h1>
      <h3>Please enter names of both clinic and patient for results.</h3>
      <OnChangeForm fields={entityFields[entity]} />
      <div className="m-5">
        <ListGroup as="ol" numbered>
          {/* displaying fetched data in list */}
          {searchData &&
            searchData.map((_data) => (
              <ListGroup.Item as="li">
                {`Clinic Name: ${_data.clinic.name}, `}
                {`Patient Name: ${_data.patient.name}, `}
                {`Purpose: ${_data.purpose.name}`}{' '}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </>
  )
}

export default Search
