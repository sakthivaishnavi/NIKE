import { products } from "../constants"
import { star } from "../assets/icons"

const PopularProducts = () => {
  return (
    <section>
      <div>
        <h2 className="text-4xl font-bold font-palanquin gap-5">
          Our
          <span className="text-coral-red">
            {" "}Popular{" "}
          </span>
          Products
        </h2>

        <p className="text-base font-montserrat text-slate-gray leading-6 mt-7 max-w-lg">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </p>

        <div className="grid grid-cols-2 gap-6 mt-16 lg:grid-cols-4">
          {products.map((prod) => (
            <div>
              <img src={prod.imgURL} />
              <div className="flex p-2 font-montserrat text-xl text-slate-gray font-medium mt-6">
                <img className="object-contain m-0 " src={star} /><span>
                  (4.5)
                </span>
              </div><br/>
            <div className="text-2xl font-palanquin font-semibold"> 
              {prod.name} 
              </div><br/>
            <div className="text-2xl font-montserrat font-semibold text-coral-red">
              {prod.price}
              </div>
            </div>
          ))}
          </div>

      </div>
    </section>
  )
}

export default PopularProducts