// eslint-disable-file no-use-before-define 
import React from "react";
import { importSvg } from "design-system-old";
import styled from "styled-components";
import { Text } from "design-system";
const AppsmithLogo = importSvg(
  async () => import("assets/svg/appsmith-logo-no-pad.svg"),
);

const Wrapper = styled.span`
  border-radius: var(--ads-v2-border-radius);
  border: 1px solid var(--ads-v2-color-border);
  background-color: var(--ads-v2-color-bg);

  svg {
    margin-top: 2px;
  }
`;

function BrandingBadge() {
  return (
    // <Wrapper className="">
    //   <Text renderAs="h4">Built on</Text>
    //   <AppsmithLogo className="w-auto h-3" />
    // </Wrapper>
    <></>
  );
}

export default BrandingBadge;
