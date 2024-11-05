import { services } from "../constants"
import { shieldTick,support, truckFast } from "../assets/icons"

const Services = () => {
  return (
    <section>
        <div className="flex flex-col-1 lg:gap-8">
          {services.map((serv)=>(
            <div className="  shadow-xl rounded-2xl pt-16 pb-16 pl-10 pr-10">
              <div className="flex bg-coral-red rounded-full w-11 h-11 justify-center items-center">
              <img src =  {serv.imgURL} width={24} height={24} />
              </div>
              <div className="text-lg font-montserrat text-slate-gray mt-4 leading-7">
               <h1 className="text-3xl text-black font-bold font-palanquin mb-2 ">{serv.label}</h1>
               {serv.subtext}
               </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Services