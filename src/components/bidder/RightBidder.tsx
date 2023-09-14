import Avatar from "../profile/Avatar";

type Own = {
  position: string;
};

export default function RightBidder({ position }: Own) {
  return (
    <div className="border m-1">
      <div className="px-1 h-4">{position}</div>
      <div className="grid grid-cols-6 gap-2 px-5">
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
