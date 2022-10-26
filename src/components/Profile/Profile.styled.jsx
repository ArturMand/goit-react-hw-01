import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;
export const UserPhoto = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 8px;
`;
export const UserTag = styled.p`
  font-size: 12px;
  margin: 0;
  margin-bottom: 8px;
  color: #b5b5b5;
`;
export const UserLocation = styled.p`
  font-size: 12px;
  margin: 0;
  color: #b5b5b5;
`;

export const DataList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 240px;
`;
export const DataItem = styled.li`
  display: flex;
  flex-basis: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  background-color: #e8ebf2;
  border-top: 1px groove #fff;
  border-right: 1px groove #fff;
`;

export const Stats = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
export const StatsText = styled.span`
  color: #b5b5b5;
  font-size: 12px;
`;
