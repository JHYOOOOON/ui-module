import {
  HTMLAttributes,
  HTMLProps,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";
import * as Styled from "./Card.styled";
import { Direction } from "../../types";

const MAX_RATE = 5;

interface CardContextProps {
  $direction: Direction;
}

const CardContext = createContext<CardContextProps | null>(null);

const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw Error("Error Occured in useSelectContext");
  }

  return context;
};

interface CardProps extends PropsWithChildren {
  $direction?: Direction;
}

export function Card({ children, $direction = "row" }: CardProps) {
  return (
    <CardContext.Provider value={{ $direction: $direction }}>
      <Styled.Card $direction={$direction}>{children}</Styled.Card>
    </CardContext.Provider>
  );
}

function Image(
  props: HTMLAttributes<HTMLImageElement> & HTMLProps<HTMLImageElement>
) {
  const { $direction } = useCardContext();
  return <Styled.Image {...props} $direction={$direction} />;
}

function Wrapper({ children }: PropsWithChildren) {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
}

function Description({ children }: PropsWithChildren) {
  return <Styled.Description>{children}</Styled.Description>;
}

function SubDescription({ children }: PropsWithChildren) {
  return <Styled.SubDescription>{children}</Styled.SubDescription>;
}

function Label({ children }: PropsWithChildren) {
  return <Styled.Label>{children}</Styled.Label>;
}

function MainTitle({ children }: PropsWithChildren) {
  return <Styled.MainTitle>{children}</Styled.MainTitle>;
}

function Title({ children }: PropsWithChildren) {
  return <Styled.Title>{children}</Styled.Title>;
}

interface RatingProps {
  rate: number;
}

function Rating({ rate }: RatingProps) {
  const paints = Array(rate % (MAX_RATE + 1)).fill(true);
  while (paints.length < MAX_RATE) {
    paints.push(false);
  }
  return (
    <Styled.Rating>
      {paints.map((paint) => (
        <Styled.Circle $paint={paint} />
      ))}
    </Styled.Rating>
  );
}

function Inform({ children }: PropsWithChildren) {
  return <Styled.Inform>{children}</Styled.Inform>;
}

function Name({ children }: PropsWithChildren) {
  return <Styled.Name>{children}</Styled.Name>;
}

function Highlight({ children }: PropsWithChildren) {
  return <Styled.Highlight>{children}</Styled.Highlight>;
}

function CrossOut({ children }: PropsWithChildren) {
  return <Styled.CrossOut>{children}</Styled.CrossOut>;
}

function RatingDescription({ children }: PropsWithChildren) {
  return <Styled.RatingDescription>{children}</Styled.RatingDescription>;
}

Card.Image = Image;
Card.Description = Description;
Card.SubDescription = SubDescription;
Card.Label = Label;
Card.MainTitle = MainTitle;
Card.Title = Title;
Card.Rating = Rating;
Card.Wrapper = Wrapper;
Card.Divider = Styled.Divider;
Card.Name = Name;
Card.Inform = Inform;
Card.Highlight = Highlight;
Card.CrossOut = CrossOut;
Card.RatingDescription = RatingDescription;
