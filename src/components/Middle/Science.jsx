import sciencebehind from "../../assets/Product/sciencebehind.png" ;

import { MdKeyboardArrowRight } from "react-icons/md";
import { TEInput, TERipple } from 'tw-elements-react';

const Science = () => {
  return (
    <div className='   '>
      <div className='mb-1 md:mb-5 ml-8 md:ml-[12%] mt-[80%] md:mt-16 font-bold text-[#0288D1] text-3xl lg:text-5xl tracking-tight'>
        Science Behind Swaknee
      </div>
      <div className="px-32 ">

      <div className=" shadow-xl grid grid-cols-2">
        <div className='w-[90%]  '>
        <div className="w-full px-5">
          <img
            className="   w-full rounded-lg"
            src={sciencebehind}
            alt=""
            />
   
      </div>
            </div>
        <div className="mt-10 px-8 ">
            <div className="font-bold text-xl mb-2">How Swaknee works    </div>
        PEMF based Swa-Knee devices therapy works at low frequencies induces transient depolarization of cell membranes, leading to calcium ion channel opening and Nitric Oxide release, a potent vasodilator. This enhances blood flow to the knee joint, delivering vital nutrients and growth factors like IGF-1 and TGF-β to cartilage, aiding chondrocyte activity for cartilage repair and regeneration. Increased blood flow also means more growth factors reach the cartilage, promoting its restoration. Consequently, PEMF therapy can alleviate knee joint inflammation and pain, enhancing joint function.
        </div>
        </div>
      </div>

      </div>
  );
}

export default Science;
