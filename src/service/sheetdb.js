import SheetDB from 'sheetdb-js'

export const GET_DB = SheetDB.read('https://sheetdb.io/api/v1/5ad90898901b3',{sheet:'Sheet1'})
    .then( response =>{
        //console.log(response)
        return response
    })
    .catch(error => {
        console.log(error)
})

export const GET_DB_Count = SheetDB.read('https://sheetdb.io/api/v1/5ad90898901b3/count',{sheet:'Sheet1'})
    .then( response =>{
        //console.log(response)
        return response
    })
    .catch(error => {
        console.log(error)
})

/* export const POST_DB = SheetDB.write('https://sheetdb.io/api/v1/5ad90898901b3',{})
    .then( response =>{
        //console.log(response)
        return response
    })
    .catch(error => {
        console.log(error)
}) */