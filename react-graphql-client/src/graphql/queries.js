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
