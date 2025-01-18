
import axios from "../axios"

class MovieServie {

    async fetchAllMovies() {
        try {
            const { data, status } = await axios.get('discover/movie?language=ru')
            if (status !== 200) {
                throw new Error("Failed fetching movie data")
            }
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    async fetchMovieById(id) {
        try {
            const { data, status } = await axios.get(`/movie/${id}`)
            if (status !== 200) {
                throw new Error("Failed fetching movie info ")
            }
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
}

const movieService = new MovieServie()
export default movieService;