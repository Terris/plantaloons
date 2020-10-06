import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";
import { Button } from "./Button";

const mockProps = {
  title: "Foo Bar",
  onPress: () => null,
};
const TestComponent = ({ customProps }) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Text>Count: {count}</Text>
      <Button
        {...mockProps}
        {...customProps}
        onPress={() => setCount((c) => c + 1)}
      />
    </>
  );
};

test("it renders and recieves props as expected", () => {
  const { getByText } = render(<TestComponent />);
  const button = getByText(/Foo Bar/i);
  expect(button).toBeTruthy();
  fireEvent.press(button);
  expect(getByText(/Count: 1/i)).toBeTruthy();
  fireEvent.press(button);
  expect(getByText(/Count: 2/i)).toBeTruthy();
});
