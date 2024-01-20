"use client";

import Image from "next/image";
import Page from "@/components/Page";
import Heading from "@/components/Typography/Heading";
import Content from "@/components/Content";
import Text from "@/components/Typography/Text";
import { StatelessButton } from "@/components/Buttons/Buttons";

const LandingPage = function() {

  return (
    <Page className="relative flex flex-col gap-20 pt-24 pb-24 bg-landing-page">


      <Content span="sm" className="flex mx-auto">
        <div className="relative w-full h-[400px]">
          {/* <Image
          src="/images/TKY-2.jpg"
          fill
          alt=""
          className="absolute object-cover pointer-events-none "
          /> */}
          <div className="absolute flex justify-between w-full h-full bg-primary test">
            <Content className="w-[60%] m-4 overflow-auto">
              <div className="flex flex-col gap-2 w-[80%]">
                <Heading textSize="4xl" className="font-bold text-left font-gf-2">Welcome!</Heading>
                <Text className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio sed repellat error sequi temporibus eos, aut quaerat quo expedita?</Text>
                <Text className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa commodi libero eligendi laboriosam mollitia, placeat qui, quas maxime debitis optio laborum. Saepe asperiores numquam, facilis voluptatibus error illo necessitatibus.</Text>
                <Text className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus perspiciatis illo, itaque reiciendis eligendi?</Text>
              </div>
            </Content>

            <Content className="w-[35%] py-4 px-6 flex flex-col justify-center gap-4 mb-5">
              <div>
                <Heading textSize="2xl" className="font-gf-2">Sign Up!</Heading>
                <Text className="text-sm font-light text-center text-muted">Join our mailing list by entering your email below. This will let you hear about the latest project updates!</Text>
              </div>

              <div className="flex gap-2">
                <div className="flex w-full p-2 bg-transparent border-b-[1px] border-b-white">
                  <input
                  autoComplete="email"
                  placeholder="Email"
                  type="email"
                  className="w-full text-white font-gf-2"
                  />
                </div>
                <StatelessButton
                className={{
                  self: "rounded-none font-bold px-2 py-1 bg-red-500 hover:bg-red-800"
                }}
                >
                  Submit
                </StatelessButton>
              </div>

              <Text>There are currently 3 active users!</Text>
            </Content>
          </div>
        </div>

        {/* <Content span="max" className="p-3 bg-black font-gf-2">
          <Heading textSize="xl">Sign Up!</Heading>
        </Content> */}
      </Content>

      <Content span="max" className="bg-black h-[50vh]">
        <Heading>What's New?</Heading>
      </Content>
    </Page>
  );
}

export default LandingPage;