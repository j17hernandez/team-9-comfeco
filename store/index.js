export const state = () => ({
    usuario: {},
    isAdmin: false,
    idUserLogged: ''
})
  
export const mutations = {
    setIsAdmin (state, data) {
        state.isAdmin = data
    },
    setIdUserLogged (state, id) {
        state.idUserLogged = id
    }
}