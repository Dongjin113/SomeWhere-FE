import React from "react";

function DetailOverlay({ camp, handleIsOpen }) {
  return (
    <div className="wrap">
      <div className="info">
        <div className="title">
          {camp.placeName}
          <div
            className="close"
            onClick={() => handleIsOpen(camp.campingId)}
            title="닫기"
          ></div>
        </div>
        <div className="body">
          <div className="img">
            <img
              src={"/images/camping-image.jpg"}
              width="73"
              height="70"
              alt={camp.placeName}
            />
          </div>
          <div className="desc">
            <div className="ellipsis">{camp.address.roadAddress}</div>
            <div className="jibun ellipsis">
              (우) {camp.address.postNum} (지번) {camp.address.address}
            </div>
            <div>
              {camp.homePage === "정보없음" ? (
                <div>홈페이지</div>
              ) : (
                <a
                  href={camp.homePage}
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  홈페이지
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOverlay;
