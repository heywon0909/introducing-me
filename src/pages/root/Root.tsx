import { Outlet } from "react-router";
import * as S from './styled'
import { useState } from 'react';
import Header from 'components/header/Header';



export default function Root() {
  const [hover, setHover] = useState(false);
  const handleHover = (flg:boolean) => setHover(flg);
  return (
    <S.Container>
      <Header/>
      <S.ContainerWrapper>
        <S.FloatNav left={true} onMouseOver={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)}>
          <S.Nav>
            {hover && (<>
              <S.NavWrapper>
              <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/woman.png'} alt='info' />
              <S.NavText>Info</S.NavText>
            </S.NavWrapper><S.NavWrapper>
                <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/pencil.png'} alt='skills' />
                <S.NavText>Skills</S.NavText>
              </S.NavWrapper><S.NavWrapper>
                <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/resume.png'} alt='info' />
                <S.NavText>Resume</S.NavText>
              </S.NavWrapper><S.NavWrapper>
                <S.NavImg src={process.env.PUBLIC_URL + '/assets/image/idea.png'} alt='info' />
                <S.NavText>Project</S.NavText>
              </S.NavWrapper>
            </>)}
            {!hover && (<S.NavWrapper dir='column'>
                <S.NavTitle>S</S.NavTitle>
                <S.NavTitle>H</S.NavTitle>
                <S.NavTitle>O</S.NavTitle>
                <S.NavTitle>W</S.NavTitle>
                <S.NavTitle>　</S.NavTitle>
                <S.NavTitle>M</S.NavTitle>
                <S.NavTitle>O</S.NavTitle>
                <S.NavTitle>R</S.NavTitle>
                <S.NavTitle>E</S.NavTitle>
            </S.NavWrapper>)}
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
