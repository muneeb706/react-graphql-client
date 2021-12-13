import { gql } from '@apollo/client'

export const ADD_CLINIC = gql`
  mutation AddClinic($input: ClinicInput!) {
    addClinic(input: $input) {
      clinic {
        name
        city
        state
      }
    }
  }
`

export const ADD_PATIENT = gql`
  mutation AddPatient($input: PatientInput!) {
    addPatient(input: $input) {
      patient {
        name
        phone
      }
    }
  }
`

export const ADD_VISIT = gql`
  mutation AddVisit($input: VisitInput!) {
    addVisit(input: $input) {
      visit {
        clinic {
          name
        }
        patient {
          name
        }
        purpose {
          name
        }
      }
    }
  }
`
