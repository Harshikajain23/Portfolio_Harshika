import { motion } from "framer-motion";

const COLORS = [
  "#a855f7", // purple
  "#ec4899", // pink
  "#22c55e", // green
  "#38bdf8", // sky
  "#facc15", // yellow
  "#fb7185", // rose
];

const BubbleBurst = ({ x, y }) => {
  return [...Array(6)].map((_, i) => {
    const size = Math.random() * 10 + 12;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    return (
      <motion.div
        key={i}
        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        animate={{
          x: Math.random() * 200 - 100,
          y: Math.random() * -160,
          opacity: 0,
          scale: Math.random() * 0.6 + 0.6,
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="pointer-events-none absolute rounded-full"
        style={{
          left: x,
          top: y,
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />
    );
  });
};

export default BubbleBurst;
