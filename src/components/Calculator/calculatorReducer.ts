import { CALC_ACTIONS } from "./actions";
import { CalcAction, CalcState } from "./types";

const MATH_OPERATIONS = ["%", "/", "*", "-", "+"];
const DOT = ".";

export const initialCalcState: CalcState = {
  currentInput: "",
  prevInput: "",
  operation: "",
};

function evaluate({ currentInput, prevInput, operation }: CalcState) {
  if (MATH_OPERATIONS.includes(operation)) {
    return String(eval(`${prevInput} ${operation} ${currentInput}`));
  }
  return "";
}

function deleteSymbols(state: CalcState, propertyName: keyof CalcState) {
  return { ...state, [propertyName]: state[propertyName].slice(0, -1) };
}

export function calculatorReducer(
  state: CalcState,
  { type, payload }: CalcAction
): CalcState {
  switch (type) {
    case CALC_ACTIONS.CLEAR: {
      return { ...state, ...initialCalcState };
    }
    case CALC_ACTIONS.ADD_DIGIT:
      if (
        (state.currentInput.includes(DOT) && payload?.digit === DOT) ||
        (state.currentInput[0] === "0" && payload?.digit?.includes("0")) ||
        (state.currentInput === "" && payload?.digit === "00")
      ) {
        return state;
      }
      if (state.currentInput[0] === "0") {
        return {
          ...state,
          currentInput: payload?.digit || "",
        };
      }
      return { ...state, currentInput: state.currentInput + payload!.digit };
    case CALC_ACTIONS.CHOOSE_OPERATION:
      if (!state.prevInput) {
        return {
          ...state,
          prevInput: state.currentInput,
          operation: payload?.operation || "",
          currentInput: "",
        };
      }
      if (state.prevInput && state.currentInput) {
        return {
          ...state,
          prevInput: "",
          currentInput: evaluate(state),
          operation: "",
        };
      }
      return state;

    case CALC_ACTIONS.EVALUATE:
      if (state.prevInput && state.currentInput && state.operation) {
        return {
          prevInput: "",
          currentInput: evaluate(state),
          operation: "",
        };
      }
      return state;
    case CALC_ACTIONS.DELETE_DIGIT: {
      const propertiesToDelete: (keyof CalcState)[] = [
        "currentInput",
        "operation",
        "prevInput",
      ];

      for (const prop of propertiesToDelete) {
        if (state[prop]) {
          return deleteSymbols(state, prop);
        }
      }
      return state;
    }
    default:
      return state;
  }
}
