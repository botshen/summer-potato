import s from "./Login.module.scss";
import { Button, PasswordInput, Input } from "@mantine/core";
import { Ghost } from "tabler-icons-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={s.wrapper}>
      <h2>夏天闹钟登录 ⏰</h2>
      <Input
        className={s.input}
        icon={<Ghost />}
        placeholder="请输入宝宝的名字"
      />
      <PasswordInput
        className={s.input}
        placeholder="请输入宝宝的密码"
        required
      />
      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        className={s.login}
      >
        登录
      </Button>
      <span>宝宝没有有账号? <Link to="/signup">注册</Link> 一个吧😄</span>
    </div>
  );
}

export default Login;
