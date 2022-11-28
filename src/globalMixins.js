import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        async callUsers() {

            // const delay = ms => new Promise( (resolve, reject) => {
            //     if(typeof ms == 'number') {
            //         setTimeout(resolve,ms)
            //     }
            //     else {
            //         reject('ms no es un número')
            //     }
            // })

            try {
                
                let { data : users } = await this.axios(this.$store.state.url)
                //let users = await this.axios(this.$store.state.url)
                //await delay(5000)
                console.log("Call Users")
                console.log(users)
                let finalUsers = []
                for(let i = 0; i < users.length; i++) {
                    const newUser = {
                        nombre: users[i].nombre,
                        email: users[i].email,
                        edad: users[i].edad,
                        id: users[i].id                        
                    }
                    console.log("newUser")
                    console.log(newUser)
                   // let user = users[i]
                    finalUsers[i] = newUser
                }
                console.log(finalUsers)
                console.log(finalUsers)
                return finalUsers
            }
            catch (error) {
                console.error('Error en callUsuarios', error.message)
            }
        },

        async getUsuarios() {

             const delay = ms => new Promise((resolve, reject) => {
                 if (typeof ms == 'number') {
                     setTimeout(resolve, ms)
                 }
                 else {
                     reject('ms no es un número')
                 }
            })

            //this.contador--
            console.warn('-------------------------------------')
            console.warn('dispatch -> getUsuarios', new Date().toLocaleString())
            let users = await this.callUsers()
            delay(5000)
            console.log("getUsuarios")
            console.log(users)
            this.$store.dispatch('getUsuarios', users)
        }
    },
    computed: {

    }
}

Vue.mixin(miMixinGlobal)