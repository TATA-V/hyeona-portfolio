import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import xBtn from '../../assets/png-file/x-btn.png';
import star from '../../assets/svg-file/star.svg';
import { IViewDetail } from '../Projects/data';

import RoleTable from './ViewDetailMaterial/RoleTable';

const ViewDetailModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  white-space: pre-line;
`;

const RealViewDetailModalBlock = styled.div`
  display: flex;
  position: relative;
  padding-left: 2.2px;

  .x-img {
    width: 70px;
    height: 82.25px;
    position: absolute;
    left: 97.8%;
    top: 8.4%;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .x-img {
      width: 65px;
      height: 77px;
      position: absolute;
      left: 96.7%;
      top: 6.4%;
    }
  }

  @media all and (max-width: 767px) {
    .x-img {
      width: 48px;
      height: 57px;
      position: absolute;
      left: 95.5%;
      top: 6.8%;
    }
  }
`;

const DetailModal = styled.div<Iid>`
  width: 991px;

  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px 0 0 41px;

  .title {
    color: #000;
    font-size: 28px;
    font-weight: 700;
    padding-bottom: ${({ num }) => (num === 2 ? '29px' : '22px')};
  }

  .lilac-line {
    width: 936px;
    height: 1px;
    background-color: #edecee;
  }

  .star {
    width: 24px;
    height: 22px;
    margin-right: 10px;
  }

  .sub-title {
    color: #2a2b35;
    font-size: 28px;
    font-weight: 700;
  }

  .content {
    color: #2a2b35;
    font-size: 15px;
    line-height: 22px;
    text-shadow: 0 0 0 #2a2b35;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
    padding: 30px 0 0 31px;

    .title {
      color: #000;
      font-size: ${({ num }) => (num === 1 ? '25px' : '32px')};
      padding-right: 41px;
      line-height: 30px;
      font-weight: 700;
      padding-bottom: 20px;
    }
  }

  @media all and (max-width: 767px) {
    width: 330px;
    padding: 20px 0 0 21px;

    .title {
      color: #000;
      font-size: ${({ num }) => (num === 1 ? '20px' : '28px')};
      padding-right: 41px;
      line-height: 30px;
      font-weight: 700;
      padding-bottom: ${({ num }) => (num === 1 ? '13.5px' : '15px')};
    }
  }
`;

const MeaningSummaryBackgroung = styled.div`
  overflow: auto;
  max-height: 72vh;
  padding-bottom: 40px;

  // 스크롤바 커스텀
  &::-webkit-scrollbar {
    width: 8.5px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #ccc;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    bottom: 10px;
  }
`;

const Meaning = styled.div`
  .meaning {
    padding-top: 29px;
    display: flex;
    align-items: center;
  }

  .meaning-content {
    padding-top: 35px;
  }

  .link {
    color: #82a0e8;
    text-shadow: 0 0 0 #82a0e8;
    text-decoration: underline;
  }

  .link-stacks {
    padding: 30px 0 39px 0;
  }
`;

const Summary = styled.div`
  .summary {
    display: flex;
    align-items: center;
    padding-bottom: 35px;
  }

  .summary-content {
    padding-bottom: 25px;
  }

  .features-txt {
    font-weight: 700;
    padding-bottom: 14px;
  }

  .purple-txt {
    color: #97859d;
    text-shadow: 0 0 0 #97859d;
  }
`;

const Background = styled.div`
  .background {
    padding: 34px 0 25px 0;
    display: flex;
    align-items: center;
  }
`;

interface Iid {
  num: number;
}

interface IViewDetailProps {
  id: number;
  openViewDetail: boolean;
  setOpenViewDetail: React.Dispatch<React.SetStateAction<boolean>>;
  viewDetail: IViewDetail;
}

const ViewDetailModal = ({
  id,
  openViewDetail,
  setOpenViewDetail,
  viewDetail,
}: IViewDetailProps) => {
  const viewDetailRef = useRef<HTMLDivElement>(null);

  const {
    title,
    meaningContent,
    deploLink,
    deploTxt,
    storyLink,
    storyTxt,
    githubLink,
    githubTxt,
    stacks,
    summarygContent,
    featuresContent,
    backgroundContent,
    myRole,
  } = viewDetail;

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (
        openViewDetail &&
        viewDetailRef.current &&
        !viewDetailRef.current.contains(e.target as Node)
      ) {
        setOpenViewDetail(false);
      }
    };
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [openViewDetail, setOpenViewDetail]);

  // 창 닫기
  const closeViewDetailModal = () => {
    setOpenViewDetail(false);
  };

  return (
    <ViewDetailModalBlock>
      <RealViewDetailModalBlock ref={viewDetailRef}>
        <DetailModal num={id}>
          <div className="title-box">
            <h3 className="title">{title}</h3>
            <div className="lilac-line"></div>
          </div>
          <MeaningSummaryBackgroung>
            {/* Meaning */}
            <Meaning>
              <div className="meaning">
                <img className="star" src={star} alt="star" />
                <span className="sub-title">Meaning</span>
              </div>
              <p className="meaning-content content">{meaningContent}</p>
              <p className="link-stacks content">
                ⦁ 배포 링크:{' '}
                <a className="link" rel="noreferrer" href={deploLink} target="_blank">
                  {deploTxt}
                </a>
                {storyLink && storyTxt && (
                  <>
                    <br />⦁ Storybook 링크:{' '}
                    <a className="link" rel="noreferrer" href={storyLink} target="_blank">
                      {storyTxt}
                    </a>
                  </>
                )}
                <br />⦁ GitHub 링크:{' '}
                <a className="link" rel="noreferrer" href={githubLink} target="_blank">
                  {githubTxt}
                </a>
                <br />⦁ 기술 스택: {stacks}
              </p>
            </Meaning>

            {/* Summary */}
            <Summary>
              <div className="summary">
                <img className="star" src={star} alt="star" />
                <span className="sub-title">Summary</span>
              </div>
              <p className="summary-content content">{summarygContent}</p>

              {/* 표 => RoleTable 컴포넌트 */}
              {myRole && <RoleTable myRole={myRole} />}

              <div className="features-txt content">
                <span className="purple-txt">★</span> 주요 기능
              </div>
              <p className="features content">{featuresContent}</p>
            </Summary>

            {/* Background */}
            {backgroundContent && (
              <Background>
                <div className="background">
                  <img className="star" src={star} alt="star" />
                  <span className="sub-title">Background</span>
                </div>
                <p className="background-des content">{backgroundContent}</p>
              </Background>
            )}
          </MeaningSummaryBackgroung>
        </DetailModal>

        {/* 모달 닫는 버튼 */}
        <button className="x-btn" onClick={closeViewDetailModal}>
          <img className="x-img" src={xBtn} alt="close" />
        </button>
      </RealViewDetailModalBlock>
    </ViewDetailModalBlock>
  );
};

export default ViewDetailModal;
