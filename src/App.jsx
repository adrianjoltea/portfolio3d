import { useWindowSize } from "@uidotdev/usehooks";
import LayoutDesktop from "./layout/LayoutDesktop";
import LayoutMobile from "./layout/LayoutMobile";

function App() {
  const { width } = useWindowSize();
  const activeLayout =
    width && width >= 900 ? <LayoutDesktop /> : <LayoutMobile />;

  return activeLayout;
}

export default App;
