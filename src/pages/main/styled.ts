import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 10px;
`;

export const Img = styled.div<{ url: string }>`
  width: 400px;
  height: 400px;
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TitleWrap = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 60px;
  font-family: "Noto Sans KR";
  font-weight: 800;
`;

export const TitleDesc = styled.h2`
  color: #fff;
  font-size: 50px;
`;

export const ProfileImg = styled.img`
  width: 250px;
  height: 280px;
  position: absolute;
  top: 14%;
  left: 24%;
`;
