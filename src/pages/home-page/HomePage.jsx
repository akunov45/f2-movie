import CategorySection from "../../components/category/CategorySection"
import HeroSection from "../../components/hero/HeroSection"
import MovieFilter from "../../components/movie-filter/MovieFilter"
import Search from "../../components/search/Search"


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Search/>
      <CategorySection />
      <MovieFilter />
    </div>
  )
}

export default HomePage