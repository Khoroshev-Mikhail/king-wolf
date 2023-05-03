import Image from "next/image";
import ticker from "../../public/images/line-blue.png"
import ticker_green from "../../public/images/line-green.png"

export default function Ticker({ green } : { green?: boolean }){
    return(
        <div className="relative w-full">
            {/* <div className="absolute w-full h-full left-0 z-0 top-0 bg-[url('/images/line-green.png')] bg-no-repeat bg-cover bg-top"></div> */}
            <Image src={ green ? ticker_green : ticker } alt="ticker King Wolf" />
        </div>
    )
}