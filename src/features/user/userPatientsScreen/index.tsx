import { Plus, Users, X } from "lucide-react";
import { CircularProgress, FormHelperText } from "@mui/material";
import {
  AddButton,
  CloseBtn,
  EmptyState,
  Form,
  Grid,
  Header,
  HeaderText,
  Input,
  Label,
  LoadingState,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  SaveBtn,
  Select,
  TextArea,
} from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { RelationshipType } from "../../../model/patient/patientDto";
import { useTheme } from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { createPatientSchema, type createPatientType } from "./schema";
import PatientCard from "../../../components/patientCard";
import { useGetUserPatients } from "../../../hooks/patients/useGetUserPatients";
import { useCreatePatient } from "../../../hooks/patients/useCreatePatient";
import { useDeletePatient } from "../../../hooks/patients/useDeletePatient";
import { useAuth } from "../../../providers/auth/useAuth";

export default function UserPatientsScreen() {
  const { user } = useAuth();
  const id = user?.id;
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm<createPatientType>({
    resolver: zodResolver(createPatientSchema),
    defaultValues: {
      name: "",
      birth_date: "",
      relationship: undefined,
      notes: "",
    },
  });

  const relationships = [
    { value: RelationshipType.Father, label: "Pai" },
    { value: RelationshipType.Mother, label: "Mãe" },
    { value: RelationshipType.Son, label: "Filho" },
    { value: RelationshipType.Daughter, label: "Filha" },
    { value: RelationshipType.Brother, label: "Irmão" },
    { value: RelationshipType.Sister, label: "Irmã" },
    { value: RelationshipType.GrandFather, label: "Avô" },
    { value: RelationshipType.GrandMother, label: "Avó" },
    { value: RelationshipType.LegalGuardian, label: "Guardião legal" },
    { value: RelationshipType.Other, label: "Outro" },
  ];

  // Hooks
  const { mutate, isPending } = useCreatePatient();
  const { mutate: deleteMutate } = useDeletePatient();
  const { data: patients, isLoading } = useGetUserPatients(id ?? "");

  // Submit
  const onSubmit = async (data: createPatientType) => {
    try {
      await mutate(
        {
          birth_date: data.birth_date,
          name: data.name,
          relationship: data.relationship,
          responsibleId: id ?? "",
          notes: data.notes,
        },
        {
          onSuccess: () => {
            setModalOpen(false);
            reset({
              birth_date: "",
              name: "",
              notes: "",
              relationship: undefined,
            });
          },
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    reset({ birth_date: "", name: "", notes: "", relationship: undefined });
  };

  const handleDelete = async (id: string) => {
    await deleteMutate(id);
  };

  return (
    <div>
      <Header>
        <HeaderText>
          <h2>Meus Pacientes</h2>
          <p>Cadastre as pessoas sob sua tutela ou supervisão</p>
        </HeaderText>
        <AddButton onClick={() => setModalOpen(true)}>
          <Plus size={20} />
          Novo Paciente
        </AddButton>
      </Header>

      {isLoading ? (
        <LoadingState>
          <CircularProgress
            size={48}
            sx={{ color: theme.colors.textSecondary }}
          />
          <p
            style={{
              color: theme.colors.textSecondary,
              textAlign: "center",
              margin: "12px 0 0",
              fontSize: "14px",
            }}
          >
            Carregando pacientes...
          </p>
        </LoadingState>
      ) : patients?.length === 0 ? (
        <EmptyState>
          <Users size={56} />
          <h3>Nenhum paciente cadastrado</h3>
          <p>Clique em "Novo Paciente" para cadastrar a primeira pessoa.</p>
        </EmptyState>
      ) : (
        <Grid>
          {patients?.map((p) => (
            <PatientCard patient={p} handleDelete={handleDelete} key={p.id} />
          ))}
        </Grid>
      )}

      {modalOpen && (
        <ModalOverlay
          onClick={() => {
            closeModal();
          }}
        >
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Cadastrar Paciente</ModalTitle>
              <CloseBtn
                onClick={() => {
                  closeModal();
                }}
              >
                <X size={22} />
              </CloseBtn>
            </ModalHeader>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label>Nome completo *</Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <Input
                        type="text"
                        placeholder="Nome do paciente"
                        errors={!!fieldState.error}
                        {...field}
                      />
                      {fieldState.error && (
                        <FormHelperText sx={{ color: theme.colors.error }}>
                          {fieldState.error.message}
                        </FormHelperText>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <Label>Data de nascimento *</Label>
                <Controller
                  name="birth_date"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <Input
                        type="date"
                        errors={!!fieldState.error}
                        {...field}
                      />
                      {fieldState.error && (
                        <FormHelperText sx={{ color: theme.colors.error }}>
                          {fieldState.error.message}
                        </FormHelperText>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <Label>Parentesco / Relação *</Label>
                <Controller
                  name="relationship"
                  control={control}
                  render={({ field, fieldState }) => (
                    <>
                      <Select
                        {...field}
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value ? Number(value) : "");
                        }}
                        errors={!!fieldState.error}
                      >
                        <option value="">Selecione...</option>

                        {relationships.map((r) => (
                          <option key={r.value} value={r.value}>
                            {r.label}
                          </option>
                        ))}
                      </Select>
                      {fieldState.error && (
                        <FormHelperText sx={{ color: theme.colors.error }}>
                          {fieldState.error.message}
                        </FormHelperText>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <Label>Observações</Label>
                <Controller
                  name="notes"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      placeholder="Informações adicionais sobre o paciente..."
                    />
                  )}
                />
              </div>

              <SaveBtn type="submit" disabled={isPending}>
                {isPending ? (
                  <CircularProgress
                    sx={{ color: theme.colors.accent }}
                    size={20}
                  />
                ) : (
                  "Salvar Paciente"
                )}
              </SaveBtn>
            </Form>
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}
