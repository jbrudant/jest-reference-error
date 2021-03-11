import { playSoundFile } from "./sound-player";

const mockPlaySoundFile = jest.fn();
jest.mock("./sound-player.js", () => {
  return { playSoundFile: mockPlaySoundFile };
});

test("only one test is needed", () => {
  // the component needs to be instantiated to the ReferenceError to be thrown
  // remove the next line and jest seems happy
});
