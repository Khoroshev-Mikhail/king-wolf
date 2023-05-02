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
                    text-[70px] leading-[80%]
                `}>
                    Our<br/>
                    <span className="text-my_green">Tocenomics</span>    
                </h2>

                <div className="grid relative z-30
                    grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-10
                    mt-[40px]
                    gap-y-[5px] sm:gap-y-[10px] sm:gap-x-[20px]
                ">

                    <div className="bg-[#191C25] rounded-2xl
                        p-[30px] sm:p-[40px]
                        col-span-1
                        row-span-1 sm:row-span-4
                    ">
                        <p className="font-extrabold
                            text-[20px] leading-[27px] tracking-[-0.02em]
                        ">
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

                    <div className="bg-[#191C25] rounded-2xl
                        p-[30px] sm:p-[40px]
                        col-span-1
                        row-span-1 sm:row-span-5
                    ">
                        <p>
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
                        p-[30px] sm:p-[40px]
                        col-span-1
                        row-span-1 sm:row-span-2
                    ">
                        <p>
                            <Image src={smart_contract} alt="icon" className="inline relative
                                mr-[15px] top-[2px] left-[-2px]
                            "/>
                            Smart Contract
                        </p>
                    </div>

                    <div className="bg-[#191C25] rounded-2xl
                        p-[30px] sm:p-[40px]
                        col-span-1
                        row-span-1 sm:row-span-5
                    ">
                        <p>
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

                    <div className="bg-[#191C25] rounded-2xl
                        p-[30px] sm:p-[40px
                        col-span-1
                        row-span-1 sm:row-span-4
                    ">
                        <p>
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