import style from "./Header.module.css"

export default function Header(){
    return(
        <header>
            <div className={style.logo}>eCom App</div>

            <div className={style.nav}>
                <a href="#Home">HOME</a>
                <a href="#Product">Product</a>
                <a href="#AboutUs">AboutUs</a>
                <a href="Contact">Contact</a>
            </div>
        </header>
    )
}