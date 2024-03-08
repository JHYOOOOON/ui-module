import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { TextArea } from "./components";

const INITIAL_VALUE = "초기값";
const MAX_LENGTH = 100;
const PLACEHOLDER = "주문 요청사항을 입력해주세요";

function App() {
  const [text, setText] = useState<string>(INITIAL_VALUE);

  const onClick = () => {
    alert("저장되었습니다.");
  };

  return (
    <StyledApp className="App">
      <section>
        <Title>입력 폼 UI</Title>
        <SubTitle>- default, 입력 중 상태</SubTitle>
        <Wrapper>
          <TextArea
            placeholder={PLACEHOLDER}
            initialvalue={INITIAL_VALUE}
            maxLength={MAX_LENGTH}
            value={text}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              let { value } = event.target;
              if (value.length > MAX_LENGTH) {
                value = value.slice(0, MAX_LENGTH);
              }
              setText(value);
            }}
          />
          <TextArea.SaveButton
            onClick={onClick}
            disabled={INITIAL_VALUE === text}
          >
            Save
          </TextArea.SaveButton>
        </Wrapper>

        <SubTitle>- disabled 상태</SubTitle>
        <Wrapper>
          <TextArea placeholder={PLACEHOLDER} maxLength={MAX_LENGTH} disabled />
        </Wrapper>
        <SubTitle>- readOnly 상태</SubTitle>
        <Wrapper>
          <TextArea
            placeholder={PLACEHOLDER}
            maxLength={MAX_LENGTH}
            value={text}
            readOnly
          />
        </Wrapper>
      </section>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  width: 500px;
  height: 100%;
  padding: 15px 20px;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0;
`;

const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 60px;
  margin-bottom: 10px;
`;
