import { RouterProvider } from "react-router-dom";
import SetTitle from "./hooks/setTitle";
import { routes } from "./Routes/Routes";

function App() {
  SetTitle("New");
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
