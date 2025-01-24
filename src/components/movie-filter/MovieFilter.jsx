import { useEffect, useState } from "react"
import movieService from "../../service/movieServie"
import Spinner from "../spinner/Spinner"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';

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
    const [loading, setLoading] = useState(true)

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

    useEffect(() => {
        movieService.fetchNewMovie()
            .then(({ results }) => setMovies(results))
            .finally(() => setLoading(false))
    }, [])


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

            <div className="app-container pt-[80px]">
                {loading ? <Spinner /> : (
                    <div className="w-[1050px] mx-auto">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={20}
                            autoplay={{
                                delay: 3000
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            {movies.map(item => {
                                let imgUrl = 'https://image.tmdb.org/t/p/original/'
                                return <SwiperSlide key={item.id}>
                                    <div className="w-[225px] text-white ">
                                        <div className="relative">
                                            <img className="w-full h-[300px] mb-[20px] rounded-[10px]" src={imgUrl + item.poster_path} alt="" />
                                            <span className="bg-[#EF4234] rounded-b-[6px] top-0 left-3 text-white absolute w-[35px] h-[35px] flex items-center justify-center">
                                                {item.vote_average.toFixed(1)}
                                            </span>
                                        </div>
                                        <div className="pl-[20px]">
                                            <h3 className="text-[20px] line-clamp-1">{item.title}</h3>
                                            <p>{item.release_date.slice(0, 4)}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                )}

            </div>
        </div>
    )
}

export default MovieFilter