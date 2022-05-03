import s from "./SignUp.module.scss";
import { Button, PasswordInput, Input } from "@mantine/core";
import { Ghost } from "tabler-icons-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className={s.wrapper}>
      <h2>夏天闹钟注册 ⏰</h2>
      <Input
        className={s.input}
        icon={<Ghost />}
        placeholder="请输入宝宝的名字"
      />
      <PasswordInput
        className={s.input}
        placeholder="输入宝宝的密码"
        required
      />
      <PasswordInput
        className={s.input}
        placeholder="再次输入宝宝的密码"
        required
      />
      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        className={s.SignUp}
      >
        注册
      </Button>
      <span>
        如果宝宝有账号，<Link to="/login">登录</Link>吧
      </span>
    </div>
  );
}

export default SignUp;
