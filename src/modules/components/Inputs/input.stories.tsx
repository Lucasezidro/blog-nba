import Input from "./input";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Inputs",
  component: Input,
} as Meta;

export const Default = () => {
  return (
    <Input 
      type="full"
      placeholder="Your e-mail"
      border
      width="default"
    />
  )
}

export const LargeInput = () => {
  return (
    <Input 
      type="full"
      placeholder="Your e-mail"
      border
      width="large"
    />
  )
}

export const SmallWithoutBorderInput = () => {
  return (
    <Input 
      type="full"
      placeholder="Your e-mail"
      width="default"
    />
  )
}

export const LargeWithoutBorderInput = () => {
  return (
    <Input 
      type="full"
      placeholder="Your e-mail"
      width="large"
    />
  )
}

export const SmallTransparentInput = () => {
  return (
    <Input 
      type="transparent"
      placeholder="Your e-mail"
      border
      width="default"
    />
  )
}

export const LargeTransparentInput = () => {
  return (
    <Input 
      type="transparent"
      placeholder="Your e-mail"
      border
      width="large"
    />
  )
}