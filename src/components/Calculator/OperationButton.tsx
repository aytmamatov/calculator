import { Dispatch } from "react";
import { CALC_ACTIONS } from "./actions";
import { CalcAction } from "./types";

function OperationButton({
  dispatch,
  operation,
}: {
  dispatch: Dispatch<CalcAction>;
  operation: string;
}) {
  return (
    <button
      className="operator"
      onClick={() =>
        dispatch({
          type: CALC_ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
