import { useMemo, useState } from 'react'
import './App.css'
import CustomNavbar from './custom-navbar/CustomNavbar'
import Add from './actions/Add'
import { ACTION } from './utils/constant'
import Search from './actions/Search'

const App = () => {
  const [selectedAction, setSelectedAction] = useState(ACTION.clinic.search)

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

  const isSearchAction = () => {
    const entity = getEntityNameByAction('search')
    return entity ? true : false
  }

  const selectedEntity = useMemo(()=>{
    return selectedAction.split('-')[1]
  }, [selectedAction])

  const links = [
    {
      id: 'clinic',
      title: 'Clinic',
      onAdd: () => updateAction(ACTION.clinic.add),
      onSearch: () => updateAction(ACTION.clinic.search),
    },
    {
      id: 'patient',
      title: 'Patient',
      onAdd: () => updateAction(ACTION.patient.add),
      onSearch: () => updateAction(ACTION.patient.search),
    },
    {
      id: 'visit',
      title: 'Visit',
      onAdd: () => updateAction(ACTION.visit.add),
      onSearch: () => updateAction(ACTION.visit.search),
    },
  ]

  return (
    <div className="App">
      <CustomNavbar links={links} />
      {isAddAction() && <Add entity={selectedEntity} />}
      {isSearchAction() && <Search entity={selectedEntity}/>}
    </div>
  )
}

export default App
