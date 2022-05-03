import React from "react";
import {observer} from 'mobx-react-lite'
import {useStore} from '../../store'
import {Checkbox} from '@mantine/core';
import s from './TodoItem.module.scss'

const TodoItem: React.FC = () => {

    return (
        <div className={s.wrapper}>
            <Checkbox
                checked={false}

            />
        </div>
    );
};

export default observer(TodoItem);
