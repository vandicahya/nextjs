import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Partner />
    </>
  );
}
