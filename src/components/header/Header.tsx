import { Link } from 'react-router-dom';
import * as S from './styled'
export default function Header() {
    return (
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
        <S.HeaderMenu>
          <S.MenuLinkWrapper>
            <S.MenuLink to='/info'>Info</S.MenuLink>
          </S.MenuLinkWrapper>
          <S.MenuLinkWrapper>
            <S.MenuLink to='/skills'>Skills</S.MenuLink>
          </S.MenuLinkWrapper>
          <S.MenuLinkWrapper>
            <S.MenuLink to='/resume'>Resume</S.MenuLink>
          </S.MenuLinkWrapper>
          <S.MenuLinkWrapper>
            <S.MenuLink to='/project'>Projects</S.MenuLink>
          </S.MenuLinkWrapper>  
        </S.HeaderMenu>
      </S.Header>
    );
}

