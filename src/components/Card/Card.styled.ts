import styled, { css } from "styled-components";
import { Direction } from "../../types";

const OneLineEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Card = styled.section<{ $direction: Direction }>`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  border: 1px solid #e5e4e5;
  border-radius: 3px;
  ${({ $direction }) => css`
    flex-direction: ${$direction};
  `};
`;

export const Image = styled.img<{ $direction: Direction }>`
  aspect-ratio: 1/1;
  ${({ $direction }) => {
    if ($direction === "row") {
      return css`
        height: 100%;
      `;
    }
    return css`
      width: 100%;
    `;
  }}
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fb;
  overflow: hidden;
`;

export const SubDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 50px;
  justify-content: space-between;
  & > :only-child {
    margin: auto 0;
  }
`;

export const Description = styled(SubDescription)`
  flex: 1;
`;

export const MainTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  ${OneLineEllipsis}
`;

export const Title = styled.p`
  font-size: 14px;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.2;
`;

export const Rating = styled.div`
  display: flex;
  gap: 3px;
`;

export const Circle = styled.div<{ $paint: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #d9d8d8;
  ${({ $paint }) =>
    $paint &&
    css`
      background-color: #fcc630;
    `}
`;

export const Label = styled.p`
  font-size: 12px;
  color: #c7c7c8;
  ${OneLineEllipsis}
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e4e5;
`;

export const Name = styled.p`
  font-size: 12px;
  color: #cdcdce;
  padding: 0 5px;
  border-left: 1px solid #cdcdce;
`;

export const Inform = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Highlight = styled.p`
  font-size: 14px;
  color: #e7928d;
`;

export const CrossOut = styled.p`
  font-size: 12px;
  color: #cdcdce;
  text-decoration: line-through;
`;

export const RatingDescription = styled.p`
  font-size: 14px;
  color: #555;
  ${OneLineEllipsis}
`;
