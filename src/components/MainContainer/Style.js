import { css } from "@emotion/react";

export const SContainer = (isShow) => {
    return css`
        position: absolute;
        transition: all 0.8s ease;
        z-index: -1;
        left: ${isShow ? "270px" : "60px"};
        border-radius: 10px;
        width: ${isShow ? "734px" : "944px"};
        height: 560px;
        background-color: #fafafa;
    `;
};