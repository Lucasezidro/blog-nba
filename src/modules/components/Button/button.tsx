import React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
  color?: 'red' | 'blue';
  size?: 'small' | 'large';
}

export const Button = styled.button<StyledButtonProps>`
  width: 200px;
  padding: ${(props) => (props.size === 'small' ? 0.4 : 1)}rem;
  border-radius: 1rem;
  border: none;
  background: ${(props) => (props.color === 'blue' ? '#457b9d' : '#e63946')};
  color: #fafafa;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: all 0.6s;

  &:hover {
    filter: brightness(0.8);
  }
`

type ButtonProps = StyledButtonProps & {
  text: string;
  onClick?: () => void;
};

export function Buttons({ text, color, size, onClick }: ButtonProps) {

	return (
		<Button size={size} color={color} onClick={onClick}>
			{text}
		</Button>
	)
}
