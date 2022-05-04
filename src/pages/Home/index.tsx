import React from "react";
import Add from "../../assets/svg/add";
import Button from "../../Components/Common/Button";
import s from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={s.content}>
      <Button title="Добавить слово" handleClick={() => {}}>
        <Add style={"background-color: rgb(67, 176, 92)"} />
      </Button>
    </div>
  );
};

export default Home;
