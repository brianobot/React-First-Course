

interface Props {
    children?: string; // the qustion mark before the colon for the type annotation is 
    //  marker that the property is optional and can be skipped safely
    onClick: () => void;
}

const Button = ({ children = "primary", onClick }: Props) => {
   let suffix = children.toLowerCase();

  return (
    <button type="button" className={"btn mx-2 btn-" + suffix} onClick={onClick}>{children}</button>
  )
}

export default Button