import styled from "styled-components";
import { IMyRole } from "../../Projects/data";

const RoleTableBlock = styled.div`
  .content {
    color: #2a2b35;
    font-size: 15px;
    line-height: 22px;
    text-shadow: 0 0 0 #2a2b35;
  }

  .purple-txt {
    color: #97859d;
    text-shadow: 0 0 0 #97859d;
  }

  .role-txt {
    font-weight: 700;
    padding-bottom: 20px;
  }

  .role-title {
    font-size: 14.5px;
    font-weight: 600;
  }

  .role-bold {
    font-weight: 700;
  }

  table {
    margin: 0 30px 25px 0;
  }

  th,
  td {
    border: 1px solid #dddddd;
    vertical-align: middle;
  }

  th {
    width: 50%;
    padding: 10px;
  }
  td {
    padding: 17px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    table {
      margin-right: 21px;
    }
  }

  @media all and (max-width: 767px) {
    table {
      margin-right: 11.5px;
    }
    td {
      padding: 15px;
    }
  }
`;

interface IRoleTableProps {
  myRole: IMyRole;
}

const RoleTable = ({ myRole }: IRoleTableProps) => {
  const { figma, main, music, feed } = myRole;

  return (
    <RoleTableBlock>
      <div className="role-txt content">
        <span className="purple-txt">★</span> 맡은 역할
      </div>
      <table>
        <tr>
          <th scope="col" className="role-title">
            피그마 디자인 <span className="role-bold">&</span> 공용 컴포넌트 제작
          </th>
          <th scope="col" className="role-title">
            <span className="role-bold">Main</span> 페이지 제작
          </th>
        </tr>

        <tr>
          <td className="my-role content">{figma}</td>
          <td className="my-role content">{main}</td>
        </tr>

        <tr>
          <th scope="col" className="role-title">
            <span className="role-bold">Music</span> 페이지 제작
          </th>
          <th scope="col" className="role-title">
            <span className="role-bold">Feed</span> 페이지 제작
          </th>
        </tr>

        <tr>
          <td className="my-role content">{music}</td>
          <td className="my-role content">{feed}</td>
        </tr>
      </table>
    </RoleTableBlock>
  );
};

export default RoleTable;
