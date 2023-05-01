import Image from "next/image";
import twitter from "../../public/images/twitter.png"
import twitter_green from "../../public/images/twitter-green.png"
import telegram from "../../public/images/telegram.png"
import telegram_green from "../../public/images/telegram-green.png"

export default function Social({ green }:{ green?: boolean }){
    return (
        <div className="flex gap-x-[5px] sm:gap-x-[10px]">
            <a href="#">
                <Image className="sm:w-[48px] sm:h-[48px] w-[30px] h-[30px]" src={ green ? twitter_green : twitter } alt="twitter"/>
            </a>
            <a href="#">
                <Image className="sm:w-[48px] sm:h-[48px] w-[30px] h-[30px]" src={ green ? telegram_green : telegram } alt="telegram"/>
            </a>
        </div>
    )
}