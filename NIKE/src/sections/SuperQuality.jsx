import { bigShoe2, shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section>
      <div className="flex flex-1 justify-start items-start gap-40 mt-4">
        <div className="max-w-lg">
        <h1 className="text-4xl font-palanquin font-bold">
          We Provide You
          <span className="text-coral-red"> Super Quality
          </span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat mt-4 text-lg leading-7">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        <br/><br/>Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <button className="text-lg mt-12 font-montserrat text-white bg-coral-red pt-4 pb-4 pl-8 pr-8 rounded-full">View details</button>
        </div> 
        </div>

        <div className="">
          <img src = {shoe8}/>
        </div>
      </div>
    </section>
    
  )
}

export default SuperQuality