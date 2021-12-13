import React, { useMemo, useState } from 'react'
import './App.css'
import CustomNavbar from './custom-navbar/CustomNavbar'
import Add from './actions/Add'
import { ACTION } from './utils/constant'
import Search from './actions/Search'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/client'
import List from './actions/List'

const App = () => {
  const [selectedAction, setSelectedAction] = useState(ACTION.clinic.list)

  const updateAction = (action) => {
    setSelectedAction(action)
  }

  const getEntityNameByAction = (action) => {
    let selectedEntities = Object.keys(ACTION).filter(
      (entity) => ACTION[entity][action] === selectedAction,
    )
    return selectedEntities ? selectedEntities[0] : null
  }

  const isAddAction = () => {
    const entity = getEntityNameByAction('add')
    return entity ? true : false
  }

  const isListAction = () => {
    const entity = getEntityNameByAction('list')
    return entity ? true : false
  }

  const isSearchAction = () => {
    const entity = getEntityNameByAction('search')
    return entity ? true : false
  }

  const selectedEntity = useMemo(() => {
    return selectedAction.split('-')[1]
  }, [selectedAction])

  const links = [
    {
      id: 'clinic',
      title: 'Clinic',
      actions: [
        {
          label: 'Add',
          onAction: () => updateAction(ACTION.clinic.add),
        },
        {
          label: 'List',
          onAction: () => updateAction(ACTION.clinic.list),
        },
      ],
    },
    {
      id: 'patient',
      title: 'Patient',
      actions: [
        {
          label: 'Add',
          onAction: () => updateAction(ACTION.patient.add),
        },
        {
          label: 'List',
          onAction: () => updateAction(ACTION.patient.list),
        },
      ],
    },
    {
      id: 'visit',
      title: 'Visit',
      actions: [
        {
          label: 'Add',
          onAction: () => updateAction(ACTION.visit.add),
        },
        {
          label: 'Search',
          onAction: () => updateAction(ACTION.visit.search),
        },
      ],
    },
  ]

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <CustomNavbar links={links} />
        {isAddAction() && <Add entity={selectedEntity} />}
        {isSearchAction() && <Search entity={selectedEntity} />}
        {isListAction() && <List entity={selectedEntity} />}
      </ApolloProvider>
    </div>
  )
}

export default App
