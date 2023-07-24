import styled from 'styled-components';
import starBar from '../../assets/png-file/star-bar.png';
import languages from '../../assets/png-file/languages.png';
import frameLibraries from '../../assets/png-file/frame-libraries.png';
import others from '../../assets/png-file/others.png';

const SkillsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RealSkillsBlock = styled.div`
  width: 974px;
  height: 782px;
  padding: 84px 0 84px 0;
  border-bottom: 2px solid #edecee;

  .skills {
    padding-bottom: 48px;
  }

  .skills-txt {
    width: 255px;
    height: 61px;
    color: #000;
    font-size: 50px;
    font-weight: 700;
  }

  .star-bar {
    width: 25px;
    padding: 0 0 20px 4px;
    filter: drop-shadow(0 0 0.1px #dbc0e0);
  }

  .skills-bold {
    color: #262626;
    font-size: 22px;
    font-weight: 700;
  }

  p {
    color: #f9f9f9;
    font-size: 18px;
    font-weight: 700;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;

    .skills-bold {
      font-size: 17px;
    }

    .skills {
      padding-bottom: 30px;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 330px;
    height: 700px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .skills {
      .skills-txt {
        font-size: 40px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    height: 700px;
    font-size: 35px;

    .skills-bold {
      font-size: 15px;
    }

    .skills {
      .skills-txt {
        font-size: 35px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }
`;

const Languages = styled.div`
  width: 581.5px;
  height: 225px;

  .lilac-line {
    width: 229px;
    height: 2px;
    background-color: #f6f1f8;
    margin: 5px 0 13px 0;
  }

  .js-ts-html-css {
    width: 579.5px;
    height: 180px;
    background: no-repeat url(${languages});
    background-size: 579.5px 180px;
    display: flex;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    margin-bottom: 35px;

    .lilac-line {
      width: 177px;
    }

    .js-ts-html-css {
      width: 440px;
      height: 136px;
      background: no-repeat url(${languages});
      background-size: cover;
      display: flex;
    }
  }

  @media all and (max-width: 767px) {
    .lilac-line {
      width: 158px;
    }

    .js-ts-html-css {
      width: 275px;
      height: 85px;
      background: no-repeat url(${languages});
      background-size: cover;
      display: flex;
    }
  }
`;

const Others = styled.div`
  width: 427px;
  height: 221px;

  transform: translate(545px, -77px);

  .lilac-line {
    width: 64px;
    height: 2px;
    background-color: #f6f1f8;
    margin: 5px 0 13px auto;
  }

  .frame {
    text-align: end;
  }

  .react-redux-styled {
    width: 426.09px;
    height: 176px;
    background: no-repeat url(${others});
    background-size: 426.09px 176px;
  }

  .react-redux-styled {
    display: flex;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    transform: translate(272px, -80px);
    margin-bottom: 35px;
    width: 329px;

    .lilac-line {
      width: 52px;
    }

    .react-redux-styled {
      width: 329.64px;
      height: 136px;
      background: no-repeat url(${others});
      background-size: cover;
      display: flex;
    }
  }

  @media all and (max-width: 767px) {
    transform: translate(0, -75px);
    width: 325px;
    height: 221px;

    .lilac-line {
      width: 46px;
    }

    .react-redux-styled {
      transform: translate(118px, 0);
      width: 206px;
      height: 85px;
      background: no-repeat url(${others});
      background-size: cover;
      display: flex;
    }
  }
`;

const FrameAndLibraries = styled.div`
  width: 581.5px;
  height: 225px;

  transform: translate(0, -155px);

  .lilac-line {
    width: 221px;
    height: 2px;
    background-color: #f6f1f8;
    margin: 5px 0 13px 0;
  }

  .git-s3-postman-figma {
    width: 579.5px;
    height: 180px;
    background: no-repeat url(${frameLibraries});
    background-size: cover;
    display: flex;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;

    .lilac-line {
      width: 170px;
    }

    .git-s3-postman-figma {
      width: 440px;
      height: 136px;
      background: no-repeat url(${frameLibraries});
      background-size: cover;
      display: flex;
    }
  }

  @media all and (max-width: 767px) {
    .lilac-line {
      width: 152px;
    }

    .git-s3-postman-figma {
      width: 275px;
      height: 85px;
      background: no-repeat url(${frameLibraries});
      background-size: cover;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Skills = () => {
  return (
    <SkillsBlock>
      <RealSkillsBlock>
        <div className="skills">
          <span className="skills-txt">SKILLS</span>
          <img className="star-bar" src={starBar} alt="star" />
        </div>

        <Languages>
          <p className="skills-bold">Programming Languages</p>
          <div className="lilac-line"></div>
          <div className="js-ts-html-css"></div>
        </Languages>

        <Others>
          <p className="skills-bold frame">Others</p>
          <div className="lilac-line"></div>
          <div className="react-redux-styled"></div>
        </Others>

        <FrameAndLibraries>
          <p className="skills-bold">Frameworks & Libraries</p>
          <div className="lilac-line"></div>
          <div className="git-s3-postman-figma"></div>
        </FrameAndLibraries>
      </RealSkillsBlock>
    </SkillsBlock>
  );
};

export default Skills;
