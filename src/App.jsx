import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="p-2">
        <Button variant="primary" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>
      <div className="p-2">
        <Button variant="secondary" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>
      <div className="p-2">
        <Button variant="danger" onClick={() => alert("Clicked!")}>
          Click Me
        </Button>
      </div>

      <div className="p-2">
      <Button variant="danger" loading>
        Loading Button
      </Button>
    </div>
    </>
  );
}

export default App;
