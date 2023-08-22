import styled from "styled-components";
import { IEpisodes } from "../../Data/Episodes"
import {FC} from "react";
import { motion } from "framer-motion";
import { StyledParagraph } from "../Text/Paragraph";
import { flexCenter } from "../../styles/mixins";
import { Link } from "react-router-dom";


interface IProps {
    cover: IEpisodes;
    isColored: boolean
}
const CoverCardListItem:FC<IProps>= (props) => {
    const episodeNumber = props.cover.id +1;
  return (
    <StyledLink to={"Episode"}>
        <StyledContainer transition={{duration: 1}} initial={{border: "2px solid var(--color-white)", boxShadow:"0.5rem 0.5rem 0 0 var(--color-blue)"}} whileHover={{cursor:"pointer",border: "2px solid var(--color-black",translateY:"-0.5rem", boxShadow: "1rem 1rem 0 0 var(--color-blue)"}}>
            <img src={props.cover.imgUrl} alt={`${props.cover.shortTitle} podcast image`}/>
            <StyledCardInfo>
                <StyledText color="--color-red" fontWeight={700} lineHeight="160%">{`Ep. ${episodeNumber}`}</StyledText>
                <StyledText lineHeight="140%" color={(props.isColored)?"--color-red":"--color-black"} fontSize="--fs-smallHeading" fontWeight={700}> { props.cover.fullTitle}</StyledText>
                <div></div>
                <StyledText>{props.cover.description}</StyledText>
            </StyledCardInfo>
            <StyledBottom>
                <StyledTags>
                    {props.cover.tags.map((item, index)=> <div key={`podcast ${props.cover.fullTitle} tag ${index}`}>{item}</div>)}
                </StyledTags>
                <StyledHosts>
                    <span>Hosted by:</span>
                    <StyledImg index={0} src={props.cover.hosts.main.imgUrl} alt="main host image"/>
                    {props.cover.hosts.guests.map((guest, index)=> <StyledImg index={index+1} key={`guest-image-${index}`} src={guest.imgUrl} alt={`${index} guest img`}/>)}
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
const StyledImg = styled.img<ImgProps>`
    border: 0.5rem solid var(--color-white);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transform: translateX(-${p=>p.index}rem);
`
const StyledHosts = styled.div`
    ${flexCenter}
    & > span {
        font-size: var(--fs-small);
        color: var(--color-grey);
        font-weight: 700;
        line-height: 160%;
    }
    
    
    
`
const StyledTags = styled.div`
    display: flex;
    gap: .6rem;
    & > div {
        padding: 0.6rem 1.2rem;
        color: var(--color-grey);
        font: var(--fs-small);
        line-height: 160%;
        border: 1px solid var(--color-grey);
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
    & > div {
        width: 100%;
        border-top: 1px solid var(--color-grey);
        height: 0.5px;
        margin: 1.5rem 0 1rem 0;
    }
`
const StyledContainer = styled(motion.li)`
    width: 57rem;
    min-height: 25rem;
    background-color: var(--color-white);
    border-radius: 1.2rem;
    padding: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    & > img {
        width: 16.6rem;
        height: 16.6rem;
        border-radius: 0.6rem;
    }
`

export default CoverCardListItem