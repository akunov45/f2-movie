import CategorySection from "../../components/category/CategorySection"
import HeroSection from "../../components/hero/HeroSection"
import MovieFilter from "../../components/movie-filter/MovieFilter"
import Search from "../../components/search/Search"
import UpComing from "../../components/upcoming/UpComing"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Search/>
      <CategorySection />
      <MovieFilter />
      <UpComing />
    </div>
  )
}

export default HomePage