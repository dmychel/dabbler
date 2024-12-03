// npm
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

import PropTypes from "prop-types";

export default function ContactTab({ exitTab }) {
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
      <div className="tab_nav">
        <span onClick={() => exitTab(ContactTab)}>&#10006;</span>
      </div>
      Contact
    </animated.div>
  );
}

ContactTab.propTypes = {
  exitTab: PropTypes.func,
};
