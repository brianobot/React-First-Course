

interface Props {
    children?: string; // the qustion mark before the colon for the type annotation is 
    //  marker that the property is optional and can be skipped safely
    onClick: () => void;
    color?: string;
    visible?: boolean;
}

const Button = ({ children = "primary", onClick, color = "primary", visible = true}: Props) => {

    let display = !visible && "disabled"; 
    let setclass = `btn mx-2 btn-${color} ${display}`;
  return (
    <button type="button" className={setclass} onClick={onClick}>{children}</button>
  )
}

export default Button