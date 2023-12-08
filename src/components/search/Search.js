import React from "react";
import "./SearchStyles.css";

import Awards from "../../assets/awards-2023.png";
import Awardss from "../../assets/awards.jpg";
import Gold from "../../assets/gold.png";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY TRAVEL FOR TWO PEOPLE</h2>
          <p>
            Escape to the world's most enchanting beaches with your loved one.
            Experience unparalleled privacy on the pristine shores of the
            Maldives or discover the emotional beauty of Bali. In Europe,
            embrace the romantic allure of Santorini in Greece or indulge in the
            captivating coastlines of Costa Smeralda, Italy. Let us curate your
            romantic getaway amidst the perfect blend of sun, sea, and love.
            Book your journey now and create unforgettable moments at the
            world's most beautiful beaches
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                {/* <img src={Awards} alt="/" style={{ marginRight: "1rem" }} /> */}
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 8% OFF</h4>
            <p className="timer">24 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Grande Antigua</option>
                <option value="1">Grenda</option>
                <option value="1">Emerald Bay</option>
                <option value="1">Bora Bora</option>
                <option value="1">Key West</option>
                <option value="1">Maldives</option>
                <option value="1">Barbados</option>
                <option value="1">Bali</option>
                <option value="1">Santorini </option>
                <option value="1">Costa Smeralda</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availabilities </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
