import s from "./Login.module.scss";
import { Button, PasswordInput, Input } from "@mantine/core";
import { At } from "tabler-icons-react";

function Login() {
  return (
    <div className={s.wrapper}>
      <h2>夏天闹钟登录 ⏰</h2>
      <Input className={s.input} icon={<At />} placeholder="请输入你的用户名" />
      <PasswordInput
        className={s.input}
        placeholder="请输入你的密码"
        required
      />
      <Button className={s.login}>登录</Button>
      <span>如果你没有有账号，请立即注册</span>
    </div>
  );
}

export default Login;
