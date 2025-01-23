
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
    // search movie
    async fetchMovieByName(movieName) {
        try {
            const { data, status } = await axios.get(`search/movie`, {
                params: {
                    query: movieName,
                    language: 'ru'
                }
            })
            if (!status === 200) {
                throw new Error("Error movie fetching movie genre list")
            }
            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }
    async fetchMovieGenreList() {
        try {
            const { data, status } = await axios.get('genre/movie/list?language=ru')
            if (status !== 200) {
                throw new Error("Failed fetching movie genre list ")
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    // filter button methods (6)
    async fetchNewMovie() {
        try {
            const { data, status } = await axios.get(`trending/movie/week`, {
                params: {
                    language: 'ru'
                }
            })
            if (!status === 200) {
                throw new Error("Error movie fetching movie genre list")
            }
            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }
    async fetchPopularMovies() {
        try {
            const { data, status } = await axios.get(`movie/popular`, {
                params: {
                    language: 'ru'
                }
            })
            if (!status === 200) {
                throw new Error("Error movie fetching  popular movie  list")
            }
            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }
    async fetchMovieNowWatching() {
        try {
            const { data, status } = await axios.get(`movie/now_playing`, {
                params: {
                    language: 'ru'
                }
            })
            if (!status === 200) {
                throw new Error("Error movie fetching  popular movie  list")
            }
            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }
    // recomendate
    async fetchMovieTopRated() {
        try {
            const { data, status } = await axios.get(`movie/top_rated`, {
                params: {
                    language: 'ru'
                }
            })
            if (!status === 200) {
                throw new Error("Error movie fetching  popular movie  list")
            }
            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }
    async fetchMovieUpComing() {
        try {
            const { data, status } = await axios.get(`movie/upcoming`, {
                params: {
                    language: 'ru'
                }
            })
            if (!status === 200) {
                throw new Error("Error movie fetching  popular movie  list")
            }
            console.log(data)
            return data
        } catch (err) {
            console.error(err)
        }
    }
}

const movieService = new MovieServie()
export default movieService;