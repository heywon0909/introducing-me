import { Outlet } from "react-router";
import * as S from './styled'
import { useState } from 'react';
import Header from 'components/header/Header';
import Nav from 'components/nav/Nav';



export default function Root() {
  const [hover, setHover] = useState(false);
  const handleHover = (flg:boolean) => setHover(flg);
  return (
    <S.Container>
      <Header/>
      <S.ContainerWrapper>
        <Nav hover={hover} handleHover={handleHover} />
        <Outlet/>
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
