import React from "react";
import { HomeMenuBody, Content, Gallery, GalleryItem } from "./HomeMenu.style";
import {
  useCampingNavigation,
  useMatjibNavigation,
  useTravelNavigation,
  useCafeNavigation,
} from "../../constants/urlNavigator";

function HomeMenu() {
  const campingNavigation = useCampingNavigation();
  const matjibNavigation = useMatjibNavigation();
  const travelNavigation = useTravelNavigation();
  const cafeNavigation = useCafeNavigation();

  return (
    <HomeMenuBody>
      <Gallery>
        <GalleryItem onClick={campingNavigation}>
          <Content>
            <h2>캠 핑</h2>
            <p>지역별 캠핑지, 반려동물 동반 캠핑지 소개</p>
          </Content>
        </GalleryItem>
        <GalleryItem onClick={matjibNavigation}>
          <Content>
            <h2>맛 집</h2>
            <p>지역별 맛집 소개</p>
          </Content>
        </GalleryItem>
        <GalleryItem onClick={travelNavigation}>
          <Content>
            <h2>관 광 지</h2>
            <p>지역별 관광지 소개</p>
          </Content>
        </GalleryItem>
        <GalleryItem onClick={cafeNavigation}>
          <Content>
            <h2>카 페</h2>
            <p>지역별 카페 소개</p>
          </Content>
        </GalleryItem>
      </Gallery>
    </HomeMenuBody>
  );
}

export default HomeMenu;
