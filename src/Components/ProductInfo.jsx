import style from "./ProductInfo.module.css";
export default function ProductInfo({ info }) {
  return (
    <div className={style.product}>
      <img src={info.image} alt={info.ref} />
      <h4>{info.ref}</h4>
      <p>
        <del>{info.price}</del>
        <strong>{info.promo}</strong>
      </p>
      <ul>
        <li>Bran : {info.brand}</li>
        <li>Family : {info.family}</li>
      </ul>
    </div>
  );
}
