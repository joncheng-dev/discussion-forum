import formEditReducer from "../../reducers/form-edit-reducer";

describe("formEditReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(formEditReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle edit form state to true", () => {
    expect(formEditReducer(false, { type: "EDIT_FORM_TOGGLE" })).toEqual(true);
  });

  test("Should toggle edit form state to false", () => {
    expect(formEditReducer(true, { type: "EDIT_FORM_TOGGLE" })).toEqual(false);
  });
});
