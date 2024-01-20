"use client";

import Image from "next/image";
import Page from "@/components/Page";
import Heading from "@/components/Typography/Heading";
import Content from "@/components/Content";
import Text from "@/components/Typography/Text";
import { StatelessButton } from "@/components/Buttons/Buttons";

const LandingPage = function() {

  return (
    <Page className="relative pt-24 pb-24 bg-landing-page">
        {/* <Image
        src="/images/TKY-9.jpg"
        priority
        fill
        alt=""
        sizes="(min-width: 1024px) 1920px, (min-width: 640px) 96px, 512px"
        className="absolute object-cover pointer-events-none select-none grayscale"
        /> */}

      <Content className="">
      

        <Content className="min-h-[50vh]">
          <Content span="sm" className="flex mx-auto">
            <div className="relative w-full h-[400px]">
              <div className="absolute flex justify-between w-full h-full test">
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
          </Content>
        </Content>

        

        <Content span="max" className="min-h-screen bg-black">
          <Heading>What's New?</Heading>
        </Content>
      </Content>
    </Page>
  );
}

export default LandingPage;