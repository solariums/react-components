import styled from 'styled-components';

import Icon from 'src/components/Icon';
import { fadeIn, fadeOut } from 'src/style/animation';
import { Color, FontSize } from 'src/style';

export const animationDuration = 500;
export const animationName = 'uc-fe-animation-fade';

export const LoadingWrap = styled.div`
    position: relative;

    .${animationName}-enter, .${animationName}-appear, .${animationName}-leave, .${animationName}-exit {
        animation-duration: ${animationDuration}ms;
        animation-fill-mode: both;
    }
    .${animationName}-enter, .${animationName}-appear {
        animation-name: ${fadeIn};
    }
    .${animationName}-leave, .${animationName}-exit {
        animation-name: ${fadeOut};
    }
`;

export const Mask = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.4);
`;

export const IndicatorWrap = styled.div`
    display: table;
    width: 100%;
    height: 100%;

    & > div {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
`;

export const LoadingIcon = styled(Icon)`
    font-size: 20px;
    color: ${Color.font.default};
`;

export const ContentWrap = styled.div`
    position: relative;
`;

export const TipWrap = styled.p`
    text-align: center;
    font-size: ${FontSize.sm};
    margin-top: 5px;
`;
