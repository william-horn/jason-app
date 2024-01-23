


import Image from "next/image";
import Page from "@/components/Page";
import Heading from "@/components/Typography/Heading";
import Content from "@/components/Content";
import Text from "@/components/Typography/Text";
import { StatelessButton } from "@/components/Buttons/Buttons";

import SignUpForm from "./SignUpForm";

import Email from "@/models/email/email";
import connectMongoDB from "@/libs/db/mongodb";
import { toSimpleArray } from "@/libs/utils/api-utils";

const postEmail = async (email) => {
  "use server";

  await connectMongoDB();

  const original = await Email.create({
    email
  });

  console.log(original);

  return toSimpleArray(original);
}

const getEmailCount = async () => {
  "use server";

  await connectMongoDB();

  const count = await Email.countDocuments();

  return count;
}

const LandingPage = function() {

  return (
    <Page className="relative pb-24 bg-landing-page">
        {/* <Image
        src="/images/TKY-9.jpg"
        priority
        fill
        alt=""
        sizes="(min-width: 1024px) 1920px, (min-width: 640px) 96px, 512px"
        className="absolute object-cover pointer-events-none select-none grayscale"
        /> */}

      <Content className="min-h-[50vh] xl:pt-24 md:pt-16 pt-10 pb-24 test">
        {/* <div className="absolute w-full">
          <Image
          src="/images/TKY-9-top.jpg"
          fill
          className="object-cover"
          />
        </div> */}
        <Content span="md" className="flex flex-col items-center justify-between px-[5%] mx-auto xl:flex-row gap-4">
          <Content className="relative flex flex-col items-center flex-1 gap-3 pb-10 md:pb-0 md:flex-row xl:pb-0">
            {/* <div className="absolute w-full h-full test shadow-black"></div> */}

            <div className="relative min-w-[234px] h-[300px]">
              <Image
              src="/images/TKY-1-transparent-2.png"
              fill
              alt=""
              className="pointer-events-none drop-shadow-logo-second-half"
              />
            </div>
            
            <div className="relative flex flex-col gap-3 p-3 min-w-[250px]">
              <Heading textSize="4xl" className="md:text-left text-center font-gf-2 md:ml-[-2rem] ml-0 text-orange-400">Welcome!</Heading>
              <Content className="flex flex-col gap-2">
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos suscipit voluptates quae repellendus libero.</Text>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing.</Text>
              </Content>
            </div>
    
          </Content>

          <SignUpForm postEmail={postEmail} countEmails={getEmailCount}/>
        </Content>
      </Content>

      {/* <Content span="max" className="flex min-h-screen bg-primary-inset">

        <Content className="flex flex-col gap-5 p-5 pl-10 w-fit w-[467px]">
          <Content className="">
            <Heading textSize="3xl" className="font-gf-2">Lorem</Heading>
          </Content>

          <Content className="flex items-start">
            <div className="relative w-[374px] h-[480px] xl:w-[467px] xl:h-[600px]">
              <Image
                src="/images/TKY-6.jpg"
                fill
                alt=""
                className="rounded-lg shadow-lg shadow-black"
              />
            </div>
          </Content>

          <Content className="">
            <Text textSize="md" className="text-center font-gf-1">orem ipsum dolor sit amet consectetur adipisicing elpe, incidunt consequuntur quod illo quis neque ad, harum soluta!</Text>
          </Content>
        </Content>
      </Content> */}

      <Content className="h-[200px] flex items-center justify-center">
        <Content className="flex flex-col gap-4">
          <Heading textSize="3xl" className="font-gf-2">Coming Soon!</Heading>
          <Text className="text-center text-muted">To keep up with the latest updates, consider submitting your email in the sign up form above.</Text>
          <Text className="text-center text-muted">This website is still being developed, so stay tuned for new content!</Text>
        </Content>
      </Content>
    </Page>
  );
}

export default LandingPage;