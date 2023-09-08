export interface CalcAction {
  type: string;
  payload: {
    digit?: string;
    operation?: string;
  };
}

export interface CalcState {
  currentInput: string;
  prevInput: string;
  operation: string;
}
