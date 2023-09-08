import { Dispatch } from "react";
import { CALC_ACTIONS } from "./actions";
import { CalcAction } from "./types";

function DigitButton({
  dispatch,
  digit,
}: {
  dispatch: Dispatch<CalcAction>;
  digit: string;
}) {
  return (
    <button
      onClick={() =>
        dispatch({ type: CALC_ACTIONS.ADD_DIGIT, payload: { digit } })
      }
    >
      {digit}
    </button>
  );
}

export default DigitButton;
