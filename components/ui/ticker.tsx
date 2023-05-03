import Image from "next/image";
import Marquee from "react-fast-marquee";
import line from '../../public/images/line-blue.svg'
import line_green from '../../public/images/line-green.svg'
import line_mobile from '../../public/images/line-blue-mobile.svg'
import line_green_mobile from '../../public/images/line-green-mobile.svg'

export default function Ticker({ green } : { green?: boolean }){
    return(
        <div className={`
            mx-[-20px] md:mx-[-40px] lg:mx-[-60px] xl:mx-[-80px] 2xl:mx-[-200px]
            relative ${green ? 'rotate-[-2deg]' : 'rotate-[2deg]'} 
        `}>
            <Marquee autoFill>
                <Image src={green ? line_green : line} alt="king wolf" className="hidden sm:inline"/>
                <Image src={green ? line_green_mobile : line_mobile} alt="king wolf" className="sm:hidden"/>
            </Marquee>
        </div>
    )
}