import React from "react";
import Yorum from "./Yorum";
import "./Yorumlar.css";

const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;
  // object destructuring ile yorumlar dizisini props'tan çekiyoruz.

  return (
    <div>
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
      {yorumlar.map((yorum, ind) => {
        return <Yorum key={ind} yorum={yorum} />;
      })}
    </div>
  );
};

export default Yorumlar;
