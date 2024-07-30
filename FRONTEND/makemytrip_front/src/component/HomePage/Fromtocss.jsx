import styled from "styled-components";

export const Fromtocss = styled.div`
  // width: 95%;
  // margin: 10px auto;
  // padding: 20px;
  // // border: 1px solid #d4d0d0;
  // border-radius: 12px;
   background-color: #fff;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   align-items: center;

  .trip-type {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;

    input[type="radio"] {
      margin: 0 10px;
      accent-color: #007bff;
    }
  }

  .fromtodiv,
  .fromtodiv2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 5px;
  }

  .fromtodiv div,
  .fromtodiv2 div {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #d4d0d0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .fromtodiv div:last-child,
  .fromtodiv2 div:last-child {
    margin-right: 0;
  }

  .fromtodiv select,
  .fromtodiv2 select,
  .fromtodiv input[type="date"],
  .fromtodiv2 input[type="date"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #d4d0d0;
    border-radius: 4px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url('data:image/svg+xml;base64,...') no-repeat right 10px center;
    background-size: 12px;
    margin-top: 5px;
  }

  .search-button {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    background: linear-gradient(to right, #007bff, #0056b3);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
  }

  .search-button:hover {
    background: linear-gradient(to right, #0056b3, #007bff);
  }

  .fare-types {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    button {
      flex: 1;
      padding: 10px;
      margin-right: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      border: 1px solid #d4d0d0;
      border-radius: 8px;
      background-color: #f8f8f8;
      cursor: pointer;
      text-align: center;
    }

    button:last-child {
      margin-right: 0;
    }

    button:hover {
      background-color: #e8e8e8;
    }
  }

  .trending-searches {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

    div {
      flex: 1;
      padding: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      text-align: center;
    }
  }
`;
