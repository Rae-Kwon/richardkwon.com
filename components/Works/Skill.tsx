import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface SkillProps {
  tech: { name: string; logoSrc: string };
}

const Skill = ({ tech }: SkillProps) => {
  const [isDragging, setDragging] = useState(false);
  return (
    <motion.div
      className={`flex flex-col items-center w-20 sm:basis-0 ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      drag
      dragConstraints={{ top: -25, left: -25, right: 25, bottom: 25 }}
      onDrag={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
    >
      <Image
        src={tech.logoSrc}
        alt={`${tech.name} logo`}
        width={40}
        height={40}
      />
      <p className="text-center">{tech.name}</p>
    </motion.div>
  );
};
export default Skill;
