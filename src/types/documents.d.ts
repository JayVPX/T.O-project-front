import type { PatientDTO } from "../patient/patientDto";

// Mapeamento entre documento e seus respectivos dados
export interface DocumentBodyMap {
  evolucao: EvolutionBodyProps;
  atendimento: AttendanceBodyProps;
  visita: SchoolVisitBodyProps;
  anamnese: AnamnesisBodyProps;
}

// União discriminada
export type DocumentType = keyof DocumentBodyMap;

export type DocumentProps = {
  [D in DocumentType]: {
    documentType: D;
    patient: PatientDTO;
    body: DocumentBodyMap[K];
  };
}[DocumentType];

//Interfaces de cada DocuumentType

export interface AttendanceSession {
  date: string;
  startTime: string;
  endTime: string;
}

export interface AttendanceBodyProps {
  sessions: AttendanceSession[];
  month: string;
  city: string;
}

export interface AnamnesisBodyProps {
  identification: {
    evaluationDate: string;
    birthDate: string;
    age: string;
    sex: string;
    birthplace: string;
    education: string;

    father: string;
    fatherProfession: string;
    fatherEducation: string;
    fatherAge: string;

    mother: string;
    motherProfession: string;
    motherEducation: string;
    motherAge: string;

    responsible: string;
    address: string;
    phone: string;
    city: string;
    state: string;

    diagnosis: string;
    medication: string;
    doctor: string;
    referral: string;
  };

  familyComposition: string;
  mainComplaint: string;

  history: {
    pregnancy: string;
    delivery: string;
    neonatal: string;
    previousTreatments: string;
    hospitalizations: string;
    vaccines: string;
    allergies: string;
  };

  development: {
    headControl: string;
    rolled: string;
    dragged: string;
    sat: string;
    crawled: string;
    walked: string;
    spoke: string;
    sphincters: string;
  };

  routine: {
    caregiver: string;
    familyRelationship: string;
    tv: string;
    music: string;
    outings: string;
    playing: string;
  };

  school: {
    name: string;
    teacherRelationship: string;
    peerRelationship: string;
    furniture: string;
    difficulties: string;
    behavior: string;
  };

  dailyActivities: {
    feeding: string;
    hygiene: string;
    bath: string;
    dressing: string;
    undressing: string;
  };

  observations: string;
}

export interface EvolutionBodyProps {
  city: string;
  date: string;
  startTime: string;
  endTime: string;
  behavior: string;
  activities: string;
  activitiesResponse: string;
  avdTraining: string;
  foodTraining: string;
  feedback: string;
}

export interface SchoolVisitBodyProps {
  generalInformation: {
    institution: string;
    date: string;
    startTime: string;
    endTime: string;
    city: string;
  };

  therapeuticObservation: {
    teacherInteraction: string;
    peerInteraction: string;
    reactionToPresence: string;
  };

  schoolContext: {
    teacherCommunication: string;
    peerCommunication: string;
    peerPlay: string;
    rulesAndRoutines: string;
    playground: string;
    snackTime: string;
    classroomActivity: string;
    externalActivity: string;
    necessaryAdaptations: string;
  };

  teacherNotes: string;
  psychologistNotes: string;
  conclusion: string;
}
