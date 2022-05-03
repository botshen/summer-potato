import React, {useEffect} from "react";
import axios from "../../config/axios";
import {Divider, Group, Menu} from "@mantine/core";
import UserButton from "./Avatar";
import {MessageCircle, Settings} from "tabler-icons-react";
import s from "./Home.module.scss";
import {Tomatoes} from "../Tomatoes/Tomatoes";
import {Todos} from "../Todos/Todos";

const Home: React.FC = () => {
    useEffect(() => {
        axios.get("/me");
    }, []);
    return (
        <>
            <header className={s.wrapper}>
                <span className={s.logo}>🥔</span>
                <Group position="right">
                    <Menu
                        withArrow
                        placement="center"
                        control={
                            <UserButton
                                image="https://cdn.jsdelivr.net/gh/botshen/image-hosting@master/20220503/mmexport1651555382560.5fmun0gxe5s0.webp"
                                name="可爱的夏天 😊"
                                email="1065300945@qq.com"
                            />
                        }
                    >
                        <Menu.Label>Application</Menu.Label>
                        <Menu.Item icon={<Settings size={14}/>}>个人设置</Menu.Item>
                        <Menu.Item icon={<MessageCircle size={14}/>}>注销</Menu.Item>
                    </Menu>
                </Group>
            </header>
            <Divider className={s.Divider} my="sm"/>
            <main>
                <Tomatoes/>
                <Todos/>
            </main>
        </>
    )
};

export {Home};
