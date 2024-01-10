import { useEffect, useRef } from 'react';
import * as S from './styled'
import { FaHandsClapping } from "react-icons/fa6";
import gsap from 'gsap';

export default function Home() {
  const greeting = useRef<HTMLHeadingElement>(null);

  

  useEffect(() => {
    const tl = gsap.timeline({repeat:0})
    tl.fromTo(greeting.current, {
    yPercent: -50,
    opacity: 0.3
  }, {
    yPercent: 0,
    opacity: 1,
    duration:1,
  })
  }, []);

  return (<S.Container>
    <S.TitleWrap>
      <S.Title >HELLO<FaHandsClapping style={{ color:'#0080FF'}} id='hand'/>
      </S.Title>
      <S.ProfileDesc ref={greeting}>
      <S.JobTitle>Front-end</S.JobTitle>
        <S.TitleDesc>박혜원입니다.</S.TitleDesc>
      </S.ProfileDesc>
    </S.TitleWrap>
    
    <S.Img url={process.env.PUBLIC_URL + '/assets/photo.jpg'} >
      <S.ProfileImg src={process.env.PUBLIC_URL + '/assets/hyewon.jpg'} />
    </S.Img>
  </S.Container>);
}
