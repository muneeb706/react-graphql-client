import React, { useState } from 'react'
import { ENTITY_TITLE } from '../utils/constant'
import OnChangeForm from '../forms/OnChangeForm'

const Search = ({ entity }) => {
  const [searchValues, setSearchValues] = useState({})

  const entityFields = {
    clinic: [
      {
        id: 'name',
        label: 'Name',
        onChange: (val) => setSearchValues({ ...searchValues, name: val }),
      },
    ],
    patient: [
      {
        id: 'name',
        label: 'Name',
        onChange: (val) => setSearchValues({ ...searchValues, name: val }),
      },
    ],
    visit: [
      {
        id: 'clinic_name',
        label: 'Clinic Name',
        onChange: (val) =>
          setSearchValues({ ...searchValues, clinic_name: val }),
      },
      {
        id: 'patient_name',
        label: 'Patient Name',
        onChange: (val) =>
          setSearchValues({ ...searchValues, patient_name: val }),
      },
    ],
  }

  console.log(searchValues)

  return (
    <>
       <h1 className="p-5">Search {ENTITY_TITLE[entity]}</h1>
      <OnChangeForm fields={entityFields[entity]} />
    </>
  )
}

export default Search
