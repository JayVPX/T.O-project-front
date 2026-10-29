import { Trash2, UserCircle, Cake, Calendar } from "lucide-react";
import type { PatientDTO } from "../../model/patient/patientDto";
import {
  Card,
  CardHeader,
  DeleteBtn,
  InfoRow,
  Notes,
  PatientName,
} from "./styled";
import { calcAge } from "../../utils/calcAge";

interface Props {
  patient: PatientDTO;
  handleDelete: (id: string) => void;
}

export default function PatientCard({ patient: p, handleDelete }: Props) {
  const age = calcAge(p.birth_date);
  return (
    <Card key={p.id}>
      <CardHeader>
        <PatientName>{p.name}</PatientName>
        <DeleteBtn onClick={() => handleDelete(p.id)}>
          <Trash2 size={18} />
        </DeleteBtn>
      </CardHeader>
      <InfoRow>
        <UserCircle size={16} />
        {p.relationship || "Sem parentesco informado"}
      </InfoRow>
      {age !== null && (
        <InfoRow>
          <Cake size={16} />
          {age} anos
        </InfoRow>
      )}
      <InfoRow>
        <Calendar size={16} />
        Cadastrado em {p.created_at}
      </InfoRow>
      {p.notes && <Notes>{p.notes}</Notes>}
    </Card>
  );
}
