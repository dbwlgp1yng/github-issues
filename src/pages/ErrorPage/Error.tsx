import { StyledError } from "./Error.styled";
import errorImage from "../images/error.jpg"; 

export default function Error( ){
  return (
    <StyledError>
      <img
        src={errorImage} 
        alt="github Error"
      />
      <p>Error! This is not the webpage you are looking for.</p>
    </StyledError>
  );
}