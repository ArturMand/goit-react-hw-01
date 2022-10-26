import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 15px;
`;
export const Item = styled.li`
  display: flex;
  width: 200px;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const Online = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  display: block;
  margin: 5px 0;
  margin-right: 10px;
  border-radius: 20px;
`;
