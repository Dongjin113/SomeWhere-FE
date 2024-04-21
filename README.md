# MainPage
## [✨ MainPage Nav바 추가](https://github.com/Dongjin113/Some-Where-FE/commit/406d5ba52f36931f9aa2bb6ee8e04f8e7b77540c)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/68886c67-e480-491f-af06-2c3562052a65)
- 관광지, 맛집, 카페, 캠핑 메뉴
- 돋보기 클릭시 검색바 등장
- 로그인, 로그아웃, 회원가입 

## [✨ MainPage ContentBox의 ContentItem 컴포넌트 추가](https://github.com/Dongjin113/Some-Where-FE/commit/153cc998fb8b43140f2730fc414df03979b1cb22)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/fbc22101-b57d-40ae-97b3-99e22d48c7c9)
- ContentBox의 ContentItem 컴포넌트로 생성

## [✨ MainPage ContentBox 컴포넌트 추가](https://github.com/Dongjin113/Some-Where-FE/commit/705d6d07848d5a65f5e8351cde127432cc2b5e7b)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/d3b8d987-f0a4-4630-9870-de00eae56e1f)
- 추후 맛집, 관광지, 카페 또한 추가되어 재사용할 것으로 보여 컴포넌트로 생성

## [✨ MainPage SelectTag 컴포넌트 추가](https://github.com/Dongjin113/Some-Where-FE/commit/69b4c095515fd5a3a73705d80ab0e404a592af7a)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/d6261329-bc6b-4f25-af3f-61d16d15edba)
- 태그 클릭시 해당지역의 캠핑장 정보 요청이 발생
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/05e21efc-bea1-4f46-9e36-9de983409b49)
- 마우스 스크롤시 화면상단에 Fixed

# 카카오 맵
## [✨ 카카오 맵 컴포넌트 추가](https://github.com/Dongjin113/Some-Where-FE/commit/2860e3a59c98ac32e630fbc527f85e1cba0a8094)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/4f9612d6-3420-47c0-94ae-c6a2ab77f8fb)
- 태그를 통해 지역에 대한 캠핑장 정보를 받아오면 카카오맵 위에 캠핑장 위치와 캠핑장 명 표시
- 캠핑장 마커 클릭시 캠핑장에 대한 간단한 설명 표시

## [✨ 내 위치를 가져오는 CustomHook 추가](https://github.com/Dongjin113/Some-Where-FE/commit/fb6891bfdf01ee29ad804f7beb3145a13ebc3fc7)
- Geolocation을 통해 사용자의 위치 야구공 모양으로 표시

## [✨ 카카오 맵위의 캠핑장 정보 Overlay Recoil을 사용하여 전역으로 관리](https://github.com/Dongjin113/Some-Where-FE/commit/4699f01bcf3007791ce3ce00f3751d6bfdf578db)
- ContentBox에 나오는 캠핑장에 hover시 지도위의 캠핑장에 Overlay가 표시

## [✨ MainPage 요청 API 및 응답데이터 타입 정의](https://github.com/Dongjin113/Some-Where-FE/commit/2f316eb2535591139598bac1395d40c6b215cea8)

