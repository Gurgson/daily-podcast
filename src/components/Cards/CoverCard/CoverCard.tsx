import {FC} from 'react'
import styled from 'styled-components'
import { ICover } from '../../../Data/Covers';
import { SiYoutube, SiSpotify, SiGooglepodcasts } from 'react-icons/si';
import SocialMediaIcon from '../../Icons/SocialMediaIcon';
interface IStyledContainerProps{
  $imageUrl: string
}

const CoverCard : FC<ICover>= (props) => {
  console.log(props)
  return (
    <StyledCardContainer $imageUrl={props.imgUrl}>
      <StyledSocialMediaBar>
        {props.gpodcast && <SocialMediaIcon icon={<SiGooglepodcasts></SiGooglepodcasts>}  href={props.gpodcast}/>}
        {props.spotify && <SocialMediaIcon icon={<SiSpotify></SiSpotify>}  href={props.spotify}/>}
        {props.youtube && <SocialMediaIcon icon={<SiYoutube></SiYoutube>}href={props.youtube}/>}
        
      </StyledSocialMediaBar>
      <StyledTitle>{props.title}</StyledTitle>
    </StyledCardContainer>
  )
}
const StyledSocialMediaBar = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  gap: 2rem;
  display: flex;
  
`
const StyledCardContainer = styled.div<IStyledContainerProps>`
  width: 37rem;
  min-width: 37rem;
  height: 37rem;
  background-image: url(${p=>p.$imageUrl});
  background-size: cover;
  position: relative;
  border-radius: 12px;
  z-index: 10;

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