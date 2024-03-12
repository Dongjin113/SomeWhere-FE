import React from "react";
import { Nav, Logo } from "./MainPage.style";

function MainPage() {
  return (
    <Nav>
      <Logo>
        <img src="/images/Some.png" alt="로고" />
      </Logo>
      <div className="menu">
        <ul className="menu items">
          <li className="menu item">관광지</li>
          <li className="menu item">맛집</li>
          <li className="menu item">카페</li>
          <li className="menu item">캠핑</li>
        </ul>
      </div>
      <div>
        <input type="text" placeholder="검색어를 입력해주세요" />
      </div>
    </Nav>
  );
}

export default MainPage;
