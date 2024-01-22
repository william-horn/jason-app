

import Image from "next/image";
import Page from "@/components/Page";
import Heading from "@/components/Typography/Heading";
import Content from "@/components/Content";
import Text from "@/components/Typography/Text";
import { StatelessButton } from "@/components/Buttons/Buttons";

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

      <Content className="min-h-[50vh] xl:pt-24 md:pt-16 pt-10 pb-24">
        <Content span="md" className="flex flex-col items-center justify-between px-[5%] mx-auto xl:flex-row gap-4">
          <Content className="relative flex flex-col items-center flex-1 gap-3 pb-10 md:flex-row xl:pb-0">
            {/* <div className="absolute w-full h-full test shadow-black"></div> */}

            <div className="relative min-w-[234px] h-[300px]">
              <Image
              src="/images/TKY-1-transparent-2.png"
              fill
              alt=""
              className="pointer-events-none "
              />
            </div>
            
            <div className="relative flex flex-col gap-3 p-3 min-w-[250px]">
              <Heading textSize="4xl" className="md:text-left text-center font-gf-2 md:ml-[-2rem] ml-0 text-muted">Welcome!</Heading>
              <Content className="flex flex-col gap-2">
                <Text className="text-center md:text-left">This new exciting game is still in beta, but we encourage you to sign up through our mailing list today!</Text>
                <Text className="text-center md:text-left">Begin the journey of dreaming today.</Text>
              </Content>
              {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos suscipit voluptates quae repellendus libero.</Text>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing.</Text> */}
            </div>
    
          </Content>

          <Content className="w-[45%] min-w-[270px] max-w-[400px] py-6 px-6 flex flex-col justify-center gap-4 bg-primary-inset shadow-md shadow-black max-h-[350px]">
            <div>
              <Heading textSize="2xl" className="text-white font-gf-2">Sign Up!</Heading>
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
                self: "font-bold px-2 py-1 bg-[#5e5ecf] hover:bg-[#7777df]"
              }}
              >
                Submit
              </StatelessButton>
            </div>

            <Text textSize="xs" className="text-center text-muted">There are currently 3 active users!</Text>
          </Content>
        </Content>
      </Content>

      <Content span="max" className="min-h-screen bg-primary-inset">
        <Content>
          {/* <div className="relative w-[494px] h-[640px]">
            <Image
              src="/images/TKY-9.jpg"
              fill
              alt=""
            />
          </div> */}
        </Content>
      </Content>
    </Page>
  );
}

export default LandingPage;