import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  padding: 5px 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.div<{ url: string }>`
  width: 300px;
  height: 300px;
  position: relative;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 300px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.span`
  color: rgb(255, 252, 225);
  font-size: 2rem;
  font-family: NotoSansKR-Bold;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const TitleDesc = styled.div`
  color: #fff;
  line-height: 20px;
  font-size: 30px;
`;

export const ProfileImg = styled.img`
  width: 190px;
  height: 218px;
  position: absolute;
  top: 14%;
  left: 24%;
`;

export const ProfileDesc = styled.div`
  color: #fff;
  font-size: 30px;
  font-family: "Noto Sans KR";
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const JobTitle = styled.div`
  color: #000;
  font-size: 2rem;
  font-family: NotoSansKR-Bold;
  font-weight: 100;
`;

export const JobDesc = styled.div`
  color: #673ab7;
  font-size: 1.4rem;
  font-family: NotoSansKR-Bold;
  font-weight: 100;
`;
