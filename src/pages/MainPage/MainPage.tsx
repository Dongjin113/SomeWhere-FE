import React, { useEffect, useState } from "react";
import NavBar from "../Nav/Nav";
import ContentBox from "../../components/ContentBox/ContentBox";
import {
  ContentBoxContainer,
  MainPageContainer,
  MapContainer,
} from "./MainPage.style";
import Footer from "../Footer/Footer";
import SelectTag from "../../components/SelectTag/SelectTag";
import MainPageMap from "../../components/Map/MainPageMap";
import useMainPageAPI from "../../api/camping/useMainPageAPI";
import { campingPreview } from "../../api/constants/camping";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../recoil/recoilAtom";

function MainPage() {
  const [isMenuFixed, setMenuFixed] = useState(false);
  const [regionCampings, setRegionCampings] = useState<campingPreview[]>();
  const { requestPreviewCamping } = useMainPageAPI();
  const [region, setRegion] = useState();
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const detailInfoHandler = (campingId) => {
    setIsOpen((prev) => {
      const updatedIsOpen = [...prev];
      updatedIsOpen[campingId] = !prev[campingId];
      return updatedIsOpen;
    });
  };

  const city = [
    // "서울특별시",
    // "경기도",
    // "강원도",
    // "전라남도",
    // "전라북도",
    // "경상남도",
    // "경상북도",
    // "충청남도",
    // "충청북도",
    // "광주",
    // "대구",
    // "대전",
    // "부산",
    // "울산",
    // "세종",
    // "인천",
    // "제주",

    "전라북도",
    "경상북도",
    "전라남도",
    "경상남도",
    "경기도",
    "강원도",
    "제주특별자치도",
    "충청남도",
    "충청북도",
    "대구광역시",
    "서울특별시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "세종특별자치시",
    "울산광역시",
    "부산광역시",
  ];

  const handleRegionCamping = (region) => {
    setRegion(region);
    requestPreviewCamping(region, setRegionCampings);
    console.log(regionCampings);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleRegionCamping("서울특별시");
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setMenuFixed(true);
    } else {
      setMenuFixed(false);
    }
  };

  const cityRows = [];
  const maxCitiesPerRow = 9;

  // city 배열을 7개씩 나누어서 cityRows에 추가
  for (let i = 0; i < city.length; i += maxCitiesPerRow) {
    cityRows.push(city.slice(i, i + maxCitiesPerRow));
  }

  return (
    <MainPageContainer>
      <NavBar />
      <SelectTag
        cityRows={cityRows}
        isMenuFixed={isMenuFixed}
        requestRegionCamping={handleRegionCamping}
      />
      <MapContainer isMenuFixed={isMenuFixed}>
        {regionCampings && (
          <MainPageMap
            campingData={regionCampings}
            detailInfoHandler={detailInfoHandler}
          />
        )}
      </MapContainer>
      <ContentBoxContainer isMenuFixed={isMenuFixed}>
        {regionCampings && (
          <ContentBox
            detailInfoHandler={detailInfoHandler}
            region={region}
            category={"캠핑장"}
            campingData={regionCampings}
          />
        )}
        {regionCampings && (
          <ContentBox region={region} campingData={regionCampings} />
        )}

        {regionCampings && (
          <ContentBox region={region} campingData={regionCampings} />
        )}
        {regionCampings && (
          <ContentBox region={region} campingData={regionCampings} />
        )}
        {regionCampings && (
          <ContentBox region={region} campingData={regionCampings} />
        )}
      </ContentBoxContainer>
      <Footer />
    </MainPageContainer>
  );
}

export default MainPage;
