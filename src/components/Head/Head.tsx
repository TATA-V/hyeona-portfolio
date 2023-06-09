import styled from "styled-components";

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

const Head = () => {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HeadBlock>
      <RealHead>
        <button onClick={handleLogoClick} className="logo">
          HYEONA'S PORTFOLIO
        </button>

        {/* 오른쪽 버튼들 => RightButton 컴포넌트 */}
        <div className="right-btn-box">
          {buttonTxt.map((el) => (
            <RightButton key={el.id} text={el.text} />
          ))}
        </div>
      </RealHead>
    </HeadBlock>
  );
};

export default Head;
