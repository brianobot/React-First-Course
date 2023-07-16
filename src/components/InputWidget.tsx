interface Props {
  type?: "email" | "text" | "number" | "date" ;
  label: string;
}

const InputWidget = ({ type = "text", label}: Props) => {
    const id = `${Math.random()}`;
  return (
    <div className="mb-3 m-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

export default InputWidget;
