import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 12px 10px;
  border-bottom: 1px solid #515151;
  margin: 2px 2px;
`;

export const Logo = styled.span`
  color: rgb(255, 252, 225);
  font-family: NotoSansKR-ExtraBold;
`;

export const LogoWrapper = styled.div`
  width: 100%;
`;
