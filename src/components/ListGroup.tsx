import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   props should be treated immutable in the body of the function that they are passed to
  //   while
  // state are mutable

  //   useState is a Hook
  const [selectedIndex, setSelectIndex] = useState(-1);

  const message = items.length === 0 && (
    <p className="p-3">🚩 No City Found!</p>
  );

  // React component can not return more than one Element
  return (
    <>
      <h1 className="p-3">{heading}</h1>
      {message}
      <ul className="list-group px-3 mt-2">
        {items.map((city, index) => (
          <li
            className={
              index == selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(city);
            }}
            key={city}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
