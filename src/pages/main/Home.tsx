import * as S from './styled'
import { FaHandsClapping } from "react-icons/fa6";

export default function Home() {
  return (<S.Container>
    <S.TitleWrap>
      <S.Title>HELLO<FaHandsClapping style={{ color:'#0080FF'}} />
      </S.Title>
      <S.TitleDesc>FrontEnd<br/> 박혜원 입니다.</S.TitleDesc>
    </S.TitleWrap>
    
    <S.Img url={process.env.PUBLIC_URL + '/assets/photo.jpg'} >
      <S.ProfileImg src={process.env.PUBLIC_URL + '/assets/hyewon.jpg'} />
    </S.Img>
  </S.Container>);
}
