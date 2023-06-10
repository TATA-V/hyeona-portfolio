import styled from "styled-components";

const ViewDetailBtnBlock = styled.div`
  width: 99px;
  height: 32px;
  border-radius: 3px;
  transition: 0.08s;
  background: linear-gradient(315deg, #745673 0%, #8994ae 74%);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(315deg, #694e68 0%, #747e95 74%);
    transition: 0.08s;
  }

  .detail-btn {
    width: 99px;
    height: 32px;
    color: #30313e;
    font-size: 11.5px;
    font-weight: 700;
    text-shadow: 0 0 0 #30313e;
    border-radius: 3px;
    text-shadow: none;

    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 2px 2px 1.8px rgba(255, 255, 255, 0.25);
    transition: 0.08s;

    &:hover {
      box-shadow: inset 2px 2px 1.8px rgba(255, 255, 255, 0.17);
      transition: 0.08s;
    }
  }
`;

interface IViewDetailBtnProps {
  openViewDetail: boolean;
  setOpenViewDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewDetailBtn = ({ openViewDetail, setOpenViewDetail }: IViewDetailBtnProps) => {
  const handleViewDetailModal = () => {
    setOpenViewDetail(!openViewDetail);
  };

  return (
    <ViewDetailBtnBlock>
      <button className="detail-btn" onClick={handleViewDetailModal}>
        View Details
      </button>
    </ViewDetailBtnBlock>
  );
};

export default ViewDetailBtn;
