import styled from 'styled-components';
import starBar from '../../assets/png-file/star-bar.png';
import peopleImg from '../../assets/png-file/people.png';
import emailImg from '../../assets/png-file/email.png';
import calenderImg from '../../assets/png-file/calender.png';
import locationImg from '../../assets/png-file/location.png';

const AboutMeBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RealAboutMeBlock = styled.div`
  width: 974px;
  height: 440px;
  padding: 85px 0 84px 0;
  border-bottom: 2px solid #edecee;

  .about-me {
    padding: 0 0 55px 0;

    .about-me-txt {
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
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 355px;

    .about-me {
      .about-me-txt {
        font-size: 40px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;
    font-size: 35px;

    .about-me {
      .about-me-txt {
        font-size: 35px;
      }

      .star-bar {
        width: 20px;
      }
    }
  }
`;

const InforBox = styled.div`
  width: 564px;
  height: 153px;

  display: flex;
  justify-content: space-between;

  .bold {
    color: rgb(38, 39, 49);
    font-size: 20px;
    font-weight: 700;
  }

  .not-bold {
    color: #2a2b35;
    font-size: 16px;
    text-shadow: 0 0 0 #2a2b35;
  }

  .name-email {
    height: 153px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .birthdate-address {
    height: 153px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  // 이름
  .name {
    display: flex;
    width: 113px;
    height: 58px;

    .people-img {
      width: 30px;
      height: 30px;
    }

    .name-txt-box {
      padding: 4px 0 0 33px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  // 이메일
  .email {
    display: flex;
    width: 217px;
    height: 56px;

    .email-img {
      width: 30px;
      height: 24px;
    }

    .email-txt-box {
      padding: 2.2px 0 0 33px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  // 생년월일
  .birthdate {
    display: flex;
    height: 58px;

    .calender-img {
      width: 32px;
      height: 32px;
    }

    .birth-txt-box {
      padding: 4px 0 0 33px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  // 주소지
  .address {
    display: flex;
    height: 56px;

    .location-img {
      width: 26px;
      height: 30px;
    }

    .address-txt-box {
      padding: 2.2px 0 0 39px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 355px;

    .bold {
      font-size: 16px;
    }

    .not-bold {
      font-size: 12px;
    }
  }

  .name-email {
    width: 180px;
  }

  // 이름
  .name {
    height: 50px;
    .people-img {
      width: 28px;
      height: 28px;
    }

    .name-txt-box {
      padding: 7px 0 0 25px;
    }
  }

  // 이메일
  .email {
    height: 48px;
    .email-img {
      width: 28px;
      height: 22px;
    }

    .email-txt-box {
      padding: 4px 0 0 25px;
    }
  }

  // 생년월일
  .birthdate {
    height: 50px;
    display: flex;
    padding-right: 13px;

    .calender-img {
      width: 28px;
      height: 28px;
    }

    .birth-txt-box {
      padding: 7px 0 0 20px;
    }
  }

  // 주소지
  .address {
    height: 48px;
    display: flex;
    padding-right: 2px;

    .location-img {
      width: 24px;
      height: 28px;
    }

    .address-txt-box {
      padding: 4px 0 0 25px;
    }
  }

  @media all and (max-width: 479px) {
    width: 330px;

    .bold {
      font-size: 16px;
    }

    .not-bold {
      font-size: 12px;
    }
  }

  .name-email {
    width: 180px;
  }

  // 이름
  .name {
    height: 50px;
    .people-img {
      width: 28px;
      height: 28px;
    }

    .name-txt-box {
      padding: 7px 0 0 25px;
    }
  }

  // 이메일
  .email {
    height: 48px;
    .email-img {
      width: 28px;
      height: 22px;
    }

    .email-txt-box {
      padding: 4px 0 0 25px;
    }
  }

  // 생년월일
  .birthdate {
    height: 50px;
    display: flex;
    padding-right: 13px;

    .calender-img {
      width: 28px;
      height: 28px;
    }

    .birth-txt-box {
      padding: 7px 0 0 20px;
    }
  }

  // 주소지
  .address {
    height: 48px;
    display: flex;
    justify-content: end;
    padding-right: 2px;

    .location-img {
      width: 24px;
      height: 28px;
    }

    .address-txt-box {
      padding: 4px 0 0 25px;
    }
  }
`;

const AboutMe = () => {
  return (
    <AboutMeBlock>
      <RealAboutMeBlock>
        <div className="about-me">
          <span className="about-me-txt">ABOUT ME</span>
          <img className="star-bar" src={starBar} alt="star" />
        </div>

        <InforBox>
          <div className="name-email">
            {/* 이름 */}
            <div className="name">
              <img className="people-img" src={peopleImg} alt="people" />
              <p className="name-txt-box">
                <span className="bold">Name</span>
                <span className="not-bold">최현아</span>
              </p>
            </div>
            {/* 이메일 */}
            <div className="email">
              <img className="email-img" src={emailImg} alt="email" />
              <p className="email-txt-box">
                <span className="bold">Email</span>
                <span className="not-bold">tatahyeonv@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="birthdate-address">
            {/* 생년월일 */}
            <div className="birthdate">
              <img className="calender-img" src={calenderImg} alt="birthdate" />
              <p className="birth-txt-box">
                <span className="bold">Birthdate</span>
                <span className="not-bold">99.04.15</span>
              </p>
            </div>

            {/* 주소지 */}
            <div className="address">
              <img className="location-img" src={locationImg} alt="address" />
              <p className="address-txt-box">
                <span className="bold">Address</span>
                <span className="not-bold">서울특별시 서초구</span>
              </p>
            </div>
          </div>
        </InforBox>
      </RealAboutMeBlock>
    </AboutMeBlock>
  );
};

export default AboutMe;
