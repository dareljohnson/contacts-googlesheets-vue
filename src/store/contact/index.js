import { AXIOSsheetDB } from '../../service/axios-sheetdb'
import { GET_DB_Count } from '../../service/sheetdb'

export default {
    state: {
        loadedContacts: [],
        numRows: null
    },
    mutations:{
        setLoadedContacts (state, payload){
            //console.log(payload)
            state.loadedContacts = payload 
        },
        // create and update new contacts from form
        createContact (state, payload) {
            state.loadedContacts.push(payload)
        },
        updateContact (state, payload){
            // find the contact to update
            const contact = state.loadedContacts.find(contact => {
                return contact.id === payload.id
            })
            
            if(payload.First_Name){
                contact.First_Name = payload.First_Name.trim()
            }
            if(payload.Last_Name){
                contact.Last_Name = payload.Last_Name.trim()
            }
            if(payload.Email){
                contact.Email = payload.Email.trim()
            }
        },
        setNumLoadedContacts (state, payload){
            state.numRows = payload
        }
    },
    // ASYNC code here
    actions:{
        loadContacts ({commit}){
            commit('setLoading', true)

            AXIOSsheetDB.get()
            .then(response => {
                // JSON responses are automatically parsed.
                //console.log(response.data)
                const contacts = []
                const obj = response.data // obj: value pairs. Don't use response.data with SheetDb API!
                for(let key in obj) {
                    if(key != null){
                        contacts.push({
                            ID: obj[key].ID,
                            First_Name: obj[key].First_Name,
                            Last_Name: obj[key].Last_Name,
                            Email: obj[key].Email
                        })
                    }
                }
                //console.log(contacts)
                //console.log(contacts.length)
                commit('setLoadedContacts', contacts)
                commit('setLoading', false)
            })
            .catch(error => {
                console.log(error)
                commit('setLoading', true)
            })
        },
        // create contact and save to store
        createContact ({ commit, getters}, payload) {
            commit('setLoading', true)

            //console.log(payload.id)
            const contact = {
                ID: payload.id,
                First_Name: payload.first_name.trim(),
                Last_Name: payload.last_name.trim(),
                Email: payload.email !=null ? payload.email.trim() : ''
            }
            const saveContact = {
                data:[
                    contact
                ]
            }
            // Reach out to Google Sheets and store it
            AXIOSsheetDB.post(null, saveContact)
            .then(data => {
                commit('setLoading', false)
                commit('createContact', {
                    ...contact //spread operator
                })
            })
            .catch((error)=>{
                console.log(error)
                commit('setLoading', false)
            })
        },
        getRowsCount({commit}){
            commit('setLoading', true)

            GET_DB_Count
            .then (response =>{
                commit('setLoading', false)
                //console.log(response.rows)
                const numRows = response.rows
                commit('setNumLoadedContacts',numRows)
            })
            .catch((error)=>{
                console.log(error)
                commit('setLoading', false)
            })
        }
    },
    getters:{
        // load all contacts 
        loadedContacts (state) {
            return state.loadedContacts
        },
        // load meetup
        loadedContact (state) {
            return (contactId) => {
                return state.loadedContacts.find((contact)=>{
                    return contact.id === contactId
                })
            }
        },
        loadNumRows (state){
            return state.numRows
        }
    }
}