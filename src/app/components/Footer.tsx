import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-slate-50 pt-[116px] w-full">
      <div className="max-w-[1200px] mx-auto ">
        <div className="sm:flex grid sm:justify-between justify-center  items-start flex-wrap gap-4">
          <Image src="/svg/logo2.svg" alt="logoNata" width={61} height={61} />
          <div className="grid gap-[22px]">
            <div className="text-blue-500 text-base font-bold">Services</div>
            <div className="text-neutral-800 text-base font-medium grid gap-4">
              <span>Web App Development</span>
              <span>Mobile App Development</span>
              <span>Software Development</span>
            </div>
          </div>
          <div className="grid gap-[22px]">
            <div className="text-blue-500 text-base font-bold">Help</div>
            <div className="text-neutral-800 text-base font-medium grid gap-4">
              <span>FAQs</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className="grid gap-[22px]">
            <div className="text-blue-500 text-base font-bold">About</div>
            <div className="text-neutral-800 text-base font-medium grid gap-4">
              <div>
                <div>Email</div>
                <div className="opacity-50 font-medium">
                  contact@netalabs.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 text-gray-400 text-base font-medium py-24">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
