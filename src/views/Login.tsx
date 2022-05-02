import s from "./Login.module.scss";
import { Button, PasswordInput, Input } from "@mantine/core";
import { Ghost } from "tabler-icons-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

const userInfo = {
  account: "summer",
  password: "123456",
};

const Login: React.FC = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(userInfo);
  useEffect(() => {
    console.log("sssssss");
  }, []);
  const handleSubmit = async () => {
    const { account, password } = userData;
    try {
      await axios.post("sign_in/user", {
        account,
        password,
      });
      navigate("/");
    } catch (e) {
      throw new Error(e as any);
    }
  };
  return (
    <div className={s.wrapper}>
      <h2>夏天闹钟登录 ⏰</h2>
      <Input
        className={s.input}
        icon={<Ghost />}
        placeholder="请输入宝宝的名字"
        value={userData.account}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserData({ ...userData, account: e.target.value });
        }}
      />
      <PasswordInput
        className={s.input}
        placeholder="请输入宝宝的密码"
        required
        value={userData.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserData({ ...userData, password: e.target.value });
        }}
      />
      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        className={s.login}
        onClick={handleSubmit}
      >
        登录
      </Button>
      <span>
        宝宝没有有账号? <Link to="/signup">注册</Link> 一个吧😄
      </span>
    </div>
  );
};

export { Login };
