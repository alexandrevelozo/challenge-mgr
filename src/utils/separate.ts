export const separateData = (data: string): { numbers: number[]; notNumbers: string[] } => {
  const splitValues = data.split(',') // Separar os dados pelos delimitadores de vírgula
  const numbers: number[] = []
  const notNumbers: string[] = []

  splitValues.forEach((part) => {
    const values = part.trim().split(/\s+/) // Separar os valores de cada parte por espaços
    values.forEach((value) => {
      if (!isNaN(parseFloat(value))) {
        numbers.push(parseFloat(value))
      } else if (value !== '') {
        notNumbers.push(value)
      }
    })
  })

  return { numbers, notNumbers }
}
