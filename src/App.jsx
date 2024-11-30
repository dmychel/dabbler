import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import "./App.css";

function App() {
  const divPos = useSpring({ x: 0, y: 0 });
  const bindDivPos = useDrag((params) => {
    divPos.x.set(params.offset[0]);
    divPos.y.set(params.offset[1]);
  });

  return (
    <div className="App">
      <animated.div
        {...bindDivPos()}
        style={{
          touchAction: "none",
          y: divPos.y,
          x: divPos.x,
        }}
      >
        <h1>hello world</h1>
      </animated.div>
    </div>
  );
}

export default App;
