import Image from "next/image";
export default function Avatar() {
  return (
    <div>
      <Image
        className="rounded-full"
        src="/avatar.jpg"
        width="90"
        height="90"
        alt=""
      />
      <p className="text-center ">이름</p>
    </div>
  );
}
