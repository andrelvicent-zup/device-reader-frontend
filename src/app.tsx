import LeadForm from "./components/lead-form/leadForm";
import LineSequence from "./components/line-sequence/lineSequence";
import ContadorDeGotas from "./components/rainfall/rainfall";

function App() {
  return (
    <div>
      <div>
        <LineSequence />
      </div>
      <div>
        <ContadorDeGotas titulo={"contador: "} apiUrl={""} />
      </div>
      <div>
        <LeadForm link="https://react.dev/learn/react-developer-tools" />
      </div>
    </div>
  );
}

export default App;
