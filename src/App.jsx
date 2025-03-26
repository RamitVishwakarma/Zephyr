import Main from "./Components/Main/MainPage";
import axios from "axios";
function App() {
  axios.defaults.baseURL =
    "http://ec2-44-201-124-80.compute-1.amazonaws.com:8000";
  return (
    <>
      <Main />
    </>
  );
}

export default App;
