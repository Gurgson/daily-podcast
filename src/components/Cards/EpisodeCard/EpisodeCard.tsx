import {FC} from 'react'
import styled from 'styled-components'
import { SiYoutube, SiSpotify, SiGooglepodcasts } from 'react-icons/si';
import SocialMediaIcon from '../../Icons/SocialMediaIcon';
import { IEpisode } from '../../../Data/Episodes';
import ColorScheme from '../../../enums/ColorScheme';
import FontSizes from '../../../enums/FontSizes';
interface IStyledContainerProps{
  imageUrl: string
  isSmall?: boolean
  isShadowed?: boolean
}
interface IProps {
  cover: IEpisode
  applyTitle: boolean
  isSmall?: boolean
  isShadowed?: boolean
  

}
const EpisodeCard : FC<IProps>= (props) => {

  return (
    <StyledEpisodeCardContainer isShadowed={props.isShadowed || false} imageUrl={props.cover.imgUrl} isSmall={props.isSmall || false}>
      <StyledSocialMediaBar>
        {props.cover.gpodcast && <SocialMediaIcon props={{icon: <SiGooglepodcasts/>, href: props.cover.gpodcast, ariaLabel: "Google Podcast"}}/>}
        {props.cover.spotify && <SocialMediaIcon props={{icon: <SiSpotify/>, href: props.cover.spotify, ariaLabel:"Spotify" }}/>}
        {props.cover.youtube && <SocialMediaIcon props={{icon: <SiYoutube/>, href: props.cover.youtube, ariaLabel:"Yourube" }}/>}
        
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
  width: ${p=>p.isSmall?"18.6rem":"37rem"};
  min-width: ${p=>p.isSmall?"18.6rem":"37rem"};
  height: ${p=>p.isSmall?"18.6rem":"37rem"};
  background-image: url(${p=>p.imageUrl});
  box-shadow: ${p=>p.isShadowed?`0.5rem 0.5rem 0 0 var(${ColorScheme.blue});`:""};
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