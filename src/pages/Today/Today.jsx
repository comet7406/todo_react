import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import MainContainer from '../../components/MainContainer/MainContainer';
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../store/sidebarStore';

function Today(props) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = () => {
        setIsRightSubSidebar(!isRightSubSidebar);
    }

    return (
        <MainContainer>
            <button onClick={handleOpenClick}>열기</button>
        </MainContainer>
    );
}

export default Today;