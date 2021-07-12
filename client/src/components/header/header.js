import React,{useEffect} from "react";
import { Zoom } from "react-slideshow-image";
import image from "../../assets/slides/image (1).jpg";
import image2 from "../../assets/slides/image (2).jpg";
import image3 from "../../assets/slides/image (3).jpg";
import "react-slideshow-image/dist/styles.css";
import "./header.scss";
import { useHistory } from "react-router";

const MainHeader = () => {
  const history = useHistory()
  const paths = [
    "../../assets/slides/image (1).jpg",
    "../../assets/slides/image (2).jpg",
    "../../assets/slides/image (3).jpg",
  ];
  const props = {
    scale: 1.4,
    indicators: false,
    arrows: false,
  };
const orderBtnClick = (link) => {
   history.push(link)
}
  useEffect(()=> {
    const burgerSection = document.querySelector(".burgers");
    const saladsSection = document.querySelector(".salads");
    const pizzaSection = document.querySelector(".pizzas");

  })

  return (
    <header>
      <Zoom {...props}>
        <div
          className="slide-item flex a-cl jc"
          style={{ width: "100vw", backgroundImage: `url('${image3}')` }}
        >
          <div>
            <h1>Enjoy healthy and delicious food</h1>
            <button onClick={() => orderBtnClick("/category/salad")}>
              Order now
            </button>
          </div>
        </div>
        <div
          className="slide-item flex a-cl jc"
          style={{ width: "100vw", backgroundImage: `url('${image2}')` }}
        >
          <h1>The Italian Pizza, crafted by the italian people</h1>
          <button onClick={() => orderBtnClick("/category/pizza")}>
            Order now
          </button>
        </div>
        <div
          className="slide-item flex a-cl jc"
          style={{ width: "100vw", backgroundImage: `url('${image}')` }}
        >
          <h1>It is not just a burger. It is a Ham double burger</h1>
          <button onClick={() => orderBtnClick("/category/burger")}>
            Order now
          </button>
        </div>
      </Zoom>
    </header>
  );
};

export default MainHeader;
