import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: gray;
  min-height: 95px;
  opacity: 0.9;
  color: white;
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 3rem;
  font-size: 18px;
  text-align: center;
  white-space: nowrap;

  &:hover {
    color: black;
    border-bottom: 3px solid #000;
  }
`;

export const Logo = styled.div`
  padding-left: 5%;
  margin-right: 2rem;

  img {
    <index:!></index:!>
    width: 150px;
    height: 60px;
    background-color: transparent; /* 배경을 투명으로 설정 */
    color: white; /* 아이콘 색상을 하얀색으로 설정 */
  }
`;

export const Searchbox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2rem;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10%;
`;

export const SignIn = styled.div`
  padding-right: 2rem;
  white-space: nowrap;

  font-size: 18px;
`;

export const SignUp = styled.div`
  padding-right: 2rem;
  white-space: nowrap;
`;

export const SearchIcon = styled(FaSearch)`
  color: #333;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  outline: none;
  width: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: width 0.3s ease, opacity 0.3s ease;
`;
