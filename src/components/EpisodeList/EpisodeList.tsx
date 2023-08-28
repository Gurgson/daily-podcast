import {FC} from "react";
import { IEpisode } from "../../Data/Episodes";
import CoverCardListItem from "./EpisodeListItem";
import styled from "styled-components";
import { motion}  from "framer-motion";
interface IProps {
    items: Array<IEpisode>
}
const EpisodeList:FC<IProps> = (props) => {
  const displayedItems = props.items.map((item,index)=><CoverCardListItem isColored={( Math.round((item.id / 2) +1)%2 == 0)?true:false} cover={item} key={`Episode-lust-item-${index}`}/>)
  

  
  return (
    <StyledList >{displayedItems}</StyledList>
  )
}
const StyledList = styled(motion.ul)`
  text-decoration: none;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  margin: 6rem auto;
`
export default EpisodeList