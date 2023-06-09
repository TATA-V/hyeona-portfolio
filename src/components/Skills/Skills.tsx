import styled from "styled-components";
import starBar from "../../assets/png-file/star-bar.png";
import languages from "../../assets/png-file/languages.png";
import frameLibraries from "../../assets/png-file/frame-libraries.png";
import others from "../../assets/png-file/others.png";

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

    .js {
      padding: 9px 49.5px 0 30px;
    }
    .ts {
      padding: 9px 47.5px 0 17px;
    }
    .html {
      padding: 9px 64.5px 0 34px;
    }
    .css {
      padding: 9px 72.5px 0 43px;
    }
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

      .js {
        padding: 7px 0 0 19px;
        font-size: 15px;
      }
      .ts {
        padding: 7px 0 0 47px;
        font-size: 15px;
      }
      .html {
        padding: 7px 0 0 60px;
        font-size: 15px;
      }
      .css {
        padding: 7px 0 0 77px;
        font-size: 15px;
      }
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

      .js {
        padding: 4px 0 0 11px;
        font-size: 2px;
      }
      .ts {
        padding: 4px 0 0 26px;
        font-size: 2px;
      }
      .html {
        padding: 4px 0 0 35px;
        font-size: 2px;
      }
      .css {
        padding: 4px 0 0 47px;
        font-size: 2px;
      }
    }
  }
`;

const FrameAndLibraries = styled.div`
  width: 427px;
  height: 221px;

  transform: translate(545px, -77px);

  .lilac-line {
    width: 217px;
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
    background: no-repeat url(${frameLibraries});
    background-size: 426.09px 176px;
  }

  .react-redux-styled {
    display: flex;

    .react {
      padding: 9px 0 0 65px;
    }
    .redux {
      padding: 9px 0 0 52px;
    }
    .styled {
      font-size: 15px;
      text-align: center;
      padding: 9px 30 0 29px;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    transform: translate(272px, -80px);
    margin-bottom: 35px;
    width: 329px;

    .lilac-line {
      width: 170px;
    }

    .react-redux-styled {
      width: 329.64px;
      height: 136px;
      background: no-repeat url(${frameLibraries});
      background-size: cover;
      display: flex;

      .react {
        padding: 8px 0 0 47px;
        font-size: 15px;
      }
      .redux {
        padding: 8px 0 0 71px;
        font-size: 15px;
      }
      .styled {
        padding: 8px 0 0 25px;
        font-size: 14px;
      }
    }
  }

  @media all and (max-width: 767px) {
    transform: translate(0, -75px);
    width: 325px;
    height: 221px;

    .lilac-line {
      width: 150px;
    }

    .react-redux-styled {
      transform: translate(118px, 0);
      width: 206px;
      height: 85px;
      background: no-repeat url(${frameLibraries});
      background-size: cover;
      display: flex;

      .react {
        padding: 4px 0 0 30px;
        font-size: 2px;
      }
      .redux {
        padding: 4px 0 0 42px;
        font-size: 2px;
      }
      .styled {
        padding: 4px 0 0 13px;
        font-size: 2px;
      }
    }
  }
`;

const Others = styled.div`
  width: 581.5px;
  height: 225px;

  transform: translate(0, -155px);

  .lilac-line {
    width: 63px;
    height: 2px;
    background-color: #f6f1f8;
    margin: 5px 0 13px 0;
  }

  .git-s3-postman-figma {
    width: 579.5px;
    height: 180px;
    background: no-repeat url(${others});
    background-size: cover;
    display: flex;

    .git {
      padding: 9px 74.5px 0 56px;
    }
    .s3 {
      padding: 9px 54.5px 0 24px;
    }
    .postman {
      padding: 9px 53.5px 0 23px;
    }
    .figma {
      padding: 9px 63.5px 0 34px;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;

    .lilac-line {
      width: 52px;
    }

    .git-s3-postman-figma {
      width: 440px;
      height: 136px;
      background: no-repeat url(${others});
      background-size: cover;
      display: flex;

      .git {
        padding: 8px 0 0 42px;
        font-size: 15px;
      }
      .s3 {
        padding: 8px 0 0 72px;
        font-size: 15px;
      }
      .postman {
        padding: 8px 0 0 54px;
        font-size: 15px;
      }
      .figma {
        padding: 8px 0 0 62px;
        font-size: 15px;
      }
    }
  }

  @media all and (max-width: 767px) {
    .lilac-line {
      width: 46px;
    }

    .git-s3-postman-figma {
      width: 275px;
      height: 85px;
      background: no-repeat url(${others});
      background-size: cover;
      display: flex;

      .git {
        padding: 4px 0 0 27px;
        font-size: 2px;
      }
      .s3 {
        padding: 4px 0 0 43px;
        font-size: 2px;
      }
      .postman {
        padding: 4px 0 0 31px;
        font-size: 2px;
      }
      .figma {
        padding: 4px 0 0 37px;
        font-size: 2px;
      }
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
          <div className="js-ts-html-css">
            <p className="js">Javascript</p>
            <p className="ts">Typescript</p>
            <p className="html">HTML</p>
            <p className="css">CSS</p>
          </div>
        </Languages>

        <FrameAndLibraries>
          <p className="skills-bold frame">Frameworks & Libraries</p>
          <div className="lilac-line"></div>
          <div className="react-redux-styled">
            <p className="react">React</p>
            <p className="redux">Redux</p>
            <p className="styled">Styled- Components</p>
          </div>
        </FrameAndLibraries>

        <Others>
          <p className="skills-bold">Others</p>
          <div className="lilac-line"></div>
          <div className="git-s3-postman-figma">
            <p className="git">Git</p>
            <p className="s3">AWS(S3)</p>
            <p className="postman">Postman</p>
            <p className="figma">Figma</p>
          </div>
        </Others>
      </RealSkillsBlock>
    </SkillsBlock>
  );
};

export default Skills;
