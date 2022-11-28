import Vue from 'vue'
import Vuex from 'vuex'
import './globalMixins'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        usuarios : [],
        url : "https://635e8a8303d2d4d47af10cea.mockapi.io/users/",

        requestResolved : false
    },
    actions : {

        getUsuarios({commit}, users) {
            console.warn('actions -> getUsers', users, new Date().toLocaleString())    
            try {
                console.log(this.state.url)
                //let users = await this.axios(this.$store.state.url)
                console.log(users)
                commit('getUsuarios', users)        
            }
            catch(error) {
                console.error(error)
            }
        }        
    },
    mutations : {
        getUsuarios(state, users) {
            console.warn('mutations -> getUsuarios', users, new Date().toLocaleString()) 
            state.usuarios = users
            state.requestResolved = true
            console.log("mutado")
            console.log(state.usuarios)
            console.log(state.requestResolved)
            for(let user in state.usuarios) {
                console.log(user.nombre)
            }
        },
        
    }
})
