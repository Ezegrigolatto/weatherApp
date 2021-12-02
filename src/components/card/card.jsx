import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./card.css";
export default function Card() {
  const cardInfo = useSelector((state) => state.allInfo);

  function backgroundSelector() {
    switch (cardInfo.weather) {
      case "Clouds":
        return "https://nuevodiario-assets.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/11/09050740/Atmosphere-27953.gif";

      case "Clear":
        return "https://img.wattpad.com/c225b1bb297f58748c7e7f0dbd70139a0f760485/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d682d7a6e34546a4555627853513d3d2d3737353835373237342e313562646666386336643636613463623630353437313939353430372e676966";

      case "Rain":
        return "https://santodomingoestedigitalrd.com/wp-content/uploads/2021/04/7f83aed841c8308c9962043078bbc563.gif";

      case "Snow":
        return "https://i.pinimg.com/originals/89/65/c9/8965c9cc2896c9578b4e92a36d4b561f.gif";

      case "Fog":
        return "https://i.pinimg.com/originals/d3/26/47/d32647654a3073d093b4f6eac4da191b.gif";

      case "Mist":
        return "https://i.pinimg.com/originals/d3/26/47/d32647654a3073d093b4f6eac4da191b.gif";

      case "Haze":
        return "https://i.pinimg.com/originals/d3/26/47/d32647654a3073d093b4f6eac4da191b.gif";
      default:
        return "https://www.wallpapertip.com/wmimgs/3-34573_blue-wallpaper-hd-blue-and-white-hd.jpg";
    }
  }

  let render = "";
  cardInfo.name
    ? (render = (
        <div className="cardContainer">
          <img src={backgroundSelector()} />
          <h1 className="city">El clima en {cardInfo.name}</h1>
          <h1 className="temp">{cardInfo.temp} °C</h1>
          <h1 className="minMax">MIN: {cardInfo.tempMin} °C</h1>
          <h1 className="minMax">MAX: {cardInfo.tempMax} °C</h1>
          <h1 className="humidity">{cardInfo.humidity} %</h1>
          <h1 className="pressure">{cardInfo.pressure} hPa</h1>
        </div>
      ))
    : (render = (
        <div className="welcome">
          {" "}
          <p>Welcome to Wheater App. </p>
          <p>Please, enter a city.</p>{" "}
        </div>
      ));

  return <div>{render}</div>;
}
