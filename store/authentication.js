export const state = () =>({
  token: process.browser ? localStorage.getItem('user_token') : null || null,
  auth_status: '',
})

export const getters = {
  getToken(){
    return state.token != null 
  },
  getAuthStaus(){
    return state.auth_status
  }
}

export const actions = {
  login(context, credentials){
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/user/auth/token/login', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_USER_TOKEN', response.data.token)
          context.commit('SET_USER_AUTHENTICATION_STATUS', true)
          localStorage.setItem('user_token', response.data.token)

          context.dispatch('retrieveUserInfo')

          resolve(response)
        })


        .catch(function (error) {
          reject(error)
        })
    })
  },
}

export const mutations = {
  SET_USER_AUTHENTICATION_STATUS(state, payload){
    state.user_auth_status = payload
  },

  SET_USER_TOKEN(state, payload){
    state.user_token = payload
  }
}