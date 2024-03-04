import styled from 'styled-components';
import { useState } from 'react';
import star from '../../../assets/svg-file/star.svg';

import ViewDetailBtn from './ViewDetailBtn';
import ViewDetailModal from '../../ViewDetailModal/ViewDetailModal';
import { IProjectData } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

interface Ilinecolor {
  linecolor?: string;
}

const ProjectArticleBlock = styled.article<Ilinecolor>`
  display: flex;
  flex-wrap: wrap;
  padding: 84px 0 84px 0;
  border-bottom: ${({ linecolor }) => (linecolor ? `2px solid ${linecolor}` : `2px solid #343843`)};

  .left-box {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 3px);
      box-shadow: inset 0 0 5px 0 rgba(44, 46, 54, 0.65);
    }
  }

  .left-img {
    width: 515px;
    max-height: 654px;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const RightBox = styled.div`
  width: 434px;
  height: auto;
  padding: 5px 0 0 42px;

  .date {
    color: #878bab;
    font-size: 12px;
    font-weight: 700;
  }

  .project-name {
    color: #f9f9f9;
    font-size: 37px;
    font-weight: 700;
    padding-top: 7px;
  }

  .project-team {
    color: #f9f9f9;
    font-size: 17px;
    font-weight: 700;
    padding: 14px 0 19px 0;

    .contri {
      color: #61647a;
      font-size: 12px;
      font-weight: 700;
      padding-left: 7px;
    }
  }

  .project-stacks {
    color: #ededed;
    font-size: 14px;
    line-height: 20px;
  }

  .line-box {
    display: flex;
    padding: 17px 0 33px 0;

    .short-line {
      width: 81px;
      height: 5px;
      background-color: #46495f;
    }

    .long-line {
      width: 335px;
      height: 2px;
      background-color: #4e5062;
    }
  }

  .project-des {
    color: #f9f9f9;
    font-size: 14.5px;
    text-shadow: 0 0 0 #f9f9f9;
    line-height: 21px;
    padding-bottom: 20px;
    white-space: pre-line;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 550px;
    padding: 5px 0 0 0;

    .date {
      padding-top: 18px;
    }

    .line-box {
      .long-line {
        width: 470px;
      }
    }
  }

  @media all and (max-width: 767px) {
    width: 355px;
    padding: 5px 0 0 0;

    .project-des {
      width: 340px;
    }

    .date {
      padding-top: 15px;
    }

    .project-team {
      .contri {
        padding-left: 5px;
      }
    }
  }
`;

const FeaturesAndLink = styled.div`
  padding-top: 23px;

  .star {
    width: 15px;
    height: 14px;
    margin-right: 7px;
    transform: translateY(1px);
  }

  .star-box {
    width: 87px;
    height: 24px;

    display: flex;
    align-items: center;

    .star {
      transform: translateY(-1px);
    }

    span {
      color: #f9f9f9;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .features {
    display: flex;

    .features-des {
      width: 283px;
      height: auto;
      color: #ededed;
      font-size: 14px;
      text-shadow: 0 0 0 #ededed;
      line-height: 21px;
      padding: 0 0 0 36px;
    }
  }

  .link {
    color: #82a0e8;
    font-size: 15px;
    text-shadow: 0 0 0 #82a0e8;
    text-decoration: underline;
  }

  .github {
    padding: 16px 0 16px 0;

    .github-txt {
      color: #f9f9f9;
      font-size: 16px;
      font-weight: 700;
    }

    .github-link {
      padding-left: 54px;
    }
  }

  .deployment {
    padding-bottom: 16px;
  }

  .deplo-txt {
    color: #f9f9f9;
    font-size: 16px;
    font-weight: 700;
  }

  .deplo-link {
    padding-left: 42px;
  }

  .story-txt {
    color: #f9f9f9;
    font-size: 16px;
    font-weight: 700;
  }

  .story-link {
    padding-left: 14px;
  }

  @media all and (max-width: 767px) {
    .features {
      .features-des {
        width: 252px;
        height: auto;
        color: #ededed;
        font-size: 14px;
        text-shadow: 0 0 0 #ededed;
        line-height: 21px;
        padding: 0 0 0 36px;
      }
    }
  }
`;

const ProjectArticle = ({
  id,
  img,
  date,
  title,
  subTitle,
  contribution,
  stacks,
  content,
  features,
  githubLink,
  githubTxt,
  deploLink,
  deploTxt,
  storyLink,
  storyTxt,
  linecolor,
  viewDetail,
}: IProjectData) => {
  const [openViewDetail, setOpenViewDetail] = useState(false);

  return (
    <>
      <ProjectArticleBlock className="project-article" linecolor={linecolor}>
        {/* 왼쪽 사진 */}
        <div className='left-box'>
          <img className="left-img" src={img} alt="project" />
        </div>

        {/* 오른쪽 텍스트 */}
        <RightBox>
          <p className="date">{date}</p>
          <p className="project-name">{title}</p>
          <p className="project-team">
            {subTitle}
            <span className="contri">기여도 {contribution}</span>
          </p>
          <p className="project-stacks">{stacks}</p>
          <div className="line-box">
            <div className="short-line"></div>
            <div className="long-line"></div>
          </div>
          <p className="project-des">{content}</p>
          {/* 버튼 => ViewDetailBtn 컴포넌트 */}
          <ViewDetailBtn openViewDetail={openViewDetail} setOpenViewDetail={setOpenViewDetail} />

          {/* 주요 기능 및 링크들 */}
          <FeaturesAndLink>
            <div className="features">
              <div className="star-box">
                <img className="star" src={star} alt="star" />
                <span>주요 기능</span>
              </div>
              <p className="features-des">{features}</p>
            </div>

            <div className="github">
              <img className="star" src={star} alt="star" />
              <span className="github-txt">GitHub</span>
              <a className="link github-link" rel="noreferrer" href={githubLink} target="_blank">
                {githubTxt}
              </a>
            </div>

            <div className="deployment">
              <img className="star" src={star} alt="star" />
              <span className="deplo-txt">배포 링크</span>
              <a className="link deplo-link" rel="noreferrer" href={deploLink} target="_blank">
                {deploTxt}
              </a>
            </div>

            {storyLink && storyTxt && (
              <div className="storybook">
                <img className="star" src={star} alt="star" />
                <span className="story-txt">스토리북 링크</span>
                <a className="link story-link" rel="noreferrer" href={storyLink} target="_blank">
                  {storyTxt}
                </a>
              </div>
            )}
          </FeaturesAndLink>
        </RightBox>
      </ProjectArticleBlock>
      {openViewDetail && (
        <ViewDetailModal
          id={id}
          viewDetail={viewDetail}
          openViewDetail={openViewDetail}
          setOpenViewDetail={setOpenViewDetail}
        />
      )}
    </>
  );
};

export default ProjectArticle;
