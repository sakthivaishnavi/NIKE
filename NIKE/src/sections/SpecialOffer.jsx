import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section>
      <div>
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <div className="flex flex-reverse">
          <div>
        <p className="text-slate-gray text-lg font-montserrat mt-4 leading-7">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        <br/><br/>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-10 flex">
          <Button label="Shop now" iconURL={arrowRight}/>
          <button className="text-gray-500 text-lg font-montserrat p-3 pl-6 pr-6 ml-5 border-[1px] border-gray-500 rounded-full">Learn more</button>
        </div>
        </div>
        <div className="mt-10">
          <img src ={offer}/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer