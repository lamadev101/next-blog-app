import Image from "next/image"

const PageHero = () => {
  return (
    <section>
      <div>
        <Image
          src={"https://images.unsplash.com/photo-1691433230427-1ad3bb167d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"}
          alt=""
          title=""
          width={100}
          height={100}
          unoptimized
          className="w-full h-80 object-cover"
        />
      </div>
    </section>
  )
}

export default PageHero