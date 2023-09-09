import { useReducer } from "react";

import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { calculatorReducer, initialCalcState } from "./calculatorReducer";
import { CALC_ACTIONS } from "./actions";

import "./calculator.scss";

function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialCalcState);

  function clearCalc() {
    dispatch({ type: CALC_ACTIONS.CLEAR });
  }

  function evaluateCalc() {
    dispatch({ type: CALC_ACTIONS.EVALUATE });
  }

  function deleteNumber() {
    dispatch({ type: CALC_ACTIONS.DELETE_DIGIT });
  }

  return (
    <div className="container">
      <div className="prev">
        {state.prevInput} {state.operation}
      </div>
      <div className="display">{state.currentInput}</div>
      <div className="buttons">
        <button className="operator" onClick={clearCalc}>
          AC
        </button>
        <button className="operator" onClick={deleteNumber}>
          DEL
        </button>
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

        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="00" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <button className="operator" onClick={evaluateCalc}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
