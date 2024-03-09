import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Card, TextArea } from "./components";

const INITIAL_VALUE = "초기값";
const MAX_LENGTH = 100;
const PLACEHOLDER = "주문 요청사항을 입력해주세요";

function App() {
  const [text, setText] = useState<string>(INITIAL_VALUE);

  const onClick = () => {
    alert("저장되었습니다.");
  };

  return (
    <Background className="App">
      <Content>
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
            <TextArea
              placeholder={PLACEHOLDER}
              maxLength={MAX_LENGTH}
              disabled
            />
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
        <section>
          <Title>카드 UI</Title>

          <SubTitle>- 세로</SubTitle>
          <ColCard>
            <Card $direction="column">
              <Card.Image src={"https://fakeimg.pl/300//"} alt="fake image" />
              <Card.Wrapper>
                <Card.Description>
                  <div>
                    <Card.Label>Card Label</Card.Label>
                    <Card.Title>Card Title</Card.Title>
                  </div>
                  <Card.Inform>
                    <Card.Highlight>Hilight</Card.Highlight>
                    <Card.CrossOut>Cross Out</Card.CrossOut>
                  </Card.Inform>
                </Card.Description>
                <Card.Divider />
                <Card.SubDescription>
                  <Card.Rating rate={3} />
                  <Card.RatingDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit odio optio eum corporis obcaecati? Voluptas neque
                    tempora ut officiis repellendus amet culpa aliquid dicta
                    commodi! Libero recusandae fugit quod velit.
                  </Card.RatingDescription>
                </Card.SubDescription>
              </Card.Wrapper>
            </Card>
          </ColCard>

          <SubTitle>- 세로2</SubTitle>
          <ColCard>
            <Card $direction="column">
              <Card.Image src={"https://fakeimg.pl/300//"} alt="fake image" />
              <Card.Wrapper>
                <Card.Description>
                  <div>
                    <Card.Label>Card Label</Card.Label>
                    <Card.Title>Card Title</Card.Title>
                  </div>
                  <Card.Inform>
                    <Card.Highlight>Hilight</Card.Highlight>
                    <Card.CrossOut>Cross Out</Card.CrossOut>
                  </Card.Inform>
                </Card.Description>
                <Card.Divider />
                <Card.SubDescription>
                  <Card.Rating rate={3} />
                </Card.SubDescription>
              </Card.Wrapper>
            </Card>
          </ColCard>

          <SubTitle>- 세로3</SubTitle>
          <ColCard>
            <Card $direction="column">
              <Card.Image src={"https://fakeimg.pl/300//"} alt="fake image" />
              <Card.Wrapper>
                <Card.Description>
                  <div>
                    <Card.Label>Card Label</Card.Label>
                    <Card.Title>Card Title</Card.Title>
                  </div>
                  <Card.Inform>
                    <Card.Highlight>Hilight</Card.Highlight>
                    <Card.CrossOut>Cross Out</Card.CrossOut>
                  </Card.Inform>
                </Card.Description>
                <Card.Divider />
              </Card.Wrapper>
            </Card>
          </ColCard>

          <SubTitle>- 가로</SubTitle>
          <RowCard>
            <Card>
              <Card.Image src={"https://fakeimg.pl/300//"} alt="fake image" />
              <Card.Wrapper>
                <Card.Description>
                  <Card.MainTitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque vel unde veritatis quibusdam odio magnam deleniti,
                    architecto aut fugiat soluta tempora, nostrum eum. Illo
                    ullam perferendis, assumenda inventore provident ut.
                  </Card.MainTitle>
                  <Card.Title>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem eius tempora exercitationem itaque recusandae eum sit,
                    corporis rerum aperiam aliquam quas esse iste numquam
                    placeat harum. Autem eum culpa iste.
                  </Card.Title>
                  <Card.Inform>
                    <Card.Rating rate={3} />
                    <Card.Name>John Doe</Card.Name>
                  </Card.Inform>
                </Card.Description>
              </Card.Wrapper>
            </Card>
          </RowCard>
        </section>
      </Content>
    </Background>
  );
}

export default App;

const Background = styled.div`
  width: 100%;
  height: 100%;
  min-height: 640px;
  background-color: #f8f8f8;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-width: 320px;
  padding: 20px 25px;
  margin: 0 auto;
  overflow: auto;
  background-color: #ffffff;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 17px 0 10px 0;
`;

const SubTitle = styled.p`
  font-size: 14px;
  margin: 7px 0;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 60px;
  margin-bottom: 10px;
`;

const RowCard = styled.div`
  width: 350px;
  height: 140px;
`;

const ColCard = styled.div`
  width: 170px;
  height: 320px;
`;
