import styled, { keyframes } from 'styled-components';
import starBar from '../../assets/png-file/star-bar.png';
import languages from '../../assets/png-file/languages.png';
import frameLibraries from '../../assets/png-file/frame-libraries.png';
import others from '../../assets/png-file/others.png';
import { useState, useRef, useEffect } from 'react';

const languagesFrameIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

const othersFrameIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(700px, -77px);
  }

  100%{
    opacity: 1;
    transform: translate(545px, -77px);
  }
`;
const othersFrameIn1023 = keyframes`
  0% {
    opacity: 0;
    transform: translate(545px, -77px);
  }

  100%{
    opacity: 1;
    transform: translate(272px, -80px);
  }
`;
const othersFrameIn767 = keyframes`
  0% {
    opacity: 0;
    transform: translate(272px, -77px);
  }

  100%{
    opacity: 1;
    transform: translate(0, -80px);
  }
`;

const librariesFrameIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-40%, -155px);
  }

  100%{
    opacity: 1;
    transform: translate(0, -155px);
  }
`;

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

  &.frame-in {
    animation: ${languagesFrameIn} 1s forwards;
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

  &.frame-in {
    opacity: 0;
    animation: ${othersFrameIn} 1.2s forwards;
    animation-delay: 0.1s;
  }

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

    &.frame-in {
      opacity: 0;
      animation: ${othersFrameIn1023} 1.2s forwards;
      animation-delay: 0.1s;
    }

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
    transform: translate(0, -80px);
    width: 325px;
    height: 221px;

    &.frame-in {
      opacity: 0;
      animation: ${othersFrameIn767} 1.2s forwards;
      animation-delay: 0.1s;
    }

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

  &.frame-in {
    opacity: 0;
    animation: ${librariesFrameIn} 1s forwards;
    animation-delay: 0.1s;
  }

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
  const [skillsView, setSkillsView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsRef.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setSkillsView(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setSkillsView(false);
        }
      });
    };
    const options = { root: null, rootMargin: '0px', threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(skillsRef.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return (
    <SkillsBlock>
      <RealSkillsBlock>
        <div className="skills">
          <span className="skills-txt">SKILLS</span>
          <img className="star-bar" src={starBar} alt="star" />
        </div>

        <div ref={skillsRef}>
          <Languages className={skillsView ? 'frame-in' : ''}>
            <p className="skills-bold">Programming Languages</p>
            <div className="lilac-line"></div>
            <div className="js-ts-html-css"></div>
          </Languages>

          <Others className={skillsView ? 'frame-in' : ''}>
            <p className="skills-bold frame">Others</p>
            <div className="lilac-line"></div>
            <div className="react-redux-styled"></div>
          </Others>

          <FrameAndLibraries className={skillsView ? 'frame-in' : ''}>
            <p className="skills-bold">Frameworks & Libraries</p>
            <div className="lilac-line"></div>
            <div className="git-s3-postman-figma"></div>
          </FrameAndLibraries>
        </div>
      </RealSkillsBlock>
    </SkillsBlock>
  );
};

export default Skills;
