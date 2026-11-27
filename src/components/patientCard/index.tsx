import { Trash2, UserCircle, Cake, Calendar } from "lucide-react";
import {
  RelationshipLabel,
  type PatientDTO,
} from "../../model/patient/patientDto";
import {
  Card,
  CardHeader,
  DeleteBtn,
  InfoRow,
  Notes,
  PatientName,
} from "./styled";
import { calcAge } from "../../utils/calcAge";
import { formatDateToBr } from "../../utils/formatDateToBr";

interface Props {
  patient: PatientDTO;
  handleDelete: (id: string) => void;
}

export default function PatientCard({ patient: p, handleDelete }: Props) {
  const age = calcAge(p.birth_date);

  const registerDate = p.created_at.split("T")[0];

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
        {RelationshipLabel[p.relationship] || "Sem parentesco informado"}
      </InfoRow>
      {age !== null && (
        <InfoRow>
          <Cake size={16} />
          {age} anos
        </InfoRow>
      )}
      <InfoRow>
        <Calendar size={16} />
        Cadastrado em {formatDateToBr(registerDate)}
      </InfoRow>
      {p.notes && <Notes>{p.notes}</Notes>}
    </Card>
  );
}
