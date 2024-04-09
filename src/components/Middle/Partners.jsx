import Marquee from "react-fast-marquee";
import img1 from "../../assets/marquee/aims.png"
import img2 from "../../assets/marquee/big.png"
import img3 from "../../assets/marquee/birac.png"
import img4 from "../../assets/marquee/dst-logo.jpg"
import img5 from "../../assets/marquee/govt.png"
import img6 from "../../assets/marquee/kiit.png"
import img7 from "../../assets/marquee/nidhi.png"
import img8 from "../../assets/marquee/startup.png"
import img9 from "../../assets/marquee/tbi.png"
const Partners = () => {
  return (

    <div className=' gap-[40px] mt-7 '>
           <div className='text-5xl  text-[#F57C00] mb-10 font-semibold  text-center  md:px-20 '>

                Our Collaborators
           <Marquee speed={100} gradient={true} className="mt-10">
                <div className="md:gap-10 gap-5 flex flex-row">
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img1} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img2} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img3} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img4} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img5} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img6} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img7} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-2 " src={img8} alt="" /> </div>
        <div> <img className="md:w-30 md:h-20 w-15 h-12 px-10 " src={img9} alt="" /> </div>
        </div>
        </Marquee>


    </div>
        </div>

  )
}

export default Partners;