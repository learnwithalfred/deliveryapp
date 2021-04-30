import React from "react";
import { FormInput } from "./form-input.component";
import { shallow } from "enzyme";

describe("Form Input should be rendered", () => {
  let wrapper;
  let handleChange = jest.fn();
  beforeEach(() => {
    const mockProps = {
      mockhandleChange: handleChange,
      mocklabel: "img",
      otherProps: "",
    };
    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("Should snapshot Form Input", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
