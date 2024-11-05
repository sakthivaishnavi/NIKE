import { star } from "../assets/icons";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section>
      <div> 
      <div className="mt-3">
        
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-palanquin font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h1>
          <p className="text-lg leading-7 text-slate-gray font-montserrat mt-4 m-auto max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {reviews.map((cust) => (
          <div className="text-lg text-slate-gray  text-center max-w-l font-montserrat flex flex-col justify-center items-center">
            <div className="mt-1">
              <img src={cust.imgURL} width={120} height={120} className="rounded-full mb-6" />
            </div>
            <p className="max-w-sm leading-7 text-slate-gray font-montserrat text-lg">{cust.feedback}</p>
            <div className="flex p-2">
              <img className="object-contain m-0 " src={star} /> <span className="text-xl">
                ({cust.rating})
              </span>
            </div>
            <h1 className="text-3xl text-black font-bold font-palanquin">{cust.customerName}</h1>
          </div>
        ))}
      </div>
      </div>

    </section>
  )
}

export default CustomerReviews;