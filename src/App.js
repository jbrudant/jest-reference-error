import { useEffect } from "react";
import { playSoundFile } from "./sound-player";

const MyApp = () => {
  useEffect(() => {
    playSoundFile();
  }, []);

  return <div>hello</div>;
};

export default MyApp;
