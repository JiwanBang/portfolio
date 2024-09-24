import "./App.css";
import About from "./Component/About/About";
import Bg from "./Component/Bg";
import Main from "./Component/Main/Main";

function App() {
  return (
    <div className="">
      <Bg />
      <div>
        <div className="flex justify-center items-center pt-[5rem] flex-col">
          <Main />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
