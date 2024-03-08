import {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  HTMLProps,
  PropsWithChildren,
} from "react";
import styled from "styled-components";

interface TextAreaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    HTMLProps<HTMLTextAreaElement> {
  initialvalue?: string;
}

export function TextArea(props: TextAreaProps) {
  return (
    <Wrapper>
      <StyledTextArea type="text" {...props} />
      {props.maxLength && (
        <RemainLength>
          {props.maxLength - ((props.value as string) || "").length}
        </RemainLength>
      )}
    </Wrapper>
  );
}

interface SaveButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    ComponentPropsWithoutRef<"button">,
    PropsWithChildren {}

function SaveButton({ children, ...rest }: SaveButtonProps) {
  return <StyledSave {...rest}>{children}</StyledSave>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledTextArea = styled.textarea`
  padding: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  resize: none;
  &::placeholder {
    color: #fb8585;
  }
  &:disabled {
    background-color: #ebebeb;
    cursor: not-allowed;
  }
  &:read-only {
    color: #929292;
    cursor: not-allowed;
  }
`;

const RemainLength = styled.p`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #c4c4c4;
  font-size: 12px;
`;

const StyledSave = styled.button`
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  background: #ffffff;
  color: #00a892;
  cursor: pointer;
  font-size: 12px;
  padding: 10px 15px;
  transition: 0.1s background;
  &:not(:disabled):hover {
    background-color: #f4f4f4;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

TextArea.SaveButton = SaveButton;
