import { motion } from "framer-motion";
import { useParams } from "react-router-dom"
const Episode = () => {
  const query = useParams();
  console.log(query)
  return (
    

    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>Episodes</motion.div>
  )
}

export default Episode