import "./styles.css";
import { useState } from "react";
import cn from "classnames";

const links = [
  "Home", // 0
  "Profile", // 1 -> active
  "Contact" // 2
];

export function Header() {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="header_list">
        {links.map((link, i) => (
          <li key={i}>
            <button
              className={cn({ active: active === i })}
              onClick={() => setActive(i)}
            >
              {link}
            </button>
          </li>
        ))}
      </div>
    </>
  );
}
