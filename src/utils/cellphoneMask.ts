export const applyTelMask = (value: string) => {
  const digits = value.replace(/\D/g, "").substring(0, 11); // Máx 11 dígitos (DDD + número)

  if (!digits) return "";

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};
