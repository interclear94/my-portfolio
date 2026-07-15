import React, { useRef } from "react";

function ScrollComponent() {
  // 1. 이동할 DOM 요소를 가리킬 Ref 생성
  const sectionRef = useRef(null);

  // 2. 클릭 시 실행될 스크롤 함수
  const handleScroll = () => {
    if (sectionRef.current) {
      // scrollIntoView를 사용해 해당 요소 위치로 이동
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* 3. 버튼 클릭 시 handleScroll 실행 */}
      <button onClick={handleScroll}>섹션으로 이동</button>

      {/* 스크롤이 발생하도록 여백 추가 */}
      <div style={{ height: "1500px", backgroundColor: "#f0f2f5" }}>
        스크롤을 내려보세요.
      </div>

      {/* 4. 이동할 타겟 요소에 ref 전달 */}
      <div
        ref={sectionRef}
        style={{ height: "500px", backgroundColor: "#add8e6" }}
      >
        이동한 섹션 영역입니다.
      </div>
    </div>
  );
}

export default ScrollComponent;
