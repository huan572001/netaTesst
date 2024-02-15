import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-between items-center mt-8 w-[1440px]">
        <Image src="/svg/logo.svg" alt="logoNata" width={125} height={44} />
        <div className=" justify-start items-center gap-8 hidden sm:inline-flex">
          <div className="text-neutral-800 text-lg font-medium leading-relaxed">
            About us
          </div>
          <div className="text-neutral-800 text-lg font-medium leading-relaxed">
            Process
          </div>
          <div className="text-neutral-800 text-lg font-medium leading-relaxed">
            Contact us
          </div>
          <div className="text-neutral-800 text-lg font-medium leading-relaxed">
            Download
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
