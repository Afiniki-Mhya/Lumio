import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";

import Tilt from "react-parallax-tilt";
const ParallaxEffect = ({ children }: { children: ReactNode }) => (
  <Tilt
    className="parallax-effect rounded-3xl shadow-xl shadow-black origin-center -rotate-6 overflow-hidden "
    perspective={500}
    scale={1.05}
    transitionSpeed={2500}
  >
    {children}
  </Tilt>
);
export const EmptyParallaxTilt = ({
  children,
  alternate,
  flip,
  setFlip,
  tiltEnalble,
}: PropsWithChildren & {
  alternate?: ReactNode;
  flip?: boolean;
  tiltEnalble?: boolean;
  setFlip?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisibility(!!flip), 50);
  }, [flip]);
  //   if (!tiltEnalble)
  //     return (
  //       <div className="relative w-full h-fit min-h-[30rem]">
  //         <div className="inner-element bg-gray-800    w-full h-full ">
  //           {children}
  //         </div>
  //       </div>
  //     );
  return (
    <Tilt
      flipHorizontally={flip}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      tiltEnable
      tiltReverse
      className=""
      //   perspective={500}

      // className="parallax-effect"
    >
      <div className=" rounded-3xl shadow-xl shadow-black origin-center -rotate-6 overflow-hidden">
        <div
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
          onClick={() => setFlip && setFlip(!flip)}
          className="inner-element bg-transparent    w-full h-full "
        >
          {children}
        </div>
        <div
          onClick={() => setFlip && setFlip(!flip)}
          style={{
            backfaceVisibility: !visibility ? "hidden" : "initial",
            transformStyle: "preserve-3d",
            transform: "rotateY(180deg)",
          }}
          className="inner-element absolute bg-gray-800 inset-0  w-full h-full top-0 rounded overflow-hidden"
        >
          {alternate || children}
        </div>
      </div>
    </Tilt>
  );
};

export default ParallaxEffect;
