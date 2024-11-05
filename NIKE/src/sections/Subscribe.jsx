
const Subscribe = () => {
  return (
   <section>
    <div>
    <h1 className="text-4xl font-bold font-palanquin">
    Sign Up for
    <span className="text-coral-red"> Updates</span>{" "}& Newsletter
    </h1>
    <div className="flex">
    <input type="text"  className=" mt-10 rounded-full border-gray-500 border-[1px] p-5 w-full max-w-xl" placeholder="subscribe@nike.com"/>
    <button className="text-lg font-montserrat text-white bg-coral-red rounded-full">Sign Up</button>
    </div>
    </div>
   </section>
  )
}

export default Subscribe