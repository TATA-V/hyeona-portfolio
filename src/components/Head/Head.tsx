import styled from "styled-components";
import { useState, useEffect } from "react";

import RightButton from "./HeadMaterial/RightButton";

const HeadBlock = styled.header`
  width: 100%;
  height: 80px;
  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const RealHead = styled.div`
  width: 1425px;
  padding: 0 51px 0 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: #f9f9f9;
    font-size: 29px;
    font-weight: 700;
    user-select: none;
  }

  @media all and (max-width: 479px) {
    padding: 0 0 0 20px;
    .logo {
      font-size: 25px;
    }

    .right-btn-box {
      padding-left: 99px;
    }
  }
`;

const Cursor = styled.div<ICursor>`
  position: fixed;
  width: ${({ isLogoHovered }) => (isLogoHovered ? "45px" : "20px")};
  height: ${({ isLogoHovered }) => (isLogoHovered ? "45px" : "20px")};
  border-radius: 50%;
  background-color: rgba(246, 219, 244, 0.12);
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.2s ease;
  top: ${({ cursorPosition, isLogoHovered }) => (isLogoHovered ? `${cursorPosition.y - 30}px` : `${cursorPosition.y - 10}px`)};
  left: ${({ cursorPosition, isLogoHovered }) => (isLogoHovered ? `${cursorPosition.x - 30}px` : `${cursorPosition.x - 10}px`)};
  transform: ${({ isLogoHovered }) => (isLogoHovered ? "scale(1.5)" : "none")};
`;

interface IButtonTxt {
  id: number;
  text: string;
}

// 버튼의 텍스트 데이터
const buttonTxt: IButtonTxt[] = [
  {
    id: 1,
    text: "About me",
  },
  {
    id: 2,
    text: "Skills",
  },
  {
    id: 3,
    text: "Archiving",
  },
  {
    id: 4,
    text: "Projects",
  },
];

interface ICursor {
  cursorPosition: { x: number; y: number };
  isLogoHovered: boolean;
}

const Head = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [isLogoHovered, setLogoHovered] = useState(false);
  const [isButtonHovered, setButtonHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 모바일, 태블릿 여부

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ["android", "iphone", "ipad", "ipod", "blackberry", "windows phone"];
    const isMobileDevice = mobileKeywords.some((keyword) => userAgent.includes(keyword));

    setIsMobile(isMobileDevice);
  }, []);

  // 마우스 이동 이벤트 핸들러
  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });

    // 헤더 영역 내에 있는지 확인
    const headerRect = e.currentTarget.getBoundingClientRect();
    const isInsideHeader = clientX >= headerRect.left && clientX <= headerRect.right && clientY >= headerRect.top && clientY <= headerRect.bottom;

    setCursorVisible(isInsideHeader);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  // 로고
  // 마우스 올라갔을 때
  const handleLogoMouseEnter = () => {
    setLogoHovered(true);
  };

  // 마우스 벗어났을 때
  const handleLogoMouseLeave = () => {
    setLogoHovered(false);
  };

  // 오른쪽 버튼
  // 마우스 올라갔을 때
  const handleButtonMouseEnter = () => {
    setButtonHovered(true);
  };

  // 마우스 벗어났을 때
  const handleButtonMouseLeave = () => {
    setButtonHovered(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HeadBlock onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <RealHead>
        {isCursorVisible && !isButtonHovered && !isMobile && <Cursor cursorPosition={cursorPosition} isLogoHovered={isLogoHovered} />}
        <button onClick={handleLogoClick} className="logo" onMouseEnter={handleLogoMouseEnter} onMouseLeave={handleLogoMouseLeave}>
          HYEONA'S PORTFOLIO
        </button>

        {/* 오른쪽 버튼들 => RightButton 컴포넌트 */}
        <div className="right-btn-box" onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave}>
          {buttonTxt.map((el) => (
            <RightButton key={el.id} text={el.text} />
          ))}
        </div>
      </RealHead>
    </HeadBlock>
  );
};

export default Head;
