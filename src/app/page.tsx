import { RecentBlog } from "@/sections"
import { FeaturedBlog, Hero, PopularBlog } from "@/sections/home"

const home = () => {
  return (
    <main>
      <Hero />
      <div className="md:grid-4 mx-8 my-6">
        <div className="grid-cols-2">
          {/* <PopularBlog /> */}
          <FeaturedBlog/>
        </div>
        <div className="grid-cols-1">
          <RecentBlog />
        </div>
      </div>
    </main>
  )
}

export default home