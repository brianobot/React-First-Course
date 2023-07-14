import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let cities = [
    "Lagos",
    "Uyo",
    "Enugu",
    "Calabar",
    "CHina Town",
    "Little Mars",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <h1 className="p-2 ps-3">⭐List of Cities</h1>
      <div>
        <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} />
        <ListGroup items={[]} heading="Test List Group" onSelectItem={handleSelectItem} />
        <Alert>
          Good Evening Team! <span>We have News</span>
        </Alert>
        <Button onClick={() => {console.log("CLicked")}}>
          Primary
        </Button>
        <Button onClick={() => {console.log("CLicked")}}>
          Dark
        </Button>
      </div>
    </>
  );
}

export default App;
