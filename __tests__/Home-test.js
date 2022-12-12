import React from "react";
import "react-native";
import { render } from "@testing-library/react-native";

import { Home } from "../src/screens/Home";

describe("Home 스크린", () => {
  it("Home 스크린 정상 렌더링", () => {
    const screen = render(<Home />);
    const json = screen.toJSON();

    expect(json).toMatchSnapshot();
  });

  it("제목 글씨", () => {
    const screen = render(<Home />);
    const titleSeoul = screen.getByText("서울");
    const titleBus = screen.getByText("버스 기사님,");
    const titleDestination = screen.getByText("*** 가시나요?");

    expect(titleSeoul).toBeTruthy();
    expect(titleBus).toBeTruthy();
    expect(titleDestination).toBeTruthy();
  });

  it("출발하기 버튼", () => {
    const screen = render(<Home />);

    expect(screen.getByTestId("startButton")).toBeTruthy();
  });
});
