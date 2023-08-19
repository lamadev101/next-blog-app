import { BlogCard } from "@/components"
import { featuredBlogs } from "@/data"

const FeaturedBlog = () => {
  return (
    <section>
      <div className="mb-2">
        <h1 className="text-2xl text-gray-400">Featured Blogs</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quaerat esse fugit aperiam!</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featuredBlogs.map(item=>(
            <BlogCard
              key={item.id}
              {...item}
            />
        ))}
      </div>
    </section>
  )
}

export default FeaturedBlog