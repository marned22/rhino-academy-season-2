import { useContext } from "react";
import { ThemeContext } from "./Context";

const DateDisplay = () => {
  const { bgColor } = useContext(ThemeContext);
  const today = new Date();
  const formatted = today.toDateString();

  return (
    <div style={{ background: bgColor, padding: "1rem" }}>
      <strong>{formatted}</strong>
    </div>
  );
};

export default DateDisplay;