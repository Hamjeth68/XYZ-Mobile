import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import MainButton, {ButtonProps} from "../../Button/"

describe("MainButton", () => {
  const mockOnPress = jest.fn();
  const mockLabel = "Test Button";

  const renderComponent = (props: ButtonProps) => {
    return renderer.create(<MainButton {...props} />);
  };

  it("renders correctly", () => {
    const tree = renderComponent({ label: mockLabel, onPress: mockOnPress }).toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });

  it("triggers onPress when the button is pressed", () => {
    const component = renderComponent({ label: mockLabel, onPress: mockOnPress });
    const buttonInstance = component.root.findByType("TouchableOpacity");

    // Simulate button press
    buttonInstance.props.onPress();

    expect(mockOnPress).toHaveBeenCalled();
  });
});
