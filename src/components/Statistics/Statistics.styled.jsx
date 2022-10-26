import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${() => `#${Boolean(Math.round(Math.random())) ? 'fff' : '000'}`};
`;

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${() => getRandomHexColor()};
`;

export const Label = styled.span`
  font-size: 12px;
`;
export const Percentage = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 20px;
`;
