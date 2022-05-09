import { base, filterById } from "../../airtable";

const findMovie = async(req,res) =>{
  
  const movie = await filterById(req.query.id)
    const parsedMovie = movie.reduce((obj, data) => {
        return {...data.fields}
    },{})
  res.status(200).json(parsedMovie)
}

export default findMovie;