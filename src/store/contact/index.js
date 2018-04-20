import { SheetDB } from '../../service/axios-sheetdb'

export default {
    state: {
        loadedContacts: []
    },
    mutations:{
        setLoadedContacts (state, payload){
            //console.log(payload)
            state.loadedContacts = payload 
        }
    },
    // ASYNC code here
    actions:{
        loadContacts ({commit}){
            commit('setLoading', true)

            SheetDB.get()
            .then(response => {
                // JSON responses are automatically parsed.
                //console.log(response.data)
                const contacts = []
                const obj = response.data // obj: value pairs
                for(let key in obj) {
                    if(key != null){
                        contacts.push({
                            id: key,
                            ID: obj[key].ID,
                            First_Name: obj[key].First_Name,
                            Last_Name: obj[key].Last_Name
                        })
                    }
                }
                //console.log(contacts)
                commit('setLoadedContacts', contacts)
                commit('setLoading', false)
            })
            .catch(error => {
                console.log(error)
                commit('setLoading', true)
            })
        }
    },
    getters:{
        // load all contacts 
        loadedContacts (state) {
            return state.loadedContacts
        }
    }
}