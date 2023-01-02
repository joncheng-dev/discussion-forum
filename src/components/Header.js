import React from "react";
import styled from "styled-components";

function Header() {
  const ComponentStyle = styled.div`
    .nav-bar {
      display: flex;
      align-items: flex-end;
    }

    .nav-bar > * {
      flex-basis: 100%;
    }
  `;

  return (
    <React.Fragment>
      <ComponentStyle>
        <div className="nav-bar">
          <div className="col-1">
            <h2>Discussion Forum</h2>
          </div>
          <div className="col-2">
            <input placeholder="Search" />
          </div>
          <div className="col-3">
            <button>Log In</button>
          </div>
        </div>
      </ComponentStyle>
    </React.Fragment>
  );
}

export default Header;
