import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Pet from "./Pet";
import Area from "./Area";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet Name="Bob" Animal="Dog" Breed="GR" />
      <SearchParams/>
      <Area/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
