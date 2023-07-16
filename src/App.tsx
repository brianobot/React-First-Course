import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible1, setAlertVisibility1] = useState(false);
  const [alertVisible2, setAlertVisibility2] = useState(false);

  const [btn1_visible, setBtn1Visibility] = useState(true);
  const [btn2_visible, setBtn2Visibility] = useState(true);

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
  };

  return (
    <>
      <h1 className="p-2 ps-3">⭐List of Cities</h1>
      <div>
        <ListGroup
          items={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <ListGroup
          items={[]}
          heading="Test List Group"
          onSelectItem={handleSelectItem}
        />
        {alertVisible1 && (
          <Alert
            children="Alert One"
            onClose={() => {
              setAlertVisibility1(false);
              setBtn1Visibility(true);
            }}
          />
        )}
        {alertVisible2 && (
          <Alert
            children="Alert Two"
            onClose={() => {
              setAlertVisibility2(false);
              setBtn2Visibility(true);
            }}
          />
        )}
        <Button
          visible={btn1_visible}
          onClick={() => {
            setAlertVisibility1(true);
            setBtn1Visibility(false);
            setAlertVisibility2(true);
            setBtn2Visibility(false);
          }}
        >
          Show All Options
        </Button>
        <Button
          visible={btn2_visible}
          color="danger"
          onClick={() => {
            setAlertVisibility2(true);
            setBtn2Visibility(false)
          }}
        >
          Create one
        </Button>
      </div>
    </>
  );
}

export default App;
