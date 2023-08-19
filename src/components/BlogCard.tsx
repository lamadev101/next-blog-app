import { Blog } from "@/data"
import Image from "next/image"
import Link from "next/link"

const BlogCard:React.FC<Blog> = ({id, title, imgUrl, desc, publishedDate  }) => {
  return (
    <Link href={`/details/${id}`}>
    <div className="bg-[#f1f5f8] rounded-md shadow-md">
      <Image
        src={imgUrl}
        alt={title}
        title={title}
        width={100}
        height={100}
        className="w-full h-40 object-cover"
        unoptimized
      />
      <div className="p-2">
        <h1 className="text-xl">{title}</h1>
        <p className="font-semibold text-sm">{desc}</p>
        <hr />
        <div>{publishedDate}</div>
      </div>
    </div>
    </Link>
  )
}

export default BlogCard