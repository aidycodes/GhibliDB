import { base } from '../../airtable'

const getMovies = async(req, res) => {
  const movies = await base('db').select({        
    }).firstPage()

    const movieFields = movies.map(movie => (movie))

    
    res.status(200).json(movieFields)
 
 
}

export default getMovies