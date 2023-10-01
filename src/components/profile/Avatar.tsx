import Image from "next/image";
import style from "./Avatar.module.css";
import { useState } from "react";
export default function Avatar() {
  const [state, setState] = useState(false);

  const onClickHandler = () => {
    setState((prev) => !prev);
  };

  return (
    <div>
      <Image
        onClick={onClickHandler}
        className={`"rounded-full" ${state ? style.avatar : ""}`}
        src="/avatar.jpg"
        width="90"
        height="90"
        alt=""
      />
      <p className="text-center ">이름</p>
    </div>
  );
}
