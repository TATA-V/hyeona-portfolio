import styled from 'styled-components';

const MoreBtnBlock = styled.div`
  .more-btn {
    width: 182px;
    height: 59px;
    color: #000;
    font-size: 20.5px;
    border-radius: 5px;
    font-weight: 700;
    background: linear-gradient(315deg, #745673 0%, #8994ae 74%);

    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 3px 3px 1.8px rgba(255, 255, 255, 0.25);

    &:hover {
      box-shadow: inset 3px 3px 1.8px rgba(255, 255, 255, 0.17);
      background: linear-gradient(315deg, #694e68 0%, #747e95 74%);
    }
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    transform: translateX(-206px);
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    transform: translate(-110.5px, -10px);

    .more-btn {
      width: 145px;
      height: 48px;
      font-size: 17px;
      border-radius: 3px;
    }
  }

  @media all and (max-width: 479px) {
    transform: translate(-103px, -10px);

    .more-btn {
      width: 120px;
      height: 44px;
      font-size: 15px;
      border-radius: 3px;
    }
  }
`;

const MoreBtn = () => {
  const mainScrollTop = window.innerHeight;

  const handleLearnClick = () => {
    window.scrollTo({
      top: mainScrollTop - 71,
      behavior: 'smooth',
    });
  };

  return (
    <MoreBtnBlock>
      <button onClick={handleLearnClick} className="more-btn">
        Learn More
      </button>
    </MoreBtnBlock>
  );
};

export default MoreBtn;
