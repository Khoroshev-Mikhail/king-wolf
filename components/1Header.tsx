import { drukCyr, drukCyrItalic } from "@/pages/_app";

export default function Header(){
    return(
        <header>
            <h1>king wolf:</h1>
            <h2 className={`${drukCyr}`}>
                <span>Be  part of</span>
                <span>the  wolf</span>
                <span>pack</span>    
            </h2>
            <p>Shiba inu had an affair with a wolf and a wolf cub was born. His mission is to unite everyone and become the king of memecoins</p>
            <button>buy now</button>
        </header>
    )
}