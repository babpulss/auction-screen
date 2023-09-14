import Avatar from "../profile/Avatar";

export default function LeftBidder() {
  return (
    <div className="border flex-col m-1">
      <div className="flex border justify-end items-center h-1/6">
        <div>포인트</div>
        <div className="mx-3 ">1000</div>
      </div>
      <div className="grid grid-cols-6 gap-2 mx-3 content-center h-5/6">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
}
