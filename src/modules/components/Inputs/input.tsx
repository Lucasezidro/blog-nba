import React from "react";
import styled from "styled-components";

type StyledInput = {
  type: "transparent" | "full";
  width?: "large" | "default";
  border?: boolean;
};

export const DefaultInput = styled.input<StyledInput>`
  width: ${(props) => (props.width === "large" ? 350 : "max-content")}px;
  border-radius: 6px;
  border: ${(props) => (props.border ? "1px solid #adb5bd" : "none")};
  background-color: ${(props) =>
    props.type === "transparent" ? "transparent" : "#111517"};
  padding: 0.6rem;
  color: #adb5bd;
  font-weight: bold;
`;

type InputProps = StyledInput & {
  placeholder: string;
};

export default function Input({
  type,
  width,
  placeholder,
  border,
}: InputProps) {
  return (
    <DefaultInput
      type={type}
      width={width}
      placeholder={placeholder}
      border={border}
    />
  );
}
