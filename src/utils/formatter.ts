export const formatName = (fullName: string) => {
  const connectors = ['de', 'da', 'das', 'do', 'dos', 'e']
  const names = fullName.trim().split(/\s+/)
  const lastName = names.pop()

  if (!lastName) {
    return ''
  }

  const iniciais = names
    .filter((name) => !connectors.includes(name.toLowerCase()))
    .map((name) => `${name.charAt(0).toUpperCase()}.`)
    .join(' ')

  return `${lastName.toUpperCase()}, ${iniciais}`
}
