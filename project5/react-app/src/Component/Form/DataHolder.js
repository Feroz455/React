import { DataStyled } from "./Data.styled";
export default function Data({ name, age }) {
  return (
    <DataStyled>
      <div className="flex-container">
        <div>
          {name} ({age} years old)
        </div>
        <div>✅</div>
      </div>
    </DataStyled>
  );
}
