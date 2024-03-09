import {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  HTMLProps,
  PropsWithChildren,
} from "react";
import * as Styled from "./TextArea.styled";

interface TextAreaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    HTMLProps<HTMLTextAreaElement> {
  initialvalue?: string;
}

export function TextArea(props: TextAreaProps) {
  return (
    <Styled.Wrapper>
      <Styled.TextArea type="text" {...props} />
      {props.maxLength && (
        <Styled.RemainLength>
          {props.maxLength - ((props.value as string) || "").length}
        </Styled.RemainLength>
      )}
    </Styled.Wrapper>
  );
}

interface SaveButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    ComponentPropsWithoutRef<"button">,
    PropsWithChildren {}

function SaveButton({ children, ...rest }: SaveButtonProps) {
  return <Styled.SaveButton {...rest}>{children}</Styled.SaveButton>;
}

TextArea.SaveButton = SaveButton;
