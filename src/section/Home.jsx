import style from "./Home.module.css";

import { brands } from "../data/brands"; 
import {families} from "../data/families"

export default function Home() {
  return (
    <section id="home" className={style.home}>
      <div className={style.slogan}>
        <h1>Bienvenue chez note univers </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consequuntur, nisi quam cum recusandae consectetur necessitatibus sed,
          ipsa aperiam dolorum nesciunt, porro quo excepturi officia laborum
          voluptas explicabo quia. Odit dolor dolores vel sed consequuntur nisi
          aut, odio culpa quam, dolorum placeat dolore! Deserunt eaque cum, quam
          totam vero rem?
        </p>
      </div>
      <div className={style.news}>
        <div>
        <h3>Meilleures marques</h3>
        <div className={style.grid}>
            {
                brands.slice(0,3).map(brand=>(
                    <div className={style.card}>
                        <img src={brand.image} alt="" />
                        <h4>{brand.name}</h4>
                    </div>
                )
                )
            }
        </div>
        </div>
        {/* ---------------- */}
        <div>
        <h3>Meilleures marques</h3>
        <div className={style.grid}>
            {
                families.slice(0,3).map(fam=>(
                    <div className={style.card}>
                        <img src={fam.image} alt="" />
                        <h4>{fam.name}</h4>
                    </div>
                )
                )
            }
        </div>
        </div>
      </div>
    </section>
  )
}
