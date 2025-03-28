import HomePage from "./Components/Page/HomePage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <HomePage />
    </>
  );
}

export default App;
