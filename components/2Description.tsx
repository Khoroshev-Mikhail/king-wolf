import { drukCyr, drukCyrItalic, manrope} from "@/pages/_app";
import Image from "next/image";
import roundWolfs from '../public/images/round-wolfs.png'

export default function Description(){
    return(
        <section className="relative
            px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]
            sm:mt-[50px] md:mt-[75px] lg:mt-[100px] xl:mt-[150px] 
            bg-[url('/images/eclipse-desc-right.png')] bg-no-repeat bg-right bg-contain
            md:flex
        ">
            {/* <div className="absolute">

            </div> */}
            <div className={`${drukCyr} md:w-[50%]`}>
                <p className="
                    text-[40px] leading-[95%] md:text-[50px]
                    md:pr-[10px]
                ">
                    <span className="text-my_green">WolfPack </span>
                    is a rapidly growing community striving to become<br/> 
                    <span className={drukCyrItalic}>one of the most </span>popular <br/>
                    in the crypto world
                </p>
            </div>
            <div className="md:w-[50%] sm:flex md:block md:mt-[12px]">
                <div className={`${manrope} sm:w-[50%] md:w-full`}>
                    <p className="font-semibold
                        text-[16px] leading-[22px] sm:text-[20px] sm:leading-[27px]
                        mt-[30px] md:mt-0
                        pr-[30px]
                    ">
                        We are creating a modern ecosystem that will bring people together from around the world to provide financial assistance in support of wolves around the world
                    </p>
                </div>
                <div className="mt-[30px] md:mt-0  md:mt-[8px]">
                    <Image src={roundWolfs} width={262} alt="wolfs"/>
                </div>
            </div>
        </section>
    )
}