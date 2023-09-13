import styled from 'styled-components';
import gifBg from '../../assets/gif-file/gifBg.gif';

import MoreBtn from './MainMaterial/MoreBtn';

const MainBlock = styled.div<mainScrollTop>`
  width: 100%;
  height: ${({ mainScrollTop }) => (mainScrollTop ? `${mainScrollTop}px` : '796px')};
  background-color: #000;

  display: flex;
  justify-content: center;

  @media all and (min-width: 480px) and (max-width: 767px) {
    justify-content: none;
    margin: 0 auto;
  }

  @media all and (max-width: 479px) {
    justify-content: none;
    margin: 0 auto;
  }
`;

const RealMainBlock = styled.div<mainScrollTop>`
  width: 1440px;
  height: ${({ mainScrollTop }) => (mainScrollTop ? `${mainScrollTop}px` : '796px')};
  display: flex;
  justify-content: center;

  background: no-repeat url(${gifBg}); // 움직이는 gif로 바꿔야 함
  background-size: ${({ mainScrollTop }) => (mainScrollTop ? 'cover' : '1440px 804px')};
  background-position: 50% 10%;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    width: 60px;
    height: ${({ mainScrollTop }) => (mainScrollTop ? `${mainScrollTop}px` : '796px')};
    position: absolute;
    right: 0%;
    background: linear-gradient(to left, #000, transparent);
  }

  &::after {
    content: '';
    width: 60px;
    height: ${({ mainScrollTop }) => (mainScrollTop ? `${mainScrollTop}px` : '796px')};
    position: absolute;
    left: 0%;
    background: linear-gradient(to left, transparent, #000);
  }
`;

const TopTextBtnBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 67.5px;

  .top-text-btn {
    width: 974px;
    height: 413px;
    display: flex;
    flex-direction: column;
    font-size: 85px;
    font-weight: 700;
    z-index: 1;
  }

  .top-txt {
    line-height: 108%;
  }

  .hi {
    color: transparent;
    background: linear-gradient(to right, #ddc1e0, #99a1cc);
    background-clip: text;
    -webkit-background-clip: text;
  }

  .im {
    color: #f9f9f9;
  }

  .des {
    font-size: 14px;
    font-weight: 400;
    color: #f9f9f9;
    padding: 18px 0 45px 3px;
  }

  .front {
    color: transparent;
    background: linear-gradient(to right, #ddc1e0, #b998c5, #9094c3, #bcd6f1);
    background-clip: text;
    -webkit-background-clip: text;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .top-text-btn {
      align-items: center;
    }
    .top-txt {
      line-height: 90%;
    }

    .des {
      transform: translateX(-135px);
    }

    .hi,
    .im,
    .front {
      font-size: 73px;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    .top-text-btn {
      align-items: center;
    }
    .top-txt {
      line-height: 45%;
    }

    .des {
      transform: translateX(-21px);
    }

    .hi,
    .im,
    .front {
      font-size: 45px;
    }
  }

  @media all and (max-width: 479px) {
    .top-text-btn {
      align-items: center;
    }
    .top-txt {
      line-height: 36%;
    }

    .des {
      transform: translateX(-23.5px);
      font-size: 12px;
    }

    .hi,
    .im,
    .front {
      font-size: 40px;
    }
  }
`;

interface mainScrollTop {
  mainScrollTop: number;
}

const Main = () => {
  const mainScrollTop = window.innerHeight;

  return (
    <MainBlock mainScrollTop={mainScrollTop} className="main">
      <RealMainBlock mainScrollTop={mainScrollTop} className="main-bg">
        <TopTextBtnBox>
          <div className="top-text-btn">
            <p className="top-txt">
              <span className="hi">Hi!</span>
              <br />
              <span className="im">I’m Choi Hyeona</span>
              <br />
              <span className="front">Frontend Developer</span>
              <br />
            </p>
            <span className="des">그림 그리는 것을 좋아하는 프론트엔드 개발자 최현아입니다.</span>
            <MoreBtn />
          </div>
        </TopTextBtnBox>
      </RealMainBlock>
    </MainBlock>
  );
};

export default Main;
