import styled from 'styled-components';

const RightButtonBlock = styled.button`
  width: auto;
  height: 37px;
  color: #f9f9f9;
  font-size: 19px;
  font-weight: 700;
  border-radius: 3px;
  padding: 7px 15px;
  margin-left: 10px;
  transition: 0.085s;

  &:hover {
    color: #a3b2ff;
    background-color: rgba(255, 255, 255, 0.09);
    transition: 0.085s;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 0px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }

  @media all and (max-width: 479px) {
    display: none;
  }
`;

interface IRightButtonProps {
  text: string;
}

const RightButton = ({ text }: IRightButtonProps) => {
  const mainScrollTop = window.innerHeight;
  const aboutmeTop = 440;
  const skillTop = 890;
  const archivingTop = 570;

  const handleBtnClick = () => {
    if (text === 'About me') {
      window.scrollTo({
        top: mainScrollTop - 71,
        behavior: 'smooth',
      });
    }

    if (text === 'Skills') {
      window.scrollTo({
        top: mainScrollTop + aboutmeTop - 37,
        behavior: 'smooth',
      });
    }

    if (text === 'Archiving') {
      window.scrollTo({
        top: mainScrollTop + aboutmeTop + skillTop - 70,
        behavior: 'smooth',
      });
    }

    if (text === 'Projects') {
      window.scrollTo({
        top: mainScrollTop + aboutmeTop + skillTop + archivingTop - 35,
        behavior: 'smooth',
      });
    }
  };

  return <RightButtonBlock onClick={handleBtnClick}>{text}</RightButtonBlock>;
};

export default RightButton;
