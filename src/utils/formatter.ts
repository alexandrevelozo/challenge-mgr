export const formatName = (fullName: string) => {
  // Conectores que serão desconsiderados
  const connectors = ['de', 'da', 'das', 'do', 'dos', 'e']

  // Remover espaços em branco no início e no final
  const names = fullName.trim().split(/\s+/)
  // Extração do último nome
  const lastName = names.pop()

  if (!lastName) {
    return ''
  }

  const iniciais = names

    // Aqui filtramos os conectores e mapeamos as iniciais
    // para a formatação correta
    .filter((name) => !connectors.includes(name.toLowerCase()))
    .map((name) => `${name.charAt(0).toUpperCase()}.`)
    .join(' ')

  return `${lastName.toUpperCase()}, ${iniciais}`
}
