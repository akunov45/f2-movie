
import Button from "../../components/UI/Button/Button"
import PlayIcon from "../../assets/play.svg"
import FavIcon from "../../assets/fav.svg"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import movieService from "../../service/movieServie"

const MovieDetailPage = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        movieService.fetchMovieById(movieId).then((data) => {
            console.log(data);
            setMovie(data)
        })
    }, [])

    if (Object.keys(movie).length === 0) {
        return <div className="flex justify-center"><h1>Loading...</h1></div>
    }

    let imgUrl = 'https://image.tmdb.org/t/p/original/'

    return (
        <div className="bg-cover bg-center bg-no-repeat " style={{
            backgroundImage: `linear-gradient(360deg, #131416 0%, rgba(0, 0, 0, 0) 100%), url(${imgUrl + movie.backdrop_path})`,
        }}>
            <div className="w-[993px] mx-auto pt-[165px] pb-[105px] flex justify-between items-center">
                <div>
                    <img className="w-[300px] h-[450px] rounded-[10px]" src={imgUrl + movie.poster_path} alt="" />
                </div>
                <div className="movie-content w-[573px] text-white">
                    <h3>Интерстеллар</h3>
                    <div>
                        <span>2014</span>
                    </div>
                    <p>
                        Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину...
                    </p>
                    <div className="gap-[30px] flex">
                        <Button className={"py-[14px]  px-[20px]"}>
                            <span className="flex items-center gap-[10px]">
                                <span>Смотреть по подписке</span>
                                <img src={PlayIcon} alt="" />
                            </span>
                        </Button>
                        <Button className={"py-[14px]  px-[20px]"}>
                            <span className="flex items-center gap-[10px]">
                                <span>В избранное</span>
                                <img src={FavIcon} alt="" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailPage