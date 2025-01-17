import { useEffect, useState } from "react"
import movieService from "../../service/movieServie"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Spinner from "../spinner/Spinner";

const HeroSection = () => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const [bgImage, setBgImage] = useState("")

    useEffect(() => {
        setLoading(true)
        movieService.fetchAllMovies()
            .then(res => {
                console.log(res);
                setFilms(res.results)
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
        <div className="max-w-[1300px] mx-auto bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${imgUrl}${bgImage})` }}>
            <div className="h-[700px] app-container  text-white">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper h-full"
                    onSlideChange={(swiper) => {
                        setBgImage(films[swiper.activeIndex]?.backdrop_path);
                    }}

                >
                    {films.map(item => {
                        return <SwiperSlide className="md:pt-[200px] pt-[50px]" key={item.id}>
                            <h3>{item.title}</h3>
                            <p className="w-[400px] line-clamp-3">{item.overview}</p>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default HeroSection