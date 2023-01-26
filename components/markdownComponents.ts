import { Divider, Heading, Text } from "@chakra-ui/react";
import withStyle from "../utils/withStyle";

const BaseHeading = withStyle(Heading, {
  marginBlockStart: '1rem',
});

const h1 = withStyle(BaseHeading, {
  fontSize: { base: '2.5rem !important', lg: '3rem !important' },
});

const h2 = withStyle(BaseHeading, {
  fontSize: { base: '2rem !important', lg: '2.5rem !important' },
});

const h3 = withStyle(BaseHeading, {
  fontSize: { base: '1.67rem !important', lg: '2rem !important' },
});

const h4 = withStyle(BaseHeading, {
  fontSize: { base: '1.5rem !important', lg: '1.67rem !important' },
});

const h5 = withStyle(BaseHeading, {
  fontSize: { base: '1.3rem !important', lg: '1.5rem !important' },
});

const h6 = withStyle(BaseHeading, {
  fontSize: { base: '1.1rem !important', lg: '1.3rem !important' },
});

const p = withStyle(Text, {
  marginBlockStart: '1rem',
  fontSize: { base: '18px', lg: '24px' },
});

const hr = withStyle(Divider, {
  color: 'gray.300',
});

const markdownComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
}

export default markdownComponents;
