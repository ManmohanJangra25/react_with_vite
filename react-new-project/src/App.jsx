import Header from "./components/header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

const App = () => {
  const { privacyVal } = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center d-flex justify-content-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacyVal ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </Container>
    </div>
  );
};

export default App;
