import React, { useState, useEffect } from 'react'
import { ENTITY_TITLE } from '../utils/constant'
import OnChangeForm from '../forms/OnChangeForm'
import { VISITS_BY_PATIENT_CLINIC } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import ListGroup from 'react-bootstrap/ListGroup'
const ENTITY_LIST = {
  visit: VISITS_BY_PATIENT_CLINIC,
}

const Search = ({ entity }) => {
  const [searchValues, setSearchValues] = useState({})
  const [listData, setListData] = useState()

  const { loading, error, data } = useQuery(ENTITY_LIST[entity], {
    variables: { ...searchValues },
  })

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
    // resetting states if entity changes
    setSearchValues({})
  }, [entity])

  useEffect(() => {
    // standardizing retrieved list from query
    if (!loading && !error) setListData(data.visitsByPatientClinic)
  }, [loading, error, data, entity])

  console.log(searchValues)

  console.log(data)
  return (
    <>
      <h1 className="p-5">Search {ENTITY_TITLE[entity]}</h1>
      <h3>Please enter names of both clinic and patient for results.</h3>
      <OnChangeForm fields={entityFields[entity]} />
      <div className="m-5">
        <ListGroup as="ol" numbered>
          {listData &&
            listData.map((_data) => (
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
