export const getUser = () => {
  return {
    agente: localStorage.getItem('agente'),
    mesa: localStorage.getItem('mesa')
  }
}