import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  const { gonderiyiBegen, gonderilerProp } = props;

  return (
    <div className="posts-container-wrapper">
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {gonderilerProp.map((gonderi) => {
        return <Gonderi gonderiyiBegen={gonderiyiBegen} gonderi={gonderi} />;
      })}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
