import { useState } from "react";

export default function ToggleExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eum
          eaque excepturi quis, quod officiis sequi exercitationem distinctio!
          Fugiat necessitatibus accusantium, sed modi architecto beatae odio
          culpa eligendi reiciendis minus.
        </p>
      )}
    </div>
  );
}
