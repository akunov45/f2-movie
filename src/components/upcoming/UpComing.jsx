import { useState, useEffect, useContext } from "react"
import movieService from "../../service/movieServie"
import Spinner from "../spinner/Spinner"
import { GENRES_CONTEXT } from "../../context/GenreContext"
import Button from "../UI/Button/Button"

const UpComing = () => {
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const { genres } = useContext(GENRES_CONTEXT)

    useEffect(() => {
        // setLoading(true)
        movieService.fetchMovieUpComing()
            .then(res => setMovie(res.results))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner />
    }
    let imgUrl = 'https://image.tmdb.org/t/p/original/'
    return (
        <div>
            <div className="app-container pb-[150px]">
                <div className="w-[880px] py-[55px] flex  mx-auto items-center rounded-[10px] bg-[#1A1A1A] text-white">
                    <div className="mr-[95px] ml-[-82px] ">
                        <img className="w-[300px] h-[450px] rounded-[10px]"  src={imgUrl + movie[0].poster_path} alt="" />
                    </div>
                    <div className="w-[442px]">
                        <h2  className="text-[36px]">
                            {movie[0].title}
                            <span className="ml-[30px] text-[24px] align-text-top">{movie[0].release_date.slice(0, 4)}</span>
                        </h2>
                        <p className="flex gap-[20px] mb-[24px] ">
                            {genres.filter(item => movie[1].genre_ids.includes(item.id)).map(g => {
                                return <span className="text-[red]" key={g.id}>{g.name}</span>
                            })
                            }
                        </p>
                        <p className="line-clamp-3 leading-[28px] mb-[30px]">
                            {movie[0].overview}
                        </p>
                        <Button className={"py-[5px] px-[20px]"}>
                            Смотреть
                        </Button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpComing