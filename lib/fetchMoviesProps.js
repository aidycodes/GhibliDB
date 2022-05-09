export const fetchMoviesProps = async(limit = 30) => {
    const data = await fetch(`https://ghibliapi.herokuapp.com/films?limit=${limit}`)
    const parsedData = await data.json()
    return parsedData

}