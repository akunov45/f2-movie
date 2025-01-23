import { useState } from "react"
import movieService from "../../service/movieServie"
import { HiH3 } from "react-icons/hi2"

const filterNames = [
    "Новинки",
    "Популярное",
    "Смотрят сейчас",
    "Рекомендации",
    "Топ 10",
    "Скоро на Cinemax",
]

const MovieFilter = () => {
    const [activeBtn, setActiveBtn] = useState("Новинки")
    const [movies, setMovies] = useState([])

    const handleOnClick = (item) => {
        setActiveBtn(item)
        if (item === "Новинки") {
            movieService.fetchNewMovie()
                .then(res => {
                    console.log(res);
                    setMovies(res.results)
                })
        } else if (item === "Популярное") {
            movieService.fetchPopularMovies()
                .then(res => {
                    console.log(res);
                    setMovies(res.results)
                })
        }
    }

    return (
        <div className="pb-[80px]">
            <div className="app-container flex gap-[75px] items-center  px-[75px]  rounded-[10px] bg-[#1A1A1A] text-white">
                {filterNames.map(item => {
                    let activeClass = item === activeBtn ? "border-b border-[red]" : ""
                    return <p onClick={() => {
                        handleOnClick(item)
                    }} className={`${activeClass} cursor-pointer py-[22px]`} key={item}>
                        {item}
                    </p>
                })}
            </div>

            <div className="app-container">
                {movies.length === 0 ? <h3 className="text-white">Loading...</h3> : (
                    movies.map(film => {
                        let imgUrl = 'https://image.tmdb.org/t/p/original/'
                        return <div key={film.id}>
                            <img width={180} src={imgUrl + film.poster_path} alt="" />
                            <h2 className="text-white">{film.title}</h2>
                        </div>
                    })
                )}

            </div>
        </div>
    )
}

export default MovieFilter