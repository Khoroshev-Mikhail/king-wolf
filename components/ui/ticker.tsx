import Image from "next/image";
import ticker from "../../public/images/line-blue.png"
import ticker_green from "../../public/images/line-green.png"

export default function Ticker({ green } : { green?: boolean }){
    return(
        <div>
            <Image src={ green ? ticker_green : ticker } alt="ticker King Wolf" width={`${1000}`} />
        </div>
    )
}