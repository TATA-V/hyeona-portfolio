import styled from "styled-components";

const FootBlock = styled.footer`
  width: 100%;
  height: 141px;
  border-top: 2px solid #594b5a;
  /* background: linear-gradient(320deg, #513d50, #3c3644); */

  display: flex;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 0;
`;

const RealFootBlock = styled.div`
  width: 254px;
  height: 39px;
  transform: translateY(30px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .email {
    color: #f9f9f9;
    font-size: 14px;
    text-shadow: 0 0 0 #f9f9f9;

    .email-send {
      color: #f9f9f9;
      text-decoration: underline;
    }
  }

  .all-rights {
    color: #887f89;
    font-size: 14px;
    text-shadow: 0 0 0 #887f89;
  }
`;

const Foot = () => {
  return (
    <FootBlock>
      <RealFootBlock>
        <p className="email">
          Do you like my portfolio?&#160;
          <a className="email-send" href="mailto: tatahyeonv@gmail.com">
            Send Email
          </a>
        </p>

        <div className="all-rights">ⓒ 2023 CHOI HYEONA. All Rights Reserved.</div>
      </RealFootBlock>
    </FootBlock>
  );
};

export default Foot;
