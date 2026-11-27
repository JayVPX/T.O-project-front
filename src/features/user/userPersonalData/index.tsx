import { User, IdCard, Phone, Mail, Pencil, MapPin } from "lucide-react";
import { useState } from "react";
import {
  Header,
  CardTitle,
  Field,
  FieldLabel,
  FieldValue,
  EditBtn,
  EditForm,
  Textarea,
  Actions,
  SecondaryBtn,
  PrimaryBtn,
  Card,
  Divider,
  Layout,
} from "./styled";
import { CircularProgress } from "@mui/material";
import { useTheme } from "styled-components";
import { applyTelMask } from "../../../utils/cellphoneMask";
import { applyCpfMask } from "../../../utils/cpfMask";
import { useAuth } from "../../../providers/auth/useAuth";

export default function UserPersonalData() {
  const { user } = useAuth();

  const theme = useTheme();
  const [editing, setEditing] = useState<boolean>(false);
  const [addressDraft, setAddressDraft] = useState<string>("");

  const [loadingSaving, setLoadingSaving] = useState<boolean>(false);

  const startEditing = () => {
    setAddressDraft(user?.address ?? "");
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
  };

  const handleSave = async () => {
    setLoadingSaving(true);

    setTimeout(() => {
      console.log("Novo endereço: ", { addressDraft });
      setLoadingSaving(false);
    }, 1500);
  };

  return (
    <div>
      <Header>
        <h2>Meus Dados</h2>
        <p>Suas informações cadastrais. Apenas o endereço pode ser alterado.</p>
      </Header>

      <Layout>
        <Card>
          <CardTitle>
            <h3>Dados pessoais</h3>
          </CardTitle>

          <Field>
            <FieldLabel>
              <User size={14} />
              Nome completo
            </FieldLabel>
            <FieldValue empty={!user!.name}>
              {user?.name || "Não informado"}
            </FieldValue>
          </Field>

          <Divider />

          <Field>
            <FieldLabel>
              <IdCard size={14} />
              CPF
            </FieldLabel>
            <FieldValue empty={!user!.cpf}>
              {applyCpfMask(user?.cpf ?? "") || "Não informado"}
            </FieldValue>
          </Field>

          <Divider />

          <Field>
            <FieldLabel>
              <Phone size={14} />
              Telefone
            </FieldLabel>
            <FieldValue empty={!user!.phone}>
              {applyTelMask(user?.phone ?? "") || "Não informado"}
            </FieldValue>
          </Field>

          <Divider />

          <Field>
            <FieldLabel>
              <Mail size={14} />
              E-mail
            </FieldLabel>
            <FieldValue>{user?.email}</FieldValue>
          </Field>
        </Card>

        <Card>
          <CardTitle>
            <h3>Endereço</h3>
            {!editing && (
              <EditBtn onClick={startEditing}>
                <Pencil size={14} />
                Editar
              </EditBtn>
            )}
          </CardTitle>

          {editing ? (
            <EditForm onSubmit={handleSave}>
              <Field>
                <FieldLabel>
                  <MapPin size={14} />
                  Endereço completo
                </FieldLabel>
                <Textarea
                  value={addressDraft}
                  onChange={(e) => setAddressDraft(e.target.value)}
                  placeholder="Rua, número, complemento, bairro, cidade e CEP"
                  autoFocus
                />
              </Field>

              <Actions>
                <SecondaryBtn
                  type="button"
                  onClick={cancelEditing}
                  disabled={loadingSaving}
                >
                  Cancelar
                </SecondaryBtn>
                <PrimaryBtn type="submit" disabled={loadingSaving}>
                  {loadingSaving ? (
                    <CircularProgress
                      sx={{ color: theme.colors.accent }}
                      size={20}
                    />
                  ) : (
                    "Salvar endereço"
                  )}
                </PrimaryBtn>
              </Actions>
            </EditForm>
          ) : (
            <Field>
              <FieldLabel>
                <MapPin size={14} />
                Endereço completo
              </FieldLabel>
              <FieldValue empty={!user?.address}>
                {user?.address ||
                  'Nenhum endereço cadastrado ainda. Clique em "Editar" para informar.'}
              </FieldValue>
            </Field>
          )}
        </Card>
      </Layout>
    </div>
  );
}
