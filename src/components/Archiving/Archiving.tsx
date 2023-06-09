import styled from "styled-components";
import starBar from "../../assets/png-file/star-bar2.png";
import github from "../../assets/svg-file/github.svg";
import velog from "../../assets/png-file/velog.png";
import zigzag from "../../assets/png-file/zigzag.png";

import ArchivingBox from "./ArchivingMaterial/ArchivingBox";

const ArchivingBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, transparent, #b4b9c6, #797e8a, #464b58, #292e3a);
`;

const RealArchivingBlock = styled.div`
  width: 974px;
  height: 570px;
  padding: 84px 0 98.5px 0;
  border-bottom: 2px solid #343843;

  .archiving {
    padding: 0 0 43px 0;

    .archiving-txt {
      width: 255px;
      height: 61px;
      color: #000;
      font-size: 50px;
      font-weight: 700;
    }

    .star-bar {
      width: 25px;
      padding: 0 0 20px 4px;
      filter: drop-shadow(0 0 0.1px #ce6a98);
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 330px;
    height: 900px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .archiving {
      .archiving-txt {
        font-size: 40px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    height: 900px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .archiving {
      .archiving-txt {
        font-size: 35px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }
`;

const ArchivingAndVelog = styled.div`
  display: flex;

  .zigzag-box {
    padding: 0 65.67px 0 67px;
  }

  .zigzag {
    width: 7.3px;
    height: 288.47px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;

    .zigzag-box {
      padding: 0 7px 0 7px;
    }

    .zigzag {
      display: none;
    }
  }

  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;

    .zigzag-box {
      padding: 0 65.67px 0 67px;
    }

    .zigzag {
      display: none;
    }
  }
`;

const Archiving = () => {
  return (
    <ArchivingBlock>
      <RealArchivingBlock>
        <div className="archiving">
          <span className="archiving-txt">ARCHIVING</span>
          <img className="star-bar" src={starBar} alt="star" />
        </div>

        <ArchivingAndVelog>
          {/* 깃헙 => ArchivingBox 컴포넌트 */}
          <ArchivingBox
            img={github}
            title="GitHub"
            link="https://github.com/TATA-V"
            linkTxt="github.com/TATA-V"
            des="소스 코드 저장 공간"
            firstTxt="팀, 개인 프로젝트 소스 코드"
            secondTxt="코딩 과제를 하기 위해 작성했던 소스 코드"
            thirdTxt="코딩 연습을 위해 혼자 작성했던 소스 코드"
          />

          {/* 지그재그 막대기 */}
          <div className="zigzag-box">
            <img className="zigzag" src={zigzag} alt="zigzag" />
          </div>

          {/* 벨로그 => ArchivingBox 컴포넌트 */}
          <ArchivingBox
            img={velog}
            title="Velog"
            link="https://velog.io/@tata-v_vlelog"
            linkTxt="velog.io/@tata-v"
            des="복습 및 공유를 위한 블로그"
            firstTxt="공부했던 내용들을 복습하기 위해 기록"
            secondTxt="프로젝트를 하며 궁금했던 내용들을 공부하며 정리"
            thirdTxt="프론트엔드 수업에서 배웠던 웹 관련 지식들을 정리"
          />
        </ArchivingAndVelog>
      </RealArchivingBlock>
    </ArchivingBlock>
  );
};

export default Archiving;
