import Player from './components/Player.jsx';
import {TimeChallenger} from "./components/TimeChallenger.jsx";

function App() {
  return (
      <>
        <Player/>
        <div id="challenges">
          <TimeChallenger targetTime="1" title="easy"/>
          <TimeChallenger targetTime="5" title="not easy"/>
          <TimeChallenger targetTime="10" title="tough"/>
          <TimeChallenger targetTime="15" title="hard"/>
        </div>
      </>
  );
}

export default App;
