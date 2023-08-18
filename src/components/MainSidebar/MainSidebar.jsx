import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import Header from './Header/Header';
import List from './List/List';

function MainSidebar(props) {
    const [ isShow, setIsShow ] = useState(false);

    const handleMenuToggleClick = () => {
        setIsShow(!isShow);
    }

    const [ mainMenuListArray, setMainMenuListArray ] = useState({
        tasks: [
            {
                icon: "",
                name: "Upcoming",
                count: 12
            },
            {
                icon: "",
                name: "Today",
                count: 5
            },
            {
                icon: "",
                name: "Calendar",
                count: 0
            },
            {
                icon: "",
                name: "Sticky Wall",
                count: 0
            },
        ],
        lists: [
            {
                icon: "",
                name: "Personal",
                count: 0
            },
            {
                icon: "",
                name: "Work",
                count: 0
            },
            {
                icon: "",
                name: "List 1",
                count: 0
            }
        ]
    });

    return (
        <div css={S.SLayout(isShow)}>
            <Header isShow={isShow} menuToggleOnClick={handleMenuToggleClick}/>
            {isShow && (
                <>
                    <List title={"TASKS"} list={mainMenuListArray.tasks}/> 
                    <List title={"LISTS"} list={mainMenuListArray.lists}/> 
                </>
            )}
        </div>
    );
}

export default MainSidebar;