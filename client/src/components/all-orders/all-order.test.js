import React from "react";
import { AllApiOrders } from "./all-orders.component";
import { shallow } from "enzyme";

describe("AllApiOrders component render", () => {
  let wrapper;
  let socketSendOrderUpdate = jest.fn();
  beforeEach(() => {
    const mockProps = {
      mocksocketSendOrderUpdate: socketSendOrderUpdate,
    };
    wrapper = shallow(<AllApiOrders {...mockProps} />);
  });

  it("should render AllApiOrders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
