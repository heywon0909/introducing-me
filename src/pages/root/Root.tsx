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
        </S.LogoWrapper>
       
      </S.Header>
    <S.ContainerWrapper>
      <Outlet />
      </S.ContainerWrapper>
    </S.Container>
  );
}
