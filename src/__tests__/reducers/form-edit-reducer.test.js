import formEditReducer from "../../reducers/form-edit-reducer";
import * as c from "./../../actions/ActionTypes";

describe("formEditReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(formEditReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle edit form state to true", () => {
    expect(formEditReducer(false, { type: c.EDIT_FORM_TOGGLE })).toEqual(true);
  });

  test("Should toggle edit form state to false", () => {
    expect(formEditReducer(true, { type: c.EDIT_FORM_TOGGLE })).toEqual(false);
  });
});
