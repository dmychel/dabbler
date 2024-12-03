// npm
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

export default function Contact() {
  const divPos = useSpring({ x: 0, y: 0 });
  const bindDivPos = useDrag((params) => {
    divPos.x.set(params.offset[0]);
    divPos.y.set(params.offset[1]);
  });
  return (
    <animated.div
      {...bindDivPos()}
      style={{
        touchAction: "none",
        y: divPos.y,
        x: divPos.x,
      }}
      className="about_tab"
    >
      Contact
    </animated.div>
  );
}
