import notion from "@/assets/notion.png";
import google from "@/assets/google.png";
import monday from "@/assets/monday.png";
import slack from "@/assets/slack.png";
import trello from "@/assets/trello.png";
import Image from "next/image";

const Partner = () => {
  const imageData = [notion, google, monday, slack, trello];
  return (
    <div className="max-w-full bg-white_primary">
      <div className="flex justify-evenly gap-28 max-w-screen-lg m-auto py-12">
        {imageData.map((item, key) => (
          <div>
            <Image src={item}></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
