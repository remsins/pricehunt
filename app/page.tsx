import Image from 'next/image';

const Home = () => {
  return (
    <>
     <section className="px-6 md:px-20 py-24 border-2 ">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className="small-text">
            Smart Shopping Starts Here:
          
          <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
          </p>
          <h1 className = "head-text">
            Unleash the Power of 
            <span className ="primary"> PriceHunt </span>
          </h1>
        </div>

      </div>
      </section> 
    </>
  )
}

export default Home