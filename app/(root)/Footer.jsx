import Link from "next/link";
import Text from "@/components/Typography/Text";
import Heading from "@/components/Typography/Heading";
import Image from "next/image";
import Logo from "@/components/Logo";
import Content from "@/components/Content";

const InfoRow = ({
  name,
  value,
  underline,
  externalLink
}) => {
  return (
    <li className="flex justify-center mt-2 text-center text-muted">
      {
        externalLink 
          ? <a href={externalLink}>
              {name}<span className={`font-normal italic whitespace-nowrap text-hyperlink hover:text-hyperlink-hover ${underline ? 'underline' : ''}`}>{value}</span>
            </a>
          
          : <span>
              {name}<span className={`font-normal italic whitespace-nowrap text-primary ${underline ? 'underline' : ''}`}>
                {value}
              </span>
            </span>
        }
    </li>
  );
}

const InfoSection = ({
  children,
  title
}) => {
  return (
    <div className="min-w-[150px] max-w-[300px]">
      <Heading type="h2" className="text-2xl font-bold text-center text-footer-heading-primary">{title}</Heading>
      <ul>
        {children}
      </ul>
    </div>
  )
}

const RootFooter = function() {

  return (
    <footer className="py-20 bg-landing-page-header-and-footer">
      <Content span="md" className="mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-12 pb-20 w-[70%] mx-auto">

        {/* <InfoSection title="Contributors">
          <InfoRow name="Dev: " value="William J. Horn"/>
          <InfoRow name="Testers: " value="Coming Soon"/>
        </InfoSection> */}

        <InfoSection title="Contact">
          <InfoRow name="Phone: " value="(Not yet available)"/>
          <InfoRow name="Email: " value="comingsoon@gmail.com"/>
          <InfoRow name="Discord Server: " value="https://discord.gg/xxxxx" underline externalLink="https://discord.gg/CJFED5jk"/>
          {/* <InfoRow name="Github" value="https://github.com/william-horn" underline externalLink="https://github.com/william-horn"/> */}
          {/* <InfoRow name="" value="William J. Horn"/> */}
        </InfoSection>

        <InfoSection title="Social">
          <InfoRow name="Instagram: " value="(Not yet available)"/>
          <InfoRow name="Twitter: " value="(Not yet available)"/>
          <InfoRow name="Facebook: " value="(Not yet available)"/>
        </InfoSection>

        <InfoSection title="Resources">
          <InfoRow name="" value="YouTube" underline externalLink="/"/>
          <InfoRow name="" value="Github" underline externalLink="https://github.com/william-horn"/>
          <InfoRow name="" value="Vercel" underline externalLink="https://vercel.com/"/>
        </InfoSection>

      </div>

      <div className="w-[60%] mx-auto flex justify-center flex-col items-center">
        <Heading>Help</Heading>
        <Text className="font-normal leading-8 text-center text-muted text-md">Lorem ipsum dolor sit amet consectetur adipisicing elpe, incidunt consequuntur quod illo quis neque ad, harum soluta!</Text>
      </div>
      </Content>
    </footer>
  );
}

export default RootFooter;