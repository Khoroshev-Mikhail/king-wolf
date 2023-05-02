import Image from "next/image";

export default function Tocenomics_el({ img, header, text }:{ img: string, header: string, text: string }){
    return(
        <div className="bg-[#191C25] rounded-2xl
            p-[30px] sm:p-[40px]
        ">
            <p className="font-extrabold
                text-[20px] leading-[27px] tracking-[-0.02em]
            ">
                <Image src={img} alt="icon" className="inline relative
                    mr-[15px] top-[2px]
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

    )
}