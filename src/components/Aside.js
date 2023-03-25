import React from "react";

class Aside extends React.Component {
  render() {
    return (
      <div className="filter-panel">
        <div className="filter__categories">
          <h3>Categories</h3>
          <ul className="categories__items">
            <li className="categories__item">
              House plants <div>(1)</div>
            </li>
            <li className="categories__item">
              Potter plants <div>(1)</div>
            </li>
            <li className="categories__item">
              Seeds <div>(1)</div>
            </li>
            <li className="categories__item">
              Small plants <div>(1)</div>
            </li>
            <li className="categories__item">
              Big plants <div>(1)</div>
            </li>
            <li className="categories__item">
              Secculents <div>(1)</div>
            </li>
            <li className="categories__item">
              Trerrariums <div>(1)</div>
            </li>
            <li className="categories__item">
              Gardening <div>(1)</div>
            </li>
            <li className="categories__item">
              Accessories <div>(1)</div>
            </li>
          </ul>
        </div>
        <div className="filter__price">
          <h3>Price Range</h3>
          <input
            type="range"
            className="range-input"
            min={0}
            max={100}
            /*value={0}*/
            id="range"
          />
          <div>
            <label htmlFor="range">
              Price:
              <div>0-10</div>
            </label>
          </div>
          <a href="*" className="filter__btn btn">
            Filter
          </a>
        </div>
        <div className="filter__size">
          <h3>Size</h3>
          <ul className="size__items">
            <li className="size__item">
              Small <div>{`(1)`}</div>
            </li>
            <li className="size__item">
              Medium <div>{`(1)`}</div>
            </li>
            <li className="size__item">
              Large <div>{`(1)`}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;
