import React from "react";
import styled from "styled-components";

function Header() {
  const ComponentStyle = styled.div`
    .nav-bar {
      display: flex;
      flex-wrap: wrap;
    }

    .nav-bar > *:nth-child(1) {
      flex: 1 1 70%;
    }

    .nav-bar > *:nth-child(2) {
      flex: 1 1 30%;
    }
  `;

  return (
    <React.Fragment>
      <ComponentStyle>
        <div className="nav-bar">
          <div className="col">
            <h1>Discussion Forum</h1>
          </div>
          <div className="col">
            <form>
              <input name="login" placeholder="Login: " />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </ComponentStyle>
    </React.Fragment>
  );
}

export default Header;
