import Image from 'next/image'

export default function About() {
  return (
    <section className="pt-40 pb-20 md:pb-80 text-black">
      <div className="text-center pb-12">
        <h2
          className="text-5xl uppercase font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customBlueDark mb-12 sm:mb-4"
          id="about-me"
        >
          About Me
        </h2>
      </div>
      <div className="mx-auto max-w-full md:max-w-[70%]">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex justify-center">
            <div className="max-w-[70%] h-auto">
              <Image
                src="/Headshot.webp"
                alt="Headshot of Jared"
                width={500}
                height={500}
                priority
                className="w-full h-auto rounded-[5px] shadow-headshot object-contain"
              />
            </div>
          </div>

          <div className="flex-1 mx-auto pt-10 px-8 md:pt-0 md:px-0">
            <p className="text-base md:text-lg">
              <span className="block lg:animate-fadeIn lg:opacity-0">
                Hello and welcome to my portfolio!
              </span>
              <span className="block mt-6 lg:animate-fadeIn lg:opacity-0" style={{ animationDelay: "0.1s" }}>
                I am a software engineer with a background in Economics and
                Philosophy from the University of California Santa Barbara. My
                foundation in programming started at HackReactor with most of
                what I now know being self-taught and on-the-job knowledge.
              </span>
              <span className="block mt-6 lg:animate-fadeIn lg:opacity-0" style={{ animationDelay: "0.2s" }}>
                I love working on cool products that cross at the intersections
                of tech, health, fitness, and finance. In addition to being
                long-term interests, they're areas I feel help improve society.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}