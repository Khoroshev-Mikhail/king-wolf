import { drukCyrBold } from "@/pages/_app";
import Image from "next/image";
import total_supply from "../public/images/icon/total-supply.svg"
import total_security from "../public/images/icon/total-security.svg"
import smart_contract from "../public/images/icon/smart-contract.svg"
import sell_tax from "../public/images/icon/sell-tax.svg"
import buy_tax from "../public/images/icon/buy-tax.svg"
import Ticker from "./ui/ticker";

export default function Tokenomics(){
    return(
        <section className="relative
            pt-[86px]
            
            pb-[65px]
            
        ">
            <div className="absolute w-full h-full left-0 z-0 top-0 bg-[url('/images/eclipse-tocenomics-right-left.png')] bg-no-repeat bg-cover bg-top"></div>

            <div className="px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[200px]">
                <h2 className={`${drukCyrBold} uppercase
                    text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[156px] leading-[80%]
                    sm:text-center
                `}>
                    Our <br className="sm:hidden"/>
                    <span className="text-my_green">Tocenomics</span>    
                </h2>

                <div className="grid relative z-30
                    grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-10
                    mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]
                    gap-y-[5px] sm:gap-y-[10px] sm:gap-x-[20px]
                ">

                    <div className="bg-[#191C25] rounded-2xl _shadow
                        p-[30px] sm:p-[27px]
                        col-span-1 sm:col-start-1 sm:col-end-2
                        row-span-1 sm:row-span-4 sm:row-start-1 sm:row-end-5
                    ">
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={total_supply} alt="icon" className="inline relative
                                mr-[15px] top-[2px] left-[-2px]
                            "/>
                            Total Supply
                        </p>
                        <p className="font-medium
                            mt-[15px]
                            text-[12px] leading-[16px]
                        ">
                            10,000,000,000,000,000,000,000,000 Wolf Pack
                        </p>
                    </div>

                    <div className="bg-[#191C25] rounded-2xl _shadow
                        p-[30px] sm:p-[27px]
                        col-span-1 sm:col-start-1 sm:col-end-2
                        row-span-1 sm:row-span-4 sm:row-start-5 sm:row-end-9
                    ">
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={total_security} alt="icon" className="inline relative
                                mr-[15px] top-[3px] left-[-2px]
                            "/>
                            Total Security
                        </p>
                        <p className="font-medium
                            mt-[15px]
                            text-[12px] leading-[16px]
                        ">
                            Liquidity locked up for a 5 years
                        </p>
                    </div>

                    <div className="bg-[#191C25] rounded-2xl
                        p-[30px] sm:p-[27px]
                        col-span-1 sm:col-start-1 sm:col-end-2
                        row-span-1 sm:row-span-2 sm:row-start-10 sm:row-end-11
                    ">
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={smart_contract} alt="icon" className="inline relative
                                mr-[15px] top-[2px] left-[-2px]
                            "/>
                            Smart Contract
                        </p>
                    </div>

                    <div className="bg-[#191C25] rounded-2xl
                        p-[30px] sm:p-[27px]
                        col-span-1 sm:col-start-2 sm:col-end-3
                        row-span-1 sm:row-span-5 sm:row-start-1 sm:row-end-6
                    ">
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={sell_tax} alt="icon" className="inline relative
                                mr-[15px] top-[2px] left-[-4px]
                            "/>
                            Sell Tax
                        </p>
                        <ul className="font-medium 
                            columns-2 sm:columns-3
                            text-[12px] leading-[16px]
                            pt-[15px]
                        ">
                            <li>
                                <span className="font-extrabold">9%</span> Sell Tax
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">2%</span> Buyback
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">3%</span> Philanthropy
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">2%</span> Backflow
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">2%</span> Marketing
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#191C25] rounded-2xl _shadow
                        p-[30px] sm:p-[40px
                        col-span-1 sm:col-start-2 sm:col-end-3
                        row-span-1 sm:row-span-5 sm:row-start-6 sm:row-end-11
                    ">
                        <p className="text-[20px] leading-[27px] lg:text-[26px] lg:leading-[38px] font-bold">
                            <Image src={buy_tax} alt="icon" className="inline relative
                                mr-[15px] top-[-2px]
                            "/>
                            Buy Tax
                        </p>
                        <ul className="font-medium 
                            columns-2 sm:columns-3
                            text-[12px] leading-[16px]
                            pt-[15px]
                        ">
                            <li>
                                <span className="font-extrabold">9%</span> Sell Tax
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">2%</span> Buyback
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">3%</span> Philanthropy
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">2%</span> Backflow
                            </li>
                            <li className="mt-[10px]">
                                <span className="font-extrabold">2%</span> Marketing
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="pt-[45px] relative z-30">
                    <Ticker /> 
                </div>
            </div>
        </section>
    )
}