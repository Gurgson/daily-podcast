import {FC} from 'react'
import styled from 'styled-components'

interface ICoverCardParams extends IStyledCardContainerProps{
  title: string, 
  gpodcast?: string,
  spotify?: string,
  youtube?: string,
}
interface IStyledCardContainerProps {
  imgurl: string
}

const CoverCard : FC<ICoverCardParams>= (props) => {
  return (
    <StyledCardContainer imgurl={props.imgurl}>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledCardContainer>
  )
}
const StyledCardContainer = styled.div<IStyledCardContainerProps>`
  width: 37rem;
  min-width: 37rem;
  height: 37rem;
  background-image: url(${p=>p.imgurl});
  background-size: cover;
  position: relative;
  border-radius: 12px;

  `;
  const StyledTitle = styled.p`
  position: absolute;
  color: var(--color-blue);
  font-weight: 700;
  font-size: var(--fs-subheading);
  bottom: 2rem;
  left: 2rem;
  line-height: 140%;
  letter-spacing: -3px;
`;

export default CoverCard