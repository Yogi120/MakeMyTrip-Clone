import styled from "styled-components";
export const Navbar = styled.div`
  height: 500px;

  background-image: url("https://images.unsplash.com/photo-1583364501903-49485df18877?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  .laltain {
    position: absolute;
    left: 0pf-17x;
    top: 0px;
  }
  .mmtlogo {
    position: absolute;
    left: 70px;
    top: 10px;
    width: 8%;
  }
  .topdiv {
    padding-top: 20px;
    height: 70px;
    display: flex;
    gap: 10px;
    flex-direction: row-reverse;
  }
  .button {
    width: 200px;
    margin: auto;

    button {
      width: 200px;
      height: 50px;
      color: white;
      font-weight: 600;
      border: none;
      cursor: pointer;
      position: relative;
      top: 25px;
      font-size: 24px;
      border-radius: 25px;
      background: linear-gradient(
        to right,
        #8fdcfa 0%,
        #619ff0 50%,
        #6c9feb 50%,
        #3339e9 100%
      );
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
