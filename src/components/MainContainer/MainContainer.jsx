import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { isSidebarShowState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);

    return (
        <div css={S.SContainer(isSidebarShow)}>
            {children}
        </div>
    );
}

export default MainContainer;