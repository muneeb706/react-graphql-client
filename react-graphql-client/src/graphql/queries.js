import { gql } from '@apollo/client'

export const LIST_CLINICS = gql`
  query clinics {
    clinics {
      name
      city
      state
    }
  }
`

export const LIST_PATIENTS = gql`
  query patients {
    patients {
      name
      phone
    }
  }
`
