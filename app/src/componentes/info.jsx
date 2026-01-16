import { useNavigate } from "react-router-dom";
import Aside from './Aside'

const Info = () => {
  const navigate = useNavigate();
  console.log("NAMO PARVATIPATAYE HAR HAR MHAMADEV");
  return (
    <>
     
      <button
        style={{
          height: "50px",
          width: "50px",
        }}
        onClick={() => {
          navigate("../");
        }}
      >
        Back to home
      </button>

       <Aside />
    </>
  );
};

export default Info;
