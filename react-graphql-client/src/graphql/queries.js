import { gql } from '@apollo/client'

// get list of all clinics
export const LIST_CLINICS = gql`
  query clinics {
    clinics {
      name
      city
      state
    }
  }
`

// get list of all patients
export const LIST_PATIENTS = gql`
  query patients {
    patients {
      name
      phone
    }
  }
`

// get list of visits done by given patient at given clinic
export const VISITS_BY_PATIENT_CLINIC = gql`
  query visitsByPatientClinic($patientName: String!, $clinicName: String!) {
    visitsByPatientClinic(patientName: $patientName, clinicName: $clinicName) {
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
`
