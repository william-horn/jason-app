"use client";

import Content from "@/components/Content";
import { StatelessButton } from "@/components/Buttons/Buttons";
import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";

import { useRef } from "react";
import stringIsEmpty from "@/libs/utils/stringIsEmpty";

const SignUpForm = function(postEmail) {
  const inputRef = useRef(null);

  const onEmailPost = (e) => {
    console.log('submitted', inputRef.current.value);
    if (stringIsEmpty(inputRef.current.value)) return;

    postEmail(inputRef.current.value);
  }


  return (
    <Content className="w-[45%] min-w-[270px] max-w-[400px] py-6 px-6 flex flex-col justify-center gap-4 bg-primary-inset shadow-md shadow-black max-h-[350px]">
    <div>
      <Heading textSize="2xl" className="text-white font-gf-2">Sign Up!</Heading>
      <Text className="text-sm font-light text-center text-muted">Join our mailing list by entering your email below. This will let you hear about the latest project updates!</Text>
    </div>

    <form className="flex gap-2" onSubmit={onEmailPost}>
      <div className="flex w-full p-2 bg-transparent border-b-[1px] border-b-white">
        <input
        ref={inputRef}
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
      type="submit"
      >
        Submit
      </StatelessButton>
    </form>

    <Text textSize="xs" className="text-center text-muted">There are currently 3 active users!</Text>
  </Content>
  );
}

export default SignUpForm;