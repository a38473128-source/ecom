import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="Contact" className={style.contact}>
      <h2>Contact Us</h2>
      <div className={style.container}>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27171.04733889546!2d-8.07095200265068!3d31.650796782177945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafebe318fe5921%3A0x5e0128ad1ed23021!2sCarrefour%20Targa!5e0!3m2!1sfr!2sma!4v1772448090603!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
            <form action="" className={style.form}>
            <input type="text" name="" id="" placeholder="Name" required />
            <input type="text" name="" id="" placeholder="Email" required />
            <textarea name="" id="" placeholder="Message..." rows="5"></textarea>
            <button type="submit">Envoyer</button>
            </form>
      </div>
    </section>
  );
}
