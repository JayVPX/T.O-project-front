export interface PatientDTO {
  id: string;
  name: string;
  relationship: string;
  birth_date: string;
  notes?: string;
  responsible: {
    id: string;
    name: string;
  };
  therapist: {
    id: string;
    name: string;
  };

  created_at: string;
}

export interface createPatientDTO {
  name: string;
  relationship: number;
  responsible_id: string;
  birth_date: string;
  notes?: string;
}

export const RelationshipType = {
  Father: 1,
  Mother: 2,
  Son: 3,
  Daughter: 4,
  Brother: 5,
  Sister: 6,
  GrandFather: 7,
  GrandMother: 8,
  LegalGuardian: 9,
  Other: 10,
};
