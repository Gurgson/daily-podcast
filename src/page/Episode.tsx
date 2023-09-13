import {useCallback, useState, useEffect} from "react"
import {  useParams } from "react-router-dom"
import Page from "../components/Page/Page";
import Header from "../components/Header/Header";
import styled from "styled-components";
import EpisodeCard from "../components/Cards/EpisodeCard/EpisodeCard";
import ColorScheme from "../enums/ColorScheme";
import Button from "../components/Button/Button";
import { ButtonSize, ButtonType } from "../components/Button/IButton";
import FontSizes from "../enums/FontSizes";
import Paragraph from "../components/Text/Paragraph";
import { StyledTags } from "../components/EpisodeList/EpisodeListItem";
import { flexCenter } from "../styles/mixins";
import { BsPlay, BsPause } from "react-icons/bs";
import EpisodeFilteredListSection from "../components/Sections/EpisodeListSection/EpisodeFilteredListSection";
import useEpisode from "../hooks/useEpisode";


const Episode = () => {
  
  const {query} = useParams();
  const episode = useEpisode(query);
  
  const [isPlaying, setPlay] = useState<boolean>(false);
  const [audio] = useState<HTMLAudioElement>(new Audio(episode.audio));
  const playAudio = useCallback(()=>{
    if(isPlaying)
    {
      audio.pause();
      setPlay(false);
      return;
    } 
    audio.play();
    audio.currentTime = 0;
    setPlay(true);

  },[isPlaying, audio])
  useEffect(()=>{
    window.scrollTo(0, 10)
  },[query])
  return (
    <Page props={{documentTitle: "Our episodes in Pod of Cast"}}>
      <Header>
        <StyledEpisodeInfoContainer>
        <StyledContainer>
          <EpisodeCard cover={episode} isShadowed={true} applyTitle={true}/>
          <StyledRigth>
            <StyledRow>
              <StyledEpisodeId>
                Episode {episode.id + 1}
              </StyledEpisodeId>
              {episode.isFeatured && <Button borderColor={ColorScheme.red} textColor={ColorScheme.red} type={ButtonType.Outlined} size={ButtonSize.small}> FEATURED EPISODE </Button>}
            </StyledRow>
            <Paragraph fontSize={FontSizes.subheading} fontWeight={700}>{episode.fullTitle}</Paragraph>
            <hr />
            <Paragraph lineHeight="160%" color={ColorScheme.grey}>
              {episode.description}
            </Paragraph>
            <StyledAuthorRow>
              <div>
                <Avatar src={episode.hosts.main.imgUrl}/>
                Hosted By:<span>{episode.hosts.main.name}</span>
              </div>
              <span>
                {new Date(episode.createdAt).toLocaleDateString("en-Us",{ month: 'short',  day: "numeric",  year: "numeric"})}
              </span>
            </StyledAuthorRow>
            <Buttons>
              <Button type={ButtonType.Fill} size={ButtonSize.big}>Subscribe</Button>
              <Button type={ButtonType.Outlined} size={ButtonSize.small}>
                  <StyledButtonPlay onClick={playAudio} >
                    {(!isPlaying)?<BsPlay/>:<BsPause/>} 
                    Listen now 
                    &nbsp;
                    <span>
                     
                      {`(${Math.round(episode.duration / 60)} min)`}
                    </span>

                  </StyledButtonPlay>
              </Button>
            </Buttons>
          </StyledRigth>
          
        </StyledContainer>
          <TagsContainer>
            <span>Tags:</span>
            {episode.tags.map((item, index)=><div key={`episode-page-tag${index}`}>{item}</div>)}
          </TagsContainer>
        </StyledEpisodeInfoContainer>
      </Header>
      <EpisodeFilteredListSection/>
    </Page>
  )
}
const StyledButtonPlay = styled.div`
  ${flexCenter}
  & svg {
    width: 3.6rem;
    height: 3.6rem;
  }
  & span {
    color: var(${ColorScheme.red});
  }
`
const StyledAuthorRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: var(${FontSizes.caption});
  color: var(${ColorScheme.grey});
  & div {
    ${flexCenter}
    gap: 1rem;
    & > span
    {
    color: var(${ColorScheme.red});
     font-weight: 700;
  }
  }

  & > span:last-child {
    color: var(${ColorScheme.grey});
  }

`
const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`
const StyledEpisodeId = styled.span`
  color: var(${ColorScheme.red});
  font-size: var(${FontSizes.body});
  font-weight: 700;
`
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  & button {
    font-size: ${FontSizes.caption};
  }
`
const Buttons = styled(StyledRow)`
  margin-top: 6rem;
  justify-content: start;
  gap: 2rem;
  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`
const TagsContainer = styled(StyledTags)`
  display: flex;
  align-items: center;
  flex:100%;
  font-size: var(${FontSizes.caption});
  @media screen and (max-width: 880px) {
    justify-content: center;
  }
  & > span {
    margin-right: 6rem;
    color: var(${ColorScheme.grey})
  }
`
const StyledRigth = styled.div`
  display: flex;
  flex-direction: column;
  width:57rem;
  gap: 2rem;
  @media screen and (max-width: 58rem) {
    width: 80%;
  }
  & hr {
    width: 100%;
    border-top: 1px solid var(${ColorScheme.black});
  }
  
`
const StyledEpisodeInfoContainer = styled.div`
  max-width: 116rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`
const StyledContainer = styled.div`
  gap: 8.6rem 12rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`
export default Episode