import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Statecontext from "../Context/Statecontext";

const Style = styled.div`
  height: 250px;
  background: linear-gradient(
    to top,
    #030779 0%,
    #03053b 50%,
    #03043d 50%,
    #020420 100%
  );
  .jelo {
    background-color: #002f6c; /* Dark blue background */
    padding: 20px;
    color: white;
  }
  
  .topdiv {
    display: flex;
    justify-content: center;
  }
  
  .input-group {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
  }
  
  .input-item {
    flex: 1;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .input-item p {
    margin-bottom: 8px;
    font-size: 16px;
  }
  
  .input-item select, .input-item input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    color: black;
  }
  
  .search-button {
    margin-top: 32px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
`;

export const SearchBox = ({ handle }) => {
  const {
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    travellerClass,
    setTravellerClass,
    apiBaseUrl,
  } = useContext(Statecontext);

  const [select, setSelect] = useState({
    from: from,
    to: to,
    TravellerClass: travellerClass,
    trip: "",
    DepartDate: departureDate,
    ReturnDate: returnDate,
  });

  const [text, setText] = useState([]);

  const handleSelect = (e) => {
    const { value, name } = e.target;
    console.log(value, "Value");
    setSelect({
      ...select,
      [name]: value,
    });
  };

  useEffect(() => {
    let promise = async () => {
      const data = await fetch(`${apiBaseUrl}getallcountry/countries/cities`);
      console.log(data, "Countrys data");

      const ans = await data.json();
      setText(ans);
      console.log(ans, "ans data");
    };
    promise();
  }, [apiBaseUrl]);

  const handleButton = () => {
    console.log("get Value Over here", select);
    handle(select);
  };

  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  console.log(select, "select");

  return (
    <Style>
      <div className={nav === true ? "hello jelo" : "jelo"}>
        <div className="topdiv">
          <div className="input-group">
            <div className="input-item">
              <p>Trip Type</p>
              <select
                name="trip"
                id="trip"
                onChange={handleSelect}
                value={select.trip}
              >
                <option value="">Select</option>
                <option value="oneway">Oneway</option>
                <option value="twoway">Twoway</option>
              </select>
            </div>
            <div className="input-item">
              <p>From</p>
              <select
                onChange={handleSelect}
                name="from"
                id="from"
                value={select.from}
              >
                <option value="">Select</option>
                {text.map((e) => (
                  <option value={e.cityName} key={e.cityName}>
                    {e.cityName}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-item">
              <p>To</p>
              <select onChange={handleSelect} name="to" id="to" value={select.to}>
                <option value="">Select</option>
                {text.map((e) => (
                  <option value={e.cityName} key={e.cityName}>
                    {e.cityName}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-item">
              <p>Depart</p>
              <input
                name="DepartDate"
                type="date"
                id="DepartDate"
                className="date"
                value={select.DepartDate}
                onChange={handleSelect}
              />
            </div>
            <div className="input-item">
              <p>Return</p>
              <input
                name="ReturnDate"
                type="date"
                id="returndate"
                className="date"
                onChange={handleSelect}
                value={select.ReturnDate}
              />
            </div>
            <div className="input-item">
              <p>Traveller and Class</p>
              <select
                onChange={handleSelect}
                name="TravellerClass"
                id="TravellerClass"
                value={select.TravellerClass}
              >
                <option value="">Select</option>
                <option value="Economy">Economy</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div className="input-item">
              <button className="search-button" onClick={handleButton}>SEARCH</button>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
