import { useState,useEffect } from 'react';
import { EpisodesDataList, IEpisode } from '../Data/Episodes';


function useEpisode(id :string | undefined) {
  const [episode, setEpisode] = useState<IEpisode | null>(null)
  useEffect(()=>{
    setEpisode(EpisodesDataList.filter(item=>(item.id+1).toString() === id)[0]);
  },[episode, id])
    
  return episode?episode:EpisodesDataList.filter((item)=>item.id === 0)[0]
}

export default useEpisode;