import styled from 'styled-components';
import check from '../../../assets/png-file/check.png';

const ArchivingBoxBlock = styled.div<Ititle>`
  width: 417px;
  height: 288px;

  border: 2px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(#f9f9f9, #f9f9f9), linear-gradient(315deg, #a1b0d0, #886586);
  background-origin: border-box;
  background-clip: content-box, border-box;

  .archiving-wrapper {
    padding: 33px;
  }

  .archiving-box {
    display: flex;
    align-items: center;

    .archiving-img {
      width: 42px;
      height: 41px;
    }

    .archiving-box-txt {
      color: #7e577c;
      font-size: 40px;
      font-weight: 700;
      padding-left: 7px;
    }
  }

  .archiving-link-box {
    padding: 20px 0 21px 0;

    .archiving-link {
      color: #4b69ac;
      text-shadow: 0 0 0 #4b69ac;
      text-decoration: none;
    }
  }

  .archiving-des {
    color: #2a2b35;
    font-size: 16px;
    text-shadow: 0 0 0 #2a2b35;
    padding-bottom: 23px;

    .bold {
      font-weight: 700;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 330px;
    margin-bottom: 20px;
    height: 304px;

    .archiving-box {
      .archiving-img {
        width: 35px;
        height: 34px;
      }

      .archiving-box-txt {
        font-size: 35px;
      }
    }

    .archiving-link-box {
      padding: 10px 0 13px 0;

      .archiving-link {
        font-size: 15.5px;
      }
    }
  }

  @media all and (max-width: 767px) {
    width: 330px;
    margin-bottom: 20px;
    height: ${({ title }) => (title === 'GitHub' ? `283px` : `300px`)};

    .archiving-link-box {
      padding: 0 0 15px 0;

      .archiving-link {
        font-size: 15.5px;
      }
    }
  }
`;

const ArchivingThree = styled.ul<Ititle>`
  height: 82px;
  color: #2a2b35;
  font-size: 14px;
  text-shadow: 0 0 0 #2a2b35;

  .check {
    width: 13px;
    height: 12.91px;
    margin-right: 11px;
  }

  .first-box,
  .second-box,
  .third-box {
    display: flex;
    height: 17px;
  }

  .second-box,
  .third-box {
    margin-top: 15px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    .first-box,
    .second-box,
    .third-box {
      display: flex;
      line-height: 20px;
    }

    .second-box,
    .third-box {
      height: ${({ title }) => (title === 'GitHub' ? `37px` : `37px`)};
    }

    .first-txt,
    .second-txt,
    .third-txt {
      display: flex;
      transform: translateY(-1.5px);
    }
  }

  @media all and (max-width: 767px) {
    .first-box,
    .second-box,
    .third-box {
      display: flex;
      line-height: 20px;
    }

    .first-txt,
    .second-txt,
    .third-txt {
      display: flex;
      transform: translateY(-1.5px);
    }
  }
`;

interface Ititle {
  title: string;
}

interface IArchivingBoxProps {
  img: any;
  title: string;
  link: string;
  linkTxt: string;
  des: string;
  firstTxt: string;
  secondTxt: string;
  thirdTxt: string;
}

const ArchivingBox = ({
  img,
  title,
  link,
  linkTxt,
  des,
  firstTxt,
  secondTxt,
  thirdTxt,
}: IArchivingBoxProps) => {
  return (
    <ArchivingBoxBlock title={title}>
      <div className="archiving-wrapper">
        <div className="archiving-box">
          <img className="archiving-img" src={img} alt="github" />
          <p className="archiving-box-txt">{title}</p>
        </div>

        <div className="archiving-link-box">
          <a className="archiving-link" rel="noreferrer" href={link} target="_blank">
            {linkTxt}
          </a>
        </div>

        <p className="archiving-des">
          <span className="bold">{des}</span>입니다.
        </p>

        <ArchivingThree title={title}>
          <li className="first-box">
            <img className="check" src={check} alt="check" />
            <p className="first-txt">{firstTxt}</p>
          </li>

          <li className="second-box">
            <img className="check" src={check} alt="check" />
            <p className="second-txt">{secondTxt}</p>
          </li>

          <li className="third-box">
            <img className="check" src={check} alt="check" />
            <p className="third-txt">{thirdTxt}</p>
          </li>
        </ArchivingThree>
      </div>
    </ArchivingBoxBlock>
  );
};

export default ArchivingBox;
