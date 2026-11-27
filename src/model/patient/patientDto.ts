import type { ResponsibleDTO } from "../responsible/responsibleDto";

export interface PatientDTO {
  id: string;
  name: string;
  relationship: number;
  birth_date: string;
  notes?: string;
  responsible: ResponsibleDTO;

  created_at: string;
}

export interface CreatePatientDTO {
  name: string;
  relationship: number;
  responsibleId: string;
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

export const RelationshipLabel: Record<number, string> = {
  [RelationshipType.Father]: "Pai",
  [RelationshipType.Mother]: "Mãe",
  [RelationshipType.Son]: "Filho",
  [RelationshipType.Daughter]: "Filha",
  [RelationshipType.Brother]: "Irmão",
  [RelationshipType.Sister]: "Irmã",
  [RelationshipType.GrandFather]: "Avô",
  [RelationshipType.GrandMother]: "Avó",
  [RelationshipType.LegalGuardian]: "Guardião legal",
  [RelationshipType.Other]: "Outro",
};
