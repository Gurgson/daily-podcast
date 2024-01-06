import styled from "styled-components";
import { IEpisode } from "../../Data/Episodes"
import {FC, useRef} from "react";
import { Variants, motion, useInView } from "framer-motion";
import { StyledParagraph } from "../Text/Paragraph";
import { flexCenter } from "../../styles/mixins";
import { Link } from "react-router-dom";
import ColorScheme from "../../enums/ColorScheme";
import FontSizes from "../../enums/FontSizes";
import { showFromBottom } from "../../AnimationSets/animation";


interface IProps {
    cover: IEpisode;
    isColored: boolean
}
const CoverCardListItem:FC<IProps>= (props) => {
    const episodeNumber = props.cover.id +1;
    const ref= useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true})
    const animationSet : Variants  = {

        ...showFromBottom,
        hover: {
            cursor: "pointer",
            borderColor: `var(${ColorScheme.black})`,
            translateY: "-0.5rem",
            boxShadow: `1rem 1rem 0 0 var(${ColorScheme.blue})`,
            transition: {
                duration: 0.5
            }
        }  
    }
  return (
    <StyledLink to={`/Episode/${props.cover.id + 1}`} >
        <StyledContainer ref={ref}  variants={animationSet} initial="start" animate={isInView?"end":""} transition={{duration:1}} whileHover="hover">
            <img src={props.cover.imgUrl} alt={`${props.cover.shortTitle} podcast image`}/>
            <StyledCardInfo>
                <StyledText color={ColorScheme.red} fontWeight={700} lineHeight="160%">{`Ep. ${episodeNumber}`}</StyledText>
                <StyledText lineHeight="140%" color={(props.isColored)?ColorScheme.red:ColorScheme.black} fontSize={FontSizes.smallHeading} fontWeight={700}> { props.cover.fullTitle}</StyledText>
                <hr/>
                <StyledText>{props.cover.description}</StyledText>
            </StyledCardInfo>
            <StyledBottom>
                <StyledTags>
                    {props.cover.tags.map((item, index)=> <div key={`podcast ${props.cover.fullTitle} tag ${index}`}>{item}</div>)}
                </StyledTags>
                <StyledHosts>
                    <span>Hosted by:</span>
                    <StyledAvatar index={0} src={props.cover.hosts.main.imgUrl} alt="main host image"/>
                    {props.cover.hosts.guests.map((guest, index)=> <StyledAvatar index={index+1} key={`guest-image-${index}`} src={guest.imgUrl} alt={`${index} guest img`}/>)}
                </StyledHosts>
            </StyledBottom>
        </StyledContainer>
    </StyledLink>
    
  )
}
const StyledLink = styled(Link)`
    text-decoration: none;
    color:inherit;
    
`;
interface ImgProps {
    index: number
}
export const StyledAvatar = styled.img<ImgProps>`
    border: 0.5rem solid var(${ColorScheme.white});
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transform: translateX(-${p=>p.index}rem);
`
const StyledHosts = styled.div`
    ${flexCenter}
    & > span {
        font-size: var(${FontSizes.small});
        color: var(${ColorScheme.grey});
        font-weight: 700;
        line-height: 160%;
    }
    
    
    
`
export const StyledTags = styled.div`
    display: flex;
    gap: .6rem;
    & > div {
        padding: 0.6rem 1.2rem;
        color: var(${ColorScheme.grey});
        font: var(${FontSizes.small});
        line-height: 160%;
        border: 1px solid var(${ColorScheme.grey});
        border-radius: 4px;
    }
`;
const StyledBottom = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledText = styled(StyledParagraph)`
    max-width: 35rem;
`
const StyledCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 16.6rem;
    & > hr {
        width: 100%;
        border-top: 1px solid var(${ColorScheme.grey});
     
        margin: 1.5rem 0 1rem 0;
    }
    @media screen and (max-width: 600px) {
        align-items: center;
        
    }
`
const StyledContainer = styled(motion.div)`
    width: 57rem;
    background-color: var(${ColorScheme.white});
    border: 2px solid var(${ColorScheme.white});
    border-radius: 1.2rem;
    padding: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    box-shadow: 0.5rem 0.5rem 0 0 var(${ColorScheme.blue});
    @media screen and (max-width: 600px) {
        justify-content: center;
        width: 35rem;
    }
    & > img {
        width: 16.6rem;
        height: 16.6rem;
        border-radius: 0.6rem;
        aspect-ratio: 4/ 3;
        @media screen and (max-width: 600px) {
            height: 20rem;
            width: 22rem;
    
        }
    }
`

export default CoverCardListItem