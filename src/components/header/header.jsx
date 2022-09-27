import React from "react";
import moment from "moment";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { CurrentDateTime } from "../dates/current.datetime.component"
import { CurrentMoment } from "../dates/current.moment"
import { SystemLogin } from "./systemLogin";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./navLinksMobile";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

// var phoenix      = moment.tz(CurrentMoment, "America/Phoenix");
// var toronto      = phoenix.clone().tz("America/Toronto");
// var ftlauderdale = phoenix.clone().tz("America/Miami");

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <SystemLogin />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
