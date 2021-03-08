import EatButton from "../containers/EatContainer";
import NapButton from "../containers/NapContainer";
import PlayButton from "../containers/PlayContainer";
import Output from "../containers/OutputContainer";

const Cat = () => (
  <>
    <h1>Here is Fluffy.</h1>
    <Output />
    <EatButton />
    <NapButton />
    <PlayButton />
  </>
);

export default Cat;
