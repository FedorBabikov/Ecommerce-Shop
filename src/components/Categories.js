import React, { useEffect } from "react";
import Category from "./Category.js";

export default function Categories({
  categoriesToDisplay,
  selectedCategory,
  clickHandler,
}) {
  useEffect(() => {
    let sharedWidth = 0;

    const catButtons = document.querySelectorAll(".category .button");

    for (const button of catButtons) {
      const buttonWidth = button.offsetWidth;
      if (buttonWidth > sharedWidth) sharedWidth = buttonWidth;
    }

    document
      .getElementById("root")
      .style.setProperty("--btn_width", `${sharedWidth}px`);
  });

  return (
    <ul className="categories">
      {categoriesToDisplay.map((categoryName, index) => (
        <Category
          catName={categoryName}
          catClass={`button${
            categoryName === selectedCategory ? " clicked" : ""
          }`}
          clickHandler={clickHandler}
          key={index}
        />
      ))}
    </ul>
  );
}
