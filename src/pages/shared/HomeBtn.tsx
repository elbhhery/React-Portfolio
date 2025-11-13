import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeBtn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute z-50 right-10 bottom-10"
    >
      <Link
        to="/"
        className="rounded-full p-2 bg-cyan-400 flex items-center justify-center"
      >
        <HomeIcon className="text-4xl! text-white" />
      </Link>
    </motion.div>
  );
}
