import { Outlet } from "react-router";
import * as S from './styled'

export default function Root() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}
