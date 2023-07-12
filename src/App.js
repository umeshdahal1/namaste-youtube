import "./App.css";
import Head from "./components/Head"
import Body from "./components/Body"

function App() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold">Namaste Youtube</h1> */}
      <Head/>
      <Body/> 

      {/*
      ** We should have these inside. 
      ** Head
      ** Body
        ** MenuItems
      ** MainContainer
        ** ButtonsList
        ** VideoContainer
          ** VideoCard
      */}
    </div>
  );
}

export default App;
