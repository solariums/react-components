import styled, { css } from 'styled-components';
import { Color, clearFixMixin } from 'src/style';

export const Outer = styled.div`
    height: 8px;
`;
export const Inner = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid ${Color.border.default};
    border-radius: 6px;
    background: ${Color.bg.white};
`;
export const Bg = styled.div`
    background: ${Color.bg.blue};
    height: 100%;
    border-radius: 6px;
    transition: width 0.5s;
    position: relative;

    ${({ percent }) => css`
        width: ${percent}%;
    `};
`;
export const CurrentText = styled.span`
    position: absolute;
    right: 0;
    top: -17px;
`;

export const TextWrap = styled.span`
    position: relative;
    height: 18px;
    line-height: 18px;

    ${clearFixMixin};
`;

export const EndText = styled.span`
    float: right;
`;
