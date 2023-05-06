import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar.js";

describe("Navbar component", () => {
  const component = shallow(<Navbar />);

  it("should render as expected", () => {
    expect(component.contains("Home")).toBe(true);
  });

  it("should render a bills navigation item", () => {
    expect(component.contains("Bills")).toBe(true);
  });

  it("should render a congress member navigation item", () => {
    expect(component.contains("Congress Members")).toBe(true);
  });

  it("should render a senate member navigation item", () => {
    expect(component.contains("Senate Members")).toBe(true);
  });
});
