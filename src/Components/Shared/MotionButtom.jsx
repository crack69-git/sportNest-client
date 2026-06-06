import * as motion from "motion/react-client";
import Link from "next/link";
const MotionButtom = () => {
  const box = {
    width: 150,
    height: 150,
    backgroundColor: "var(--hue-3)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={box}
    >
      <Link href="/all-facilities">
        <p
          style={{ color: "white", fontWeight: "bold" }}
          className="bg-sky-900 p-4 rounded-2xl"
        >
          Explore More
        </p>
      </Link>
    </motion.div>
  );
};

export default MotionButtom;
