import { drukCyr, drukCyrItalic, manrope} from "@/pages/_app";
import Image from "next/image";
import roundWolfs from '../public/images/round-wolfs.png'

export default function Description(){
    return(
        <section className="relative
            px-[20px]
            bg-[url('/images/eclipse-desc-right.png')] bg-no-repeat bg-right bg-contain
        ">
            <div className="absolute">

            </div>
            <div className={drukCyr}>
                <p className="
                    text-[40px] leading-[95%]
                ">
                    <span className="text-my_green">WolfPack </span>
                    is a rapidly growing community striving to become<br/> 
                    <span className={drukCyrItalic}>one of the most </span>popular <br/>
                    in the crypto world
                </p>
            </div>
            <div>
                <div className={manrope}>
                    <p className="font-semibold
                        text-[16px] leading-[22px]
                        mt-[30px]
                        pr-[30px]
                    ">
                        We are creating a modern ecosystem that will bring people together from around the world to provide financial assistance in support of wolves around the world
                    </p>
                </div>
                <div className="mt-[30px]">
                    <Image src={roundWolfs} alt="wolfs"/>
                </div>
            </div>
        </section>
    )
}