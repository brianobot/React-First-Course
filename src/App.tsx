import ListGroup from "./components/ListGroup";

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
      </div>
    </>
  );
}

export default App;
