import styled from '@emotion/styled';

export const TableTransactions = styled.table`
  width: 900px;
  border-radius: 10px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const ThHead = styled.thead`
  height: 50px;
  background-color: #5ea4c4;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;
export const ThHeadTransactions = styled.th`
  border: 1px solid #fff;
`;

export const TrBody = styled.tr`
  color: #7a7a7a;
  background-color: #fff;
  text-align: center;
  &:nth-of-type(even) {
    background-color: #aacfdf;
  }
`;
export const TdBody = styled.td`
  height: 50px;
  border: 1px solid #b7b7b7;
  text-transform: ${({type}) => (type ? 'Capitalize' : ' none')};
`;
