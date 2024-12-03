// npm
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

import PropTypes from "prop-types";

export default function MainTab({ openTab, AboutTab, ContactTab, WebDevTab }) {
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
      className="main_tab"
    >
      <div className="title">
        <h1>hello world</h1>
        <div className="sub_title">
          <span>Artist, Web Developer, and Dabbler</span>
        </div>
      </div>
      <nav>
        <ul>
          <li onClick={() => openTab(AboutTab)}>about</li>
          <li>web dev</li>
          <li>photography</li>
          <li>links</li>
          <li>contact</li>
        </ul>
      </nav>
    </animated.div>
  );
}

MainTab.propTypes = {
  openTab: PropTypes.func,
  AboutTab: PropTypes.func,
  ContactTab: PropTypes.func,
  WebDevTab: PropTypes.func,
};
