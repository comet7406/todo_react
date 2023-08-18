import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiCalendar } from 'react-icons/hi';
import * as S from "./Style";
import { useLocation } from 'react-router-dom';

function List({ title, list }) {
    const location = useLocation();
    const pathName = location.pathname.split("/")[1];
    

    return (
        <div css={S.SLayout}>
            <h2 css={S.STitle}>{title}</h2>
            <ul css={S.SListContainer}>
                {list.map(item => {
                    const isSelected = pathName.toLowerCase() === item.name.toLowerCase();
                    return (
                        <li css={S.SListBox(isSelected)}>
                            <HiCalendar />
                            <span css={S.SListName(isSelected)}>{item.name}</span>
                            {!!item.count && (<div css={S.SCount(isSelected)}>{item.count}</div>)}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default List;