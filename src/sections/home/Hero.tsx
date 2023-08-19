import Image from "next/image"

const Hero = () => {
  return (
    <section>
      <Image
        src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        alt=""
        width={100}
        height={100}
        unoptimized
        className="object-cover w-full h-60"
      />
    </section>
  )
}

export default Hero