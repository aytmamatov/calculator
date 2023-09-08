import { useReducer } from "react";
import { CALC_ACTIONS } from "./actions";
import { CalcAction, CalcState } from "./types";
import "./calculator.scss";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

function calculatorReducer(
  state: CalcState,
  { type, payload }: CalcAction
): CalcState {
  switch (type) {
    case CALC_ACTIONS.ADD_DIGIT:
      return { ...state, currentInput: payload.digit! };
    default:
      return state;
  }
}

const initialState: CalcState = {
  currentInput: "",
  prevInput: "",
  operation: "",
};

function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <div className="container">
      <div className="display">{state.currentInput}</div>

      <div className="buttons">
        <OperationButton operation="AC" dispatch={dispatch} />
        <OperationButton operation="DEL" dispatch={dispatch} />
        <OperationButton operation="%" dispatch={dispatch} />
        <OperationButton operation="/" dispatch={dispatch} />

        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />

        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />

        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />

        <button data-value="0">0</button>
        <button data-value="00">00</button>
        <button data-value=".">.</button>
        <OperationButton operation="=" dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Calculator;