## [✨ footer 컴포넌트 추가](https://github.com/Dongjin113/Some-Where-FE/commit/be16b07911595f0f6d0a0dbfd7e763770a1e925b)
![image](https://github.com/Dongjin113/Some-Where-FE/




# [✨ 지도위 캠핑장 정보를 표시할 CampingDetailMap](https://github.com/Dongjin113/Some-Where-FE/commit/b5a17a9a4f95b5c152e34159fa87bd7fd8f28a8a)

## [🚚 MainPageMap 컴포넌트 위치 변경](https://github.com/Dongjin113/Some-Where-FE/commit/c3f72357c6739789998240302a3a156afc91116c)
-  src/components/Map => src/components/MainPageMap 으로 디렉토리 명칭 변경

## [♻️ MainPage 지역명 변경](https://github.com/Dongjin113/Some-Where-FE/commit/9198748bf9a75c42109072efc4e6fa0553f1f5a8)
- MainPage 지역태그 명칭 변경


## [✨ DetailMap Api 추가](https://github.com/Dongjin113/Some-Where-FE/commit/2574817d40ec653ade511691543c10d0220eb376)
- ### requestCampingLocation 
  #### request : 북서, 남동쪽의 위도 경도를 QueryString으로 요청을 보냄 
  #### response : 지역별 캠핑장수와 대표 위도 경도 위치를 받아온다

- ### requestPreviewCamping 
  #### request: 지역 이름을 queryParameter로 보냄
  #### 지역별 캠핑장 정보를 받아온다

- ### requestCampingRegionCounts  
  #### response : 지역별 캠핑장수와 대표 위도 경도 위치를 받아온다

## [✨ campingDetailMap Router 추가](https://github.com/Dongjin113/Some-Where-FE/commit/880d7658f8631706770df677f8dc53f1bb78f968)
- campingDetailMap router 추가


## [♻️ campingPreview 응답값 변경, 지역별 캠핑장 수 응답값 정의](https://github.com/Dongjin113/Some-Where-FE/commit/2b169d954320c24cb727e0b2329a082dade3ad5f)
- campingPreview에 categories[] 응답값 추가
- 지역별 캠핑장수와 대표 위도 경도 응답으로 받아옴

# 캠핑장 정보 보기 사이드 바
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/b62bbdb5-254a-4bfa-9a0a-e229d3e55b62)

## [✨ 캠핑장 정보 사이드바 제공](https://github.com/Dongjin113/Some-Where-FE/commit/c8205ddb0567fd26f4d2afbf44244c893a763b15)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/3f27f0af-8058-4306-b694-25873152c090)
- 지도에 표시되는 캠핑장에 대한 간단한 소개가 나타난다

## [✨ 캠핑장 사이드바 정보 열기 닫기 버튼](https://github.com/Dongjin113/Some-Where-FE/commit/75072541f023edc5ba1250ee087ef8f1166b47ed)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/d8d72c8b-9c94-4f6d-8046-295d718db6ff)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/e0a7e990-60d2-4304-89ef-ae75a4a8e2e8)
- 버튼을 통해 사이드바를 숨기고 열 수 있도록 구현

## [✨ 지도 위에 캠핑장 정보 표시하기](https://github.com/Dongjin113/Some-Where-FE/commit/a87c1ed87437fdcc77fdc06bd7eea9ecfd6550dd)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/b1491f13-9847-4bee-a2f5-2e0a21da53bd)

- ### 처음 아무런 요청이 없다면 서울의 캠핑장 정보가 지도에 표시
- ### 지도 위치가 변할 시 북서쪽과 남동쪽의 위도경도 정보를 보내 지도의 위치가 변경될 때마다 해당하는 캠핑장 정보를 받아오도록 구현 

## [✨ 지도의 마커 클릭시 나타는 캠핑장 Overlay](https://github.com/Dongjin113/Some-Where-FE/commit/9d25ad3752fca804b12c6001bbf89abadfb03cdb)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/008054c7-0707-465d-bb72-7644e9f16c20)
- 마커를 클릭시 캠핑장 정보에 대한 간단한 내용을 볼 수 있다

## [✨ 지도 확대 레벨이 높을시 지역별로 보여주는 캠핑장 정보](https://github.com/Dongjin113/Some-Where-FE/commit/af73d2c5bf6df8512a17f42048ad58201bfec47a)
![image](https://github.com/Dongjin113/Some-Where-FE/assets/104759062/31315668-cf0f-41c0-bab1-30d6ace2a720)
- 지도를 축소하면 지역별 캠핑장 수를 볼 수 있도록 구현

## [✨ 전역으로 관리하는 캠핑장 정보와 캠핑장 상세보기 상태관리](https://github.com/Dongjin113/Some-Where-FE/commit/a4568d3b4c4fe11d6bc6e4ae142c550f0f4ad68c)


## [✨ 지도의 위치가 변환될 때 요청을 지연시킬 customHook](https://github.com/Dongjin113/Some-Where-FE/commit/0d49e1e415da41ceb1ab3ba87238353b5e438282)
  지도위치가 변할때마다 요청을 발생시키면 너무 많은 요청이 발생하므로 customHook을 통해 0.5초 내에 추가요청이 없으면 요청이 발생하도록 구현


# 전체시연 영상

https://github.com/Dongjin113/Some-Where-FE/assets/104759062/44740875-eacb-46ab-bee0-ac6150a2851d



