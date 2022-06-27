import { ACTIONS } from "./App";

const OpeationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      { operation }
    </button>
  );
};

export default OpeationButton;
