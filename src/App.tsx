import InputWidget from "./components/InputWidget";
import Submit from "./components/Submit";

function App() {
  return (
    <form className="needs-validation mt-5">
      <InputWidget type="email" label="Email Address"/>
      <InputWidget label="First Name"/>
      <InputWidget label="Last Name"/>
      <Submit />
    </form>
  );
}

export default App;
