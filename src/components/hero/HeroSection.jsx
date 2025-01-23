import { useEffect, useState } from "react"
import movieService from "../../service/movieServie"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Spinner from "../spinner/Spinner";
import Button from "../UI/Button/Button";
import PlayIcon from "../../assets/play.svg"
import { useNavigate } from "react-router"

const HeroSection = () => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const [bgImage, setBgImage] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        setLoading(true)
        movieService.fetchAllMovies()
            .then(res => {
                console.log(res);
                setFilms(res.results.slice(0, 6))
                setBgImage(res.results[0].backdrop_path)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Spinner />
    }
    let imgUrl = 'https://image.tmdb.org/t/p/original/'

    return (
        <div className="max-w-[1300px] mx-auto bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{ backgroundImage: `url(${imgUrl}${bgImage})` }}>
            <div className="h-[700px] relative   text-white">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                        type: 'bullets'
                    }}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 5500
                    }}
                    modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
                    className="mySwiper h-full bg-gradient-to-t from-[#040404] to-transparen"
                    onSlideChange={(swiper) => {
                        setBgImage(films[swiper.activeIndex]?.backdrop_path);
                    }}
                >
                    {films.map(item => {
                        return <SwiperSlide className="md:pt-[150px] pt-[50px]" key={item.id}>
                            <div className="app-container">
                                <h3 className="text-[40px] mb-[15px]">{item.title}</h3>
                                <p className="w-[500px] line-clamp-3 mb-[30px] text-[18px]">{item.overview}</p>
                                <Button onClick={() => {
                                    navigate(`movie-detail/${item.id}`)
                                }} className={"py-[14px]  px-[20px]"}>
                                    <span className="flex items-center gap-[10px]">
                                        <span>Смотреть</span>
                                        <img src={PlayIcon} alt="" />
                                    </span>
                                </Button>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
                <div className="custom-pagination pb-[100px]  pl-[60px] ">
                </div>
            </div>
        </div>
    )
}

export default HeroSection