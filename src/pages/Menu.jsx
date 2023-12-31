import { Link, useLocation } from "react-router-dom";
import { menus } from "../data/menus.js";
import { useState } from "react";

import MenuItem from "../components/menu/MenuItem.jsx";

import MealDetails from "../components/modal/MealDetails.jsx";
import SearchInput from "../components/menu/SearchInput.jsx";

import { FaPizzaSlice } from "react-icons/fa";
import { GiTacos } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";

import { MdSoupKitchen } from "react-icons/md";
import { FaPepperHot } from "react-icons/fa";

const Menu = () => {
  const [menuIsShown, setMenuIsShown] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const showMenuHandler = (meal) => {
    setSelectedMeal(meal);
    setMenuIsShown(true);
  };

  const closeMenuHandler = () => {
    setMenuIsShown(false);
  };
  const location = useLocation(); // Get the current location object
  const { pathname } = location;
  const isRootMenu = pathname === "/menu"; // Check if it's the root "/menu" route

  const cuisineType = pathname.split("/").pop(); // Extract the cuisine type from the URL path

  const cuisineTypes = menus.filter(
    (menu, index, self) =>
      index === self.findIndex((m) => m.cuisineType === menu.cuisineType)
  );
  const getCuisineIcon = (cuisineType) => {
    switch (cuisineType) {
      case "Italian":
        return <FaPizzaSlice className="w-6 h-6" />;
      case "Japanese":
        return <FaFish className="w-6 h-6" />;
      case "Korean":
        return <GiChiliPepper className="w-6 h-6" />;
      case "Mexican":
        return <GiTacos className="w-6 h-6" />;
      case "Thai":
        return <MdSoupKitchen className="w-6 h-6" />;
      case "Indian":
        return <FaPepperHot className="w-6 h-6" />;
      default:
        return;
    }
  };
  const filteredMenus = isRootMenu // Use isRootMenu to determine if all menus should be displayed
    ? menus
    : cuisineType
    ? menus.filter((menu) => menu.cuisineType === cuisineType)
    : [];

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const filteredSearchMenus = filteredMenus.filter((menu) =>
    menu.foodName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="container px-4 mx-auto">
      <div>
        <div className="md:flex justify-between mb-14">
          <h2>Find the best foods</h2>
          <SearchInput
            handleSearchInput={handleSearchInput}
            searchInput={searchInput}
          />
        </div>

        <div className="mb-20">
          <ul className="flex justify-around items-center px-4 py-2 bg-white shadow-md rounded-3xl overflow-hidden">
            <div className="flex flex-col items-center justify-center">
              <FaUtensils className="w-6 h-6" />
              <Link to="/menu" className="mt-2 hover:text-red-500">
                ALL
              </Link>
            </div>

            {cuisineTypes.map((menu) => (
              <div
                key={menu.id}
                className="flex flex-col items-center justify-center"
              >
                {getCuisineIcon(menu.cuisineType)}
                <Link to={`/menu/${menu.cuisineType}`} className="mt-2">
                  {menu.cuisineType}
                </Link>
              </div>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <ul className="grid w-64 mx-auto sm:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSearchMenus.map((menu) => (
              <MenuItem
                key={menu.id}
                id={menu.id}
                foodName={menu.foodName}
                price={menu.price}
                calories={menu.calories}
                servings={menu.servings}
                image={menu.image}
                description={menu.description}
                onShowMenu={() => showMenuHandler(menu)}
              />
            ))}
          </ul>
        </div>
      </div>
      {menuIsShown && (
        <MealDetails onHideMenu={closeMenuHandler} meal={selectedMeal} />
      )}
    </section>
  );
};

export default Menu;
