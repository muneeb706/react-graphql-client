import { useQuery } from '@apollo/client'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { useEffect, useState } from 'react'

import { ENTITY_TITLE } from '../utils/constant'
import { LIST_CLINICS } from '../graphql/queries'
import { LIST_PATIENTS } from '../graphql/queries'

// list query for entities
const ENTITY_LIST = {
  clinic: LIST_CLINICS,
  patient: LIST_PATIENTS,
}

const List = ({ entity }) => {
  // contains fetched data
  const [listData, setListData] = useState()

  // fetching data
  const { loading, error, data } = useQuery(ENTITY_LIST[entity])

  const entityName = ENTITY_TITLE[entity]

  useEffect(() => {
    // standardizing retrieved list from query
    if (!loading && !error) {
      if (entity === 'clinic') {
        setListData(data.clinics)
      } else if (entity === 'patient') {
        setListData(data.patients)
      }
    }
  }, [loading, error, data, entity])

  return (
    <div>
      <h1 className="p-5">List of {entityName}s</h1>

      <ListGroup as="ol" numbered>
        {/* displaying fetched data in list */}
        {listData &&
          listData.map((_data) => (
            <ListGroup.Item as="li">{_data.name}</ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  )
}

export default List
