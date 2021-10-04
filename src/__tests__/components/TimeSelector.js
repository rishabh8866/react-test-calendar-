import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import TimeSelector from "../../components/TimeSelector";

describe("TimeSelector", () => {
  test("It should check time of 9AM box", () => {
    const utils = render(<TimeSelector />);
    const time = utils.getByText("9 AM");

    expect(time.classList[0]).toBe("box");
  });
  test("It should select time of 9AM box", () => {
    const utils = render(<TimeSelector selectedTime="9 AM" />);
    const time = utils.getByText("9 AM");

    expect(time.classList[1]).toBe("focus-color");
  });
});
