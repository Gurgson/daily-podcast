import Section from '../Section/Section'
import EpisodeList from '../../EpisodeList/EpisodeList'
import Headline from '../../Headline.tsx/Headline'
import { EpisodesDataList } from '../../../Data/Episodes'
import styled from 'styled-components'
import ColorScheme from '../../../enums/ColorScheme'
import FontSizes from '../../../enums/FontSizes'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const EpisodeFilteredListSection = () => {
  const [tag, setTag] = useState<string>("All");
  const tags : Set<string> = new Set();
  EpisodesDataList.map(item => item.tags.forEach(tag => tags.add(tag)));
  const arrayedTags :Array<string>= Array.from(tags).sort();
  const [width, setWidth] = useState<number>(0)
  const row = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(!row.current)
      return;
    setWidth(row.current.scrollWidth - row.current.offsetWidth);
  },[width])
  return (
    <Section>
        <Headline main="Latest Episode"/>
        <StyledTagCotainer>
          <StyledRow ref={row} drag="x" dragConstraints={{right: 0, left: -width}}>
            <div onClick={()=>setTag("All")}>All</div>
            {arrayedTags.map((item,index)=><div onClick={()=>{setTag(item)}} key={`tag-${index}`}>
              {item}
            </div>)}
          </StyledRow>
        </StyledTagCotainer>
        <EpisodeList items={(tag === "All")?EpisodesDataList:EpisodesDataList.filter((item)=>item.tags.includes(tag))}/>
    </Section>
  )
}
const StyledRow = styled(motion.div)`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  color: var(${ColorScheme.grey});
  gap: 9.5rem;
  white-space: nowrap;
  & > div:first-child{
    color: var(${ColorScheme.red});
  }
  &> div {
    cursor: pointer;
  }
`;
const StyledTagCotainer = styled.div`
  overflow: hidden;
  margin: 10rem auto;;
  max-width: 90%;
  border-bottom: 1px solid var(${ColorScheme.grey});
  font-size: var(${FontSizes.smallHeading});
  
`
export default EpisodeFilteredListSection