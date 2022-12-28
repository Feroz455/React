import { OverlayStyled } from "./Overlay.styled";

export default function Overlay({
  check,
  ValidationCheck = (f) => f,
  message,
}) {
  if (check) {
    return;
  }
  return (
    <OverlayStyled onClick={() => ValidationCheck(!check)}>
      <div id="text">
        <div className="center">
          <h1 className="header">Invalid Input</h1>
          <p>Please enter a valid name and age {message}</p>
          <button className="okey" onClick={() => ValidationCheck(!check)}>
            <strong>Okey</strong>
          </button>
        </div>
      </div>
    </OverlayStyled>
  );
}
