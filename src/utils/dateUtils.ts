export function parseDataBR(value: string): string {
  const [datePart, timePart] = value.split(" ");
  const [day, month, year] = datePart.split("/");
  return new Date(`${year}-${month}-${day}T${timePart}`).toLocaleDateString("pt-BR");
}
