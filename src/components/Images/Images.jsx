import "./styles.css";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";

export function Images() {
  return (
    <>
      <div className="pics_container">
        <img className="pic1" src={pic1} alt={"logo"} />
        <img className="pic2" src={pic2} alt={"logo2"} />
      </div>
    </>
  );
}
