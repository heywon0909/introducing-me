import { Outlet } from "react-router";
import * as S from './styled'

export default function Root() {
  return (
    <S.Container>
      <S.Header>
        <S.LogoWrapper>
          <S.Logo>h</S.Logo>
          <S.Logo>e</S.Logo>
          <S.Logo>y</S.Logo>
          <S.Logo>w</S.Logo>
          <S.Logo>o</S.Logo>
          <S.Logo>n</S.Logo>
          <S.Logo>0909</S.Logo>
          <S.LogoImgWrapper>
            <S.LogoImg src={process.env.PUBLIC_URL + '/assets/image/hyewonLogo.png'} alt='logo' />
          </S.LogoImgWrapper>
        </S.LogoWrapper>

      </S.Header>
      <S.ContainerWrapper>
        <S.FloatNav left={true}>
          <S.Nav>
            <S.NavWrapper>
              <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/woman.png'} alt='info' />
              <S.NavText>Info</S.NavText>
            </S.NavWrapper>
            <S.NavWrapper>
              <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/pencil.png'} alt='skills' />
              <S.NavText>Skills</S.NavText>
            </S.NavWrapper>
            <S.NavWrapper>
              <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/resume.png'} alt='info' />
              <S.NavText>Resume</S.NavText>
            </S.NavWrapper>
            <S.NavWrapper>
              <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/idea.png'} alt='info' />
              <S.NavText>Project</S.NavText>
            </S.NavWrapper>      
          </S.Nav>
        </S.FloatNav>
        <S.Frame left={3}>
          <S.FrameText>D</S.FrameText>
          <S.FrameText>E</S.FrameText>
          <S.FrameText>V</S.FrameText>
          <S.FrameText>E</S.FrameText>
          <S.FrameText>L</S.FrameText>
          <S.FrameText>O</S.FrameText>
          <S.FrameText>P</S.FrameText>
          <S.FrameText>E</S.FrameText>
          <S.FrameText>R</S.FrameText>
        </S.Frame>
        <S.Frame right={3}>
          <S.FrameText>F</S.FrameText>
          <S.FrameText>R</S.FrameText>
          <S.FrameText>O</S.FrameText>
          <S.FrameText>N</S.FrameText>
          <S.FrameText>T</S.FrameText>
          <S.FrameText>-</S.FrameText>
          <S.FrameText>E</S.FrameText>
          <S.FrameText>N</S.FrameText>
          <S.FrameText>D</S.FrameText>
        </S.Frame>
        <S.FrameContainer url={process.env.PUBLIC_URL + '/assets/image/image.png'}>
          <Outlet />
        </S.FrameContainer>
      </S.ContainerWrapper>
      <S.Bottom>
        <S.BottomText>h</S.BottomText>
        <S.BottomText>e</S.BottomText>
        <S.BottomText>y</S.BottomText>
        <S.BottomText>w</S.BottomText>
        <S.BottomText>o</S.BottomText>
        <S.BottomText>n</S.BottomText>
      </S.Bottom>
    </S.Container>
  );
}
