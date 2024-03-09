import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TextArea = styled.textarea`
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

export const RemainLength = styled.p`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #c4c4c4;
  font-size: 12px;
`;

export const SaveButton = styled.button`
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
