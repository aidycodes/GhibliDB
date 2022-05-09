import { base, filterById } from "../../airtable";

const createMovie = async(req,res) => {

    try{
    const movieCheck = await filterById(req.body.id) 

    if(movieCheck.length === 0){   
    const createdMovie = await base('db').create([
        {
            fields:{
                "id":req.body.id,
                title:req.body.title,
                "votes":0,
                "image":req.body.image || "k",
                "movie_banner": req.body.movie_banner || "k",
                "director": req.body.director || "k",
                "producer": req.body.producer || "k",
                "release_date": req.body.release_date || "k",
                "rt_score": req.body.rt_score || "k",
                "running_time": req.body.running_time || "k",
                "description": req.body.description || "k"
            }
        }])
        const data = await createdMovie.reduce((obj, nfo) =>{
            return {...nfo.fields}
        },{})
         res.status(200).json(data)
    } else {
       res.status(200).json(movieCheck)
    }
    } catch (err){
        console.log(err)
    }
    
    
}



export default createMovie