
import axios from "../axios"

class MovieServie {

    async fetchAllMovies(){
        const { data } = await axios.get('discover/movie?language=ru')
        return data;
    }
}

const movieService = new MovieServie()
export default movieService;