import { CALC_ACTIONS } from "./actions";
import { CalcAction, CalcState } from "./types";

export const initialCalcState: CalcState = {
  currentInput: "",
  prevInput: "",
  operation: "",
};

export function calculatorReducer(
  state: CalcState,
  { type, payload }: CalcAction
): CalcState {
  switch (type) {
    case CALC_ACTIONS.CLEAR: {
      return {...state, ...initialCalcState}
    }
    case CALC_ACTIONS.ADD_DIGIT:
      return { ...state, currentInput: state.currentInput + payload!.digit };
    case CALC_ACTIONS.CHOOSE_OPERATION:
      if (!state.prevInput) {
        return {
          ...state,
          prevInput: state.currentInput,
          operation: payload?.operation || '',
          currentInput: "",
        };
      }
      return state;
    default:
      return state;
  }
}