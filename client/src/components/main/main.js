import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useMatch } from "react-router";
import { Route } from "react-router-dom";
//images
import allimg from "../../assets/images/all-1.png";
import burger from "../../assets/images/burger-1.png";
import pizza from "../../assets/images/pizza-1.png";
import alcohol from "../../assets/images/wine.png";
import drink from "../../assets/images/drink.png";
import salad from "../../assets/images/salad.png";
import "./main.scss";
import FoodHolder from "../food container/foodContainer";
import ShowCase from "../showcase/showcase";
import Category from "../category/category";
import { useHistory, useRouteMatch } from "react-router";
import { useSelector } from "react-redux";

const Main = () => {
  let match = useRouteMatch();
  const [showAlert, setAlert] = useState(true);
  const [visible, setVisible] = useState(false);
  const [food, setFood] = useState(null);
  const history = useHistory();
  const FoodCategories = useSelector((state) => state.data.data);

  const renderContent = () => {
    let categoriesData = [];
    for (let key in FoodCategories) {
      // return FoodCategories.map(food => <FoodHolder {...food} product={food} setFood={setFood} />)
      categoriesData.push(<Category key={key} title={key} items={FoodCategories[key].slice(0, 5)} setFood={setFood} setVisible={setVisible} link="view all" />);
    }
    return categoriesData;
  };

  const renderSingleCategory = (category) => {
    return <Category items={FoodCategories[category]} setFood={setFood} setVisible={setVisible} title={category} scroll={true} />;
  };
  useEffect(() => {
    const burgerSection = document.querySelector(".burger");
    const saladsSection = document.querySelector(".salad");
    const pizzaSection = document.querySelector(".pizza");
    const alcoholSection = document.querySelector(".wine");
    const drinksSection = document.querySelector(".drink");
    //buttons/links
    const burgerLink = document.querySelector("#burgers");
    const pizzaLink = document.querySelector("#pizzas");
    const saladsLink = document.querySelector("#salads");
    const alcoholLink = document.querySelector("#alcohols");
    const drinksLink = document.querySelector("#drinks");

    if (!burgerLink) return;
    const scrolltoView = (el) =>
      el.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    burgerLink.addEventListener("click", () => {
      scrolltoView(burgerSection);
    });
    pizzaLink.addEventListener("click", () => {
      scrolltoView(pizzaSection);
    });
    alcoholLink.addEventListener("click", () => {
      scrolltoView(alcoholSection);
    });
    drinksLink.addEventListener("click", () => {
      scrolltoView(drinksSection);
    });
    saladsLink.addEventListener("click", () => {
      scrolltoView(saladsSection);
    });

    return () => {
      burgerLink.removeEventListener("click", () => {
        scrolltoView(burgerSection);
      });
      pizzaLink.removeEventListener("click", () => {
        scrolltoView(pizzaSection);
      });
      alcoholLink.removeEventListener("click", () => {
        scrolltoView(alcoholSection);
      });
      drinksLink.removeEventListener("click", () => {
        scrolltoView(drinksSection);
      });
      saladsLink.removeEventListener("click", () => {
        scrolltoView(saladsSection);
      });
    };
  });

  return (
    <main>
      {showAlert ? (
        <div className="main-alert">
          <span> We only deliver within a radius of 25km </span> <img src={require("../../assets/bike-2.png").default} alt="delivery-logo" />
          <span className="main-alert-close" onClick={() => setAlert(false)}>
            &times;
          </span>
        </div>
      ) : null}
      <h1>We have everything you are looking for</h1>
      <InputGroup className="my-5 ">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1" className="main-search-icon-container">
            <AiOutlineSearch className="main-search-icon" />
          </InputGroup.Text>
        </InputGroup.Prepend>

        {/* 
     when the search input is focused on, push history to /search? and render a search page
    */}
        <FormControl onFocus={() => history.push("/search")} className="main-search-input" placeholder="what are you craving for?" aria-label="what are you craving for?" aria-describedby="basic-addon1" />
      </InputGroup>
      <Route
        exact
        path={match.path}
        component={() => {
          return (
            <>
              <div className="categories">
                <ul className="categories-container flex spb">
                  <li id="burgers" className="flex a-cl a-center ">
                    <img src={burger} /> <h3>Burgers</h3>
                  </li>
                  <li id="pizzas" className="flex a-cl a-center ">
                    <img src={pizza} /> <h3>Pizzas</h3>
                  </li>
                  <li id="salads" className="flex a-cl a-center ">
                    <img src={salad} /> <h3>Salads</h3>
                  </li>
                  <li id="drinks" className="flex a-cl a-center ">
                    <img src={drink} /> <h3>Soft Drinks</h3>
                  </li>
                  <li id="alcohols" className="flex a-cl a-center ">
                    <img src={alcohol} /> <h3>Alcohols</h3>
                  </li>
                </ul>
              </div>
              <div className="main-content">{renderContent()}</div>
            </>
          );
        }}
      />
      <Route
        exact
        path={`/category/:category`}
        component={({ match }) => {
          const { category } = match.params;
          return renderSingleCategory(category);
        }}
      />
      {food && <ShowCase {...food} visible={visible} setVisible={setVisible} setFood={setFood} />}
    </main>
  );
};

export default Main;
