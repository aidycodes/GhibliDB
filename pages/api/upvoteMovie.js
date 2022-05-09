import { base, filterById } from "../../airtable";
import getMovies from "./movies";


const upvoteMovie = async(req,res) => {
    let upvoted
    if(req.method === "PUT"){
    try {
    const movie = await filterById(req.body.id)
        if(movie.length > 0 ){                
     upvoted = await base('db').update([
  {
    "id": movie[0].id,
    "fields": {
      "votes":movie[0].fields.votes + 1 
    }
  }     
]) 
    } else { res.status(200).json({message:'ID Does Not Match Movie'}) }
        } catch(err){
            console.log(err)
    }
    //
} else {
    res.status(200).json({message:'wrong request method'})
}
      res.status(200).json(upvoted)    

}



export default upvoteMovie