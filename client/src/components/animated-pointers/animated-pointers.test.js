import React from "react";
import { AnimatedPointer } from "./animated-pointer.component";
import { shallow } from "enzyme";

describe("AllApiOrders component render", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AnimatedPointer />);
  });

  it("should render AllApiOrders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
