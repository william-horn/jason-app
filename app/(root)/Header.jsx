import Image from "next/image";
import Content from "@/components/Content";
import Heading from "@/components/Typography/Heading";
import { StatefulLink } from "@/components/Buttons/Buttons";
import { getResponsiveTextSize } from "@/libs/utils/responsiveStyles";
import mergeClass from "@/libs/utils/mergeClass";

const NavLink = function({
  children,
  className: importedClassName={},
  ...rest
}) {

  return (
    <StatefulLink
    className={mergeClass({
      self: `${getResponsiveTextSize('md')} transition-all whitespace-nowrap px-3 bg-transparent hover:bg-navbar-button-primary-hover rounded-none font-gf-2`,
      __locallySelected: {
        self: "bg-transparent hover:bg-navbar-button-primary-selected-hover transition-all underline text-[#a2b5ff]",
      } 
    }, importedClassName)}
    {...rest}>
      {children}
    </StatefulLink>
  );
}

const RootHeader = function() {

  return (
    <header className="sticky top-0 bg-landing-page-header-and-footer z-[999]">
      <Content span="max" className="flex flex-col items-center justify-between gap-4 p-4 mx-auto md:flex-row">

        <Content className="flex items-center gap-4 w-fit">
          {/* <div className="relative w-[52px] h-[52px]">
            <Image
            src="/images/TKY-1-transparent-2.png"
            fill
            alt=""
            sizes="480px"
            className="object-cover pointer-events-none"
            />
          </div> */}
          <a href="/">
            <Heading textSize="2xl" className="font-bold tracking-wider font-gf-1 w-fit"><span className="text-[#bf0303]">N</span>ilhemoth</Heading>
          </a>
        </Content>

        <nav className="flex flex-wrap justify-center">
          <NavLink leftIcon="/icons/home_icon.svg" href="/">Home</NavLink>
          <NavLink leftIcon="/icons/menu_book_icon.svg" href="/about">About</NavLink>
          <NavLink leftIcon="/icons/world_icon.svg" href="/news">News & Updates</NavLink>
        </nav>

        {/* <div className="relative w-full h-[300px] max-w-[1200px] mx-auto">
          <Image
          src="/images/TKY-9-top.jpg"
          fill
          alt=""
          className="object-cover pointer-events-none"
          />
        </div> */}
      </Content>
    </header>
  );
}

export default RootHeader;