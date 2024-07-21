import React from "react";
import { useNavigate } from "react-router-dom";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import { Icondivcss } from "./Icondivcss";

export const Icondiv = () => {
  const navigate = useNavigate();

  const handleIconClick = (path) => {
    navigate(path);
  };

  return (
    <Icondivcss>
      <div className="icondiv">
        <div onClick={() => handleIconClick("/Flights")}>
          <span>
            <FlightIcon style={{ fontSize: 40, padding: 4 }}></FlightIcon>
          </span>
          <p>Flights</p>
        </div>
        <div onClick={() => handleIconClick("/Hotels")}>
          <span>
            <HotelIcon style={{ fontSize: 40, padding: 4 }}></HotelIcon>
          </span>
          <p>Hotels</p>
        </div>
       
        
        <div onClick={() => handleIconClick("/Trains")}>
          <span>
            <TrainIcon style={{ fontSize: 40, padding: 4 }}></TrainIcon>
          </span>
          <p>Trains</p>
        </div>
        <div onClick={() => handleIconClick("/Buses")}>
          <span>
            <DirectionsBusFilledIcon
              style={{ fontSize: 40, padding: 4 }}
            ></DirectionsBusFilledIcon>
          </span>
          <p>Buses</p>
        </div>
        <div onClick={() => handleIconClick("/Cabs")}>
          <span>
            <LocalTaxiIcon style={{ fontSize: 40, padding: 4 }}></LocalTaxiIcon>
          </span>
          <p>Cabs</p>
        </div>
       
      </div>
    </Icondivcss>
  );
};
