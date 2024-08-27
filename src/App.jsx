import { IconsComponent } from "./npm-components/iecons/icons";
import AudioComponents from "./npm-components/spinner/audio";
import { TriangleComponent } from "./npm-components/spinner/triangle";
import { ComponentTriangle } from "./npm-components/spinner/triangle1";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Toast } from "./npm-components/toastify/toast";
import Animated from "./npm-components/animated-card/animated";

const App = () => {
  return (
    <>
      <AudioComponents />
      <TriangleComponent width="150" height="150" color="red" />

      <ComponentTriangle width="150" height="150" color="blue" />

      <IconsComponent width={100} height={100} />

      <Skeleton count={1} height={100} />

      <Toast />

      <Animated/>
    </>
  );
};

export default App;
