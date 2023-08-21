import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import MainContainer from '../../components/MainContainer/MainContainer';
import Header from '../../components/MainContainer/Header/Header';
import AddNewTaskButton from '../../components/Buttons/AddNewTaskButton/AddNewTaskButton';
import TaskList from '../../components/Lists/TaskList/TaskList';


function Today(props) {

    return (
        <MainContainer>
            <Header title={"Today"} count={5}/>
            <AddNewTaskButton />
            <TaskList />
        </MainContainer>
    );
}

export default Today;