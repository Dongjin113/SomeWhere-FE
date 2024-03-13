import React, { useState } from "react";
import {
  Nav,
  Logo,
  Item,
  Menu,
  Searchbox,
  SignIn,
  SignUp,
  SearchIcon,
  RightMenu,
  SearchInput,
} from "./Nav.style";

function MainPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <img src="/images/Some.png" alt="로고" />
      </Logo>
      <Menu>
        <Item>관 광 지</Item>
        <Item>맛 집</Item>
        <Item>카 페</Item>
        <Item>캠 핑</Item>
      </Menu>
      <RightMenu>
        <Searchbox>
          <SearchIcon onClick={() => setIsSearchOpen(!isSearchOpen)} />
          <SearchInput
            isOpen={isSearchOpen}
            type="text"
            placeholder="검색어를 입력해주세요"
          />
        </Searchbox>

        <SignIn>로그인</SignIn>
        <SignIn>로그인</SignIn>
        <SignUp>회원가입</SignUp>
      </RightMenu>
    </Nav>
  );
}

export default MainPage;
