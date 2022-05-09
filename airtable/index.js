const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});

export const base = Airtable.base('apppZ9a05Z2tO90pQ');


export const filterById = async(id) => {
    
 const movieById = await base('db').select({
           filterByFormula:`({id} = '${id}')`   
}).firstPage();
   
    return movieById

}