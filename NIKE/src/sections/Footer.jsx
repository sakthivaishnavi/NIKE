import { copyrightSign, facebook, instagram, twitter } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} className="cursor-pointer m-0" />
          </a>
          <p className="text-white-400 font-montserrat text-base leading-7 sm:max-w-sm  mt-6">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center mt-8 gap-5">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={facebook} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={twitter} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={instagram} width={24} height={24} />
            </div>
          </div>
        </div>
        
        

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>  
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      

        

        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

      </footer>

  )
}

export default Footer
