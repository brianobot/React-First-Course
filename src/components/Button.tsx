

interface Props {
    children?: string;
    onClick: () => void;
}

const Button = ({ children = "primary", onClick }: Props) => {
   let suffix = children.toLowerCase();

  return (
    <button type="button" className={"btn mx-2 btn-" + suffix} onClick={onClick}>{children}</button>
  )
}

export default Button