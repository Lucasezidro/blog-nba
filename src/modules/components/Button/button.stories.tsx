import { Buttons } from "./button";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Buttons,
} as Meta;

export const Default = () => {
  return (
      <Buttons 
        text="Create Account" 
        size="large"
        color="blue"
      />
  );
};

export const SmallBlueButton = () => {

  return (
    <Buttons 
      text="Create Account"
      size="small"
      color="blue"
    />
  )
}

export const RedButton = () => {

  return (
    <Buttons 
      text="Create Account"
      size="large"
      color="red"
    />
  )
}

export const SmallRedButton = () => {

  return (
    <Buttons 
      text="Create Account"
      size="small"
      color="red"
    />
  )
}
