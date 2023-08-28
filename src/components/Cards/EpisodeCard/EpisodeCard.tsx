import {FC} from 'react'
import styled from 'styled-components'
import { SiYoutube, SiSpotify, SiGooglepodcasts } from 'react-icons/si';
import SocialMediaIcon from '../../Icons/SocialMediaIcon';
import { IEpisode } from '../../../Data/Episodes';
import ColorScheme from '../../../enums/ColorScheme';
import FontSizes from '../../../enums/FontSizes';
interface IStyledContainerProps{
  imageUrl: string
}
interface IProps {
  cover: IEpisode
  applyTitle: boolean

}
const EpisodeCard : FC<IProps>= (props) => {

  return (
    <StyledEpisodeCardContainer imageUrl={props.cover.imgUrl  }>
      <StyledSocialMediaBar>
        {props.cover.gpodcast && <SocialMediaIcon icon={<SiGooglepodcasts></SiGooglepodcasts>}  href={props.cover.gpodcast}/>}
        {props.cover.spotify && <SocialMediaIcon icon={<SiSpotify></SiSpotify>}  href={props.cover.spotify}/>}
        {props.cover.youtube && <SocialMediaIcon icon={<SiYoutube></SiYoutube>}href={props.cover.youtube}/>}
        
      </StyledSocialMediaBar>
      {props.applyTitle && <StyledTitle>{props.cover.shortTitle}</StyledTitle>}
    </StyledEpisodeCardContainer>
  )
}
const StyledSocialMediaBar = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  gap: 2rem;
  display: flex;
  
`
export const StyledEpisodeCardContainer = styled.div<IStyledContainerProps>`
  width: 37rem;
  min-width: 37rem;
  height: 37rem;
  background-image: url(${p=>p.imageUrl});
  background-size: cover;
  position: relative;
  border-radius: 12px;
  z-index: 10;

  `;
  const StyledTitle = styled.p`
  position: absolute;
  color: var(${ColorScheme.blue});
  font-weight: 700;
  font-size: var(${FontSizes.subheading});
  bottom: 2rem;
  left: 2rem;
  line-height: 140%;
  letter-spacing: -3px;
`;

export default EpisodeCard