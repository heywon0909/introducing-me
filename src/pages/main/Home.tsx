import { useEffect, useRef } from 'react';
import * as S from './styled'
import { FaHandsClapping } from "react-icons/fa6";
import gsap from 'gsap';

export default function Home() {
  const greeting = useRef<HTMLHeadingElement>(null);
  const job = useRef<HTMLDivElement>(null);
  const hiFive = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const tl = gsap.timeline({repeat:0})
    tl.fromTo(greeting.current, {
      yPercent: -50,
      opacity: 0.3
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
    }).to(hiFive.current, { duration: 1, rotation: 360 })
    .fromTo(job.current, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 2,
    });

  
  }, []);

  return (<S.Container>
    <S.ContentWrapper>
    <S.TitleWrap  ref={greeting}>
      <S.Title>H</S.Title>
      <S.Title>E</S.Title>
      <S.Title>L</S.Title>
      <S.Title>L</S.Title>
      <S.Title>O</S.Title>
      <S.Title ref={hiFive}>
        <FaHandsClapping id='hand' size={100} color='#0080FF'/>
      </S.Title>

      {/* <S.ProfileDesc ref={greeting}>
      <S.JobTitle>Front-end</S.JobTitle>
        <S.TitleDesc>박혜원입니다.</S.TitleDesc>
      </S.ProfileDesc> */}
    </S.TitleWrap>
    <S.TitleWrap ref={job}>
      <S.JobTitle>F</S.JobTitle>
      <S.JobTitle>R</S.JobTitle>
      <S.JobTitle>O</S.JobTitle>
      <S.JobTitle>N</S.JobTitle>
      <S.JobTitle>T</S.JobTitle>
      <S.JobTitle>-</S.JobTitle>
      <S.JobTitle>E</S.JobTitle>
      <S.JobTitle>N</S.JobTitle>
      <S.JobTitle>D</S.JobTitle>
      {/* <S.ProfileDesc ref={greeting}>
      <S.JobTitle>Front-end</S.JobTitle>
        <S.TitleDesc>박혜원입니다.</S.TitleDesc>
      </S.ProfileDesc> */}
    </S.TitleWrap>
    </S.ContentWrapper>
    <S.Img url={process.env.PUBLIC_URL + '/assets/image/photo.jpg'} >
      <S.ProfileImg src={process.env.PUBLIC_URL + '/assets/image/hyewon.jpg'} />
    </S.Img>
  </S.Container>);
}
