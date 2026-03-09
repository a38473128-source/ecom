import style from "./AboutUs.module.css";

import styleHome from "./Home.module.css";

import { families } from "../data/families";
import { brands } from "../data/brands";

export default function AboutUs() {
  return (
    <section id="AboutUs" className={style.about}>
      <h2 className="">About Us</h2>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        saepe ab. Laudantium, aliquid necessitatibus labore repellendus officiis
        dolorem, consequatur odit velit doloremque est similique quod optio
        minus, illo sint aperiam quam quo corporis cupiditate minima! At
        provident adipisci expedita doloribus ratione optio beatae consequatur!
        Illum libero ad consequuntur quod voluptates, nemo eveniet sint iste
        deserunt dicta atque unde animi tenetur, dignissimos in molestiae quasi
        eius dolorem natus impedit adipisci expedita sit, error minima. Deleniti
        animi fuga cum magni a culpa eligendi cumque nemo ut, saepe unde
        praesentium facere temporibus incidunt sapiente quos tenetur reiciendis
        nobis repudiandae! Corrupti eligendi placeat repellendus.
      </p>
      <h3>Nos marque</h3>
      <div className={styleHome.grid}>
        {brands.map((brand) => (
          <div className={styleHome.card}>
            <img src={brand.image} alt="" />
            <h4>{brand.name}</h4>
          </div>
        ))}
      </div>

      <h3>Nos families</h3>
      <div className={styleHome.grid}>
        {families.map((fam) => (
          <div className={styleHome.card}>
            <img src={fam.image} alt="" />
            <h4>{fam.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
