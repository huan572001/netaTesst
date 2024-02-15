import { Button } from "@chakra-ui/react";
import Image from "next/image";
import ScaleComponent from "./components/ScaleComponent";
export default function Home() {
  const listCustomer = [
    "customer1.svg",
    "customer2.svg",
    "customer3.svg",
    "customer4.svg",
    "customer5.svg",
  ];
  return (
    <div className=" mt-[150px] overflow-hidden ">
      {/* intro */}
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full  grid gap-[30px]">
          <div className="mx-auto max-w-[948px] text-center text-neutral-800 text-7xl font-bold ">
            Your trusted Software Development Partner
          </div>
          <div className="mx-auto max-w-[723px] text-center text-stone-500 text-lg font-medium ">
            We help people to grow their business by providing professional and
            powerful digital solution. Our skills and and experience have
            enabled sustainable growth for enterprises of all sizes
          </div>
        </div>
        <div className="w-full mt-16">
          <Image
            src="/svg/webImg.svg"
            alt="img"
            width={1200}
            height={717}
            className="mx-auto"
          />
        </div>
      </div>
      {/* end of intro */}
      {/* Build Exclusively*/}
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full  bg-indigo-600 rounded-2xl px-52 py-28 ">
          <div className="grid gap-5   pb-20">
            <div className="text-amber-200 text-sm font-bold">
              CUSTOMIZATION
            </div>
            <div className="flex justify-between flex-wrap gap-4">
              <div className=" text-white text-6xl font-bold">
                Build
                <br />
                Exclusively
              </div>
              <div className="max-w-[566px] text-gray-200 text-lg font-medium font-['DM Sans'] leading-7">
                We are skilled at comprehending your specific needs and turning
                them into efficient solutions that not only meet but also
                surpass your expectations. Our dedication to customization and
                optimization guarantees that we provide products that are
                specifically designed for your requirements, ultimately leading
                to outstanding value and customer satisfaction.
              </div>
            </div>
          </div>
          <div className="relative flex">
            <div className="w-fit h-fit bg-white rounded-2xl py-10 px-11">
              <div>
                <div className="grid gap-4">
                  <div className=" text-gray-800 text-2xl font-bold">
                    Performance
                  </div>
                  <div className=" text-gray-400 text-sm font-medium">
                    Product Sales
                  </div>
                </div>

                <div className="flex gap-[52px]">
                  <div className="grid gap-[26px]">
                    <div className="w-11 h-14 flex items-end gap-2">
                      <div className="w-2.5 h-9  bg-blue-500 rounded-md" />
                      <div className="w-2.5 h-14  bg-violet-500 rounded-md" />
                      <div className="w-2.5 h-11  bg-cyan-400 rounded-md" />
                    </div>
                    <div className=" justify-start items-center gap-0.5 flex">
                      <div className="w-2.5 h-2.5  bg-blue-500 rounded-md" />
                      <div className="text-gray-800 text-xs font-medium">
                        user 1
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-[26px]">
                    <div className="w-11 h-14 flex items-end gap-2">
                      <div className="w-2.5 h-14  bg-blue-500 rounded-md" />
                      <div className="w-2.5 h-[72px]  bg-violet-500 rounded-md" />
                      <div className="w-2.5 h-16  bg-cyan-400 rounded-md" />
                    </div>
                    <div className=" justify-start items-center gap-0.5 flex">
                      <div className="w-2.5 h-2.5  bg-blue-500 rounded-md" />
                      <div className="text-gray-800 text-xs font-medium">
                        user 1
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-[26px]">
                    <div className="w-11 h-14 flex items-end gap-2">
                      <div className="w-2.5 h-16  bg-blue-500 rounded-md" />
                      <div className="w-2.5 h-20  bg-violet-500 rounded-md" />
                      <div className="w-2.5 h-[70px]  bg-cyan-400 rounded-md" />
                    </div>
                    <div className=" justify-start items-center gap-0.5 flex">
                      <div className="w-2.5 h-2.5  bg-blue-500 rounded-md" />
                      <div className="text-gray-800 text-xs font-medium">
                        user 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1034px] h-[530px] bg-white rounded-2xl py-14 px-16 absolute right-[-360px] shadow  ">
              <div className="text-neutral-800 text-2xl font-bold">
                Sales Analytics
              </div>
              <Image
                src="/svg/chart.svg"
                alt="chart"
                width={882}
                height={368}
                // className="absolute right-[-300px] top-[-50px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/*end of Build Exclusively*/}
      {/* Leadership and Teamwork */}
      <div className="max-w-[1200px] mx-auto mt-[364px] ">
        <div className="text-blue-500 text-sm font-bold mb-6 max-[1042px]:text-center">
          AMAZINNG WOKRS
        </div>
        <div className="flex justify-between flex-wrap max-[1042px]:justify-center gap-4">
          <div className=" w-[426px] max-[1042px]:text-center">
            <div className="text-neutral-800 text-6xl font-bold mb-5 ">
              Leadership and Teamwork
            </div>
            <div className=" text-stone-500 text-base font-medium ">
              {`Our company's strength lies in its exceptional leadership,
            characterized by visionary decision-making and the ability to inspire
            and guide teams toward achieving common goals. Additionally, our
            commitment to fostering a culture of teamwork allows us to leverage
            the collective skills and expertise of our employees to drive
            innovation and deliver outstanding results`}
            </div>
          </div>
          <div className="flex gap-8 flex-wrap">
            <div>
              <Image
                src="/connect.png"
                alt="connect"
                width={194}
                height={294}
                className="rounded-xl"
              />
            </div>
            <Image
              src="/TT.png"
              alt="connect"
              width={350}
              height={452}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="h-[2px] border-2 border-slate-200 my-40"></div>
      </div>

      {/* End of Leadership and Teamwork */}

      {/* Create Sensational Digital Products */}
      <div className="max-w-[1200px] mx-auto flex justify-between max-[1188px]:justify-center flex-wrap gap-4">
        <div className="w-[585px] h-[408px] p-14 bg-white rounded-2xl  border grid gap-10 ">
          <div className="grid gap-4">
            <div className="text-neutral-800 text-3xl font-bold leading-9">
              Statistic
            </div>
            <div className="text-red-300 text-base font-bold leading-tight">
              Neta lab offers the best IT services
            </div>
          </div>
          <div className="flex justify-between">
            <div className="grid gap-6">
              <Image
                src="/svg/holder.svg"
                alt="holder"
                width={48}
                height={48}
              />
              <div className="grid gap-2">
                <div className="text-gray-400 text-sm font-bold leading-none">
                  Engagement
                </div>
                <div className="w-40 text-neutral-800 text-5xl font-bold leading-10">
                  20k
                </div>
                <div className=" w-36 h-6 p-1 bg-slate-50 rounded flex justify-center items-center gap-1">
                  <Image
                    src="/svg/up.svg"
                    alt="iconUp"
                    width={16}
                    height={16}
                  />
                  <div className="flex gap-0.5 text-sm font-bold leading-none">
                    <span className="text-green-200 ">35.9%</span>
                    <span className="text-gray-400 ">this week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-px h-44 relative bg-zinc-100 rounded-sm" />
            <div className="grid gap-6">
              <Image
                src="/svg/holder2.svg"
                alt="holder"
                width={48}
                height={48}
              />
              <div className="grid gap-2">
                <div className="text-gray-400 text-sm font-bold leading-none">
                  People reached
                </div>
                <div className="w-40 text-neutral-800 text-5xl font-bold leading-10">
                  256k
                </div>
                <div className=" w-36 h-6 p-1 bg-slate-50 rounded flex justify-center items-center gap-1">
                  <Image
                    src="/svg/up.svg"
                    alt="iconUp"
                    width={16}
                    height={16}
                  />
                  <div className="flex gap-0.5 text-sm font-bold leading-none">
                    <span className="text-green-200 ">12.4%</span>
                    <span className="text-gray-400 ">this week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[560px] max-[1188px]:text-center">
          <div className="text-violet-500 text-sm font-bold leading-tight mb-6">
            STUNNING PRODUCT
          </div>
          <div className="text-neutral-800 text-6xl font-bold mb-5 leading-[60px]">
            Create Sensational Digital Products
          </div>

          <div className=" text-stone-500 text-base font-medium leading-relaxed">
            {`The core of our company's success is our capacity to produce
            remarkable digital products that capture and immerse users. By
            integrating advanced technology, creative design, and user-focused
            strategies, we provide digital solutions that surpass expectations
            and stimulate business expansion. Our dedication to achieving
            excellence in digital product development distinguishes us and
            guarantees that we provide influential and unforgettable experiences
            for our clients.`}
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto h-[2px] border-2 border-slate-200 my-40"></div>

      {/* End of Create Sensational Digital Products */}

      {/*Here we share our process */}
      <div className="relative h-56">
        <div className="w-full absolute top-[75px]">
          <div className="flex justify-between max-w-[1440px] mx-auto ">
            <Image
              src="/svg/process1.svg"
              alt="process1"
              width={120}
              height={120}
            />
            <Image
              src="/svg/process2.svg"
              alt="process2"
              width={400}
              height={120}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className=" text-center text-neutral-800 text-7xl font-bold">
              Here we share
              <br />
              our process
            </div>
            <Image
              src="/svg/signature.svg"
              alt="signature"
              width={112}
              height={108}
              className="absolute top-[95px] left-[-60px]"
            />
            <Image
              src="/svg/star2.svg"
              alt="signature"
              width={46}
              height={46}
              className="absolute bottom-[-50px] right-[-30px] "
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex   max-lg:flex-wrap lg:justify-between justify-center mt-28 items-start gap-4">
        <Image src="/svg/star.svg" alt="signature" width={72} height={72} />
        <div>
          <div className=" text-slate-200 text-7xl font-bold mb-5">01</div>
          <div className="max-w-96 min-w-72 text-neutral-800 text-6xl font-bold mb-6">
            Proof of concept
          </div>
          <div className="max-w-96 min-w-72 text-stone-500 text-base font-medium">
            <span>
              Proof of concept (POC) involves testing an idea to demonstrate its
              effectiveness. POC assists in:
            </span>
            <ul className="list-disc list-inside">
              <li className="pl-2">
                Collecting comprehensive research and evidence to demonstrate
                the superiority of your product.
              </li>
              <li className="pl-2">
                Identifying and addressing any errors before launching it in the
                market.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className=" text-slate-200 text-7xl font-bold mb-5">02</div>
          <div className="max-w-96 h-32 text-neutral-800 text-6xl font-bold mb-4">
            Prototype
          </div>
          <div className="max-w-96 text-stone-500 text-base font-medium">
            <span>
              Creating a prototype is a crucial stage in transforming an idea
              into a tangible concept.
            </span>
            <span>Prototyping allows you to:</span>
            <ul className="list-disc list-inside">
              <li className="pl-2">
                Mimic both existing and potential products.
              </li>
              <li className="pl-2">
                Entice customers to invest in your product.
              </li>
              <li className="pl-2">
                Evaluate the accuracy of designs and rectify any errors prior to
                production.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className=" text-slate-200 text-7xl font-bold mb-5 ">03</div>
          <div className="max-w-96 h-32 text-neutral-800 text-6xl font-bold mb-4">
            MVP
          </div>
          <div className="max-w-96 text-stone-500 text-base font-medium">
            <span>
              A minimum viable product, also known as an MVP, is a product that
              includes sufficient features to entice early adopters and swiftly
              validate a product concept. The MVP provides the following
              benefits:
            </span>
            <ul className="list-disc list-inside">
              <li className="pl-2">
                Preserves resources by ensuring the success of the project.
              </li>
              <li className="pl-2">
                Expedites the release of a product to the market.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-around flex-wrap gap-4 mt-24">
        <Image src="/svg/home1.svg" alt="home1" width={250} height={250} />
        <Image src="/svg/home2.svg" alt="home2" width={250} height={170} />
      </div>
      {/*End of Here we share our process */}
      {/* build something great together */}

      <div className="max-w-[1200px] mx-auto h-[2px] border-2 border-slate-200 my-40"></div>
      <div className="max-w-[1200px] mx-auto grid justify-center mb-44 relative">
        <Image
          src="/svg/star3.svg"
          alt="signature"
          width={74}
          height={74}
          className="absolute top-12 left-12 "
        />
        <Image
          src="/svg/star4.svg"
          alt="signature"
          width={74}
          height={74}
          className="absolute top-40 right-12 "
        />
        <div className="text-neutral-800 text-7xl font-bold mb-5">
          Let’s build something
          <br />
          great together!
        </div>
        <div className=" text-stone-500 text-base font-medium ">
          Whatever your ambition, we’d love to design and build your next big
          idea
          <br />
          or lend a hand on an existing one.
        </div>
        <div className="flex items-end gap-3 mb-[60px]">
          <div className="flex mb-[10px]">
            {listCustomer?.map((e, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-full w-[72px] h-[72px] ml-[-12px] hover:scale-105 cursor-pointer"
                >
                  <Image
                    src={`/svg/${e}`}
                    alt={e}
                    width={70}
                    height={70}
                    className="hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-neutral-800 text-4xl font-bold">+28k</div>
            <div className="text-gray-400 text-sm font-bold">
              happy customer
            </div>
          </div>
        </div>
        <Button className="w-48 h-11 px-6 bg-blue-500 text-white text-base font-bold rounded-[4px] hover:scale-95">
          Download our demo
        </Button>
      </div>
      {/* End of build something great together */}
    </div>
  );
}
