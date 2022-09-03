import React from "react";
import { Container, Layout, LayoutInner } from "./components/Layout";
import Navbar from "./components/Navbar";
import Shapes from "./components/BackgroundShapes/Shapes";
import { FlexLeft, FlexRight, Image } from "./components/FlexSplit";
import { Heading, Paragraph, SubHeading, Button } from "./utils/styling";
import landingBuilder from "./images/landing/landing-builder.jpg";
import RightBar from "./components/RightBar";
import FeatureCards from "./components/FeatureCards";
import DevRow from "./components/DevRow";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Layout>
        <LayoutInner>
          <Navbar />
          <Shapes />
          <Container>
            <FlexLeft>
              <Heading style={{ maxWidth: "400px" }}>
                jump start your next web project{" "}
              </Heading>
              <Paragraph>
                A custom layout generator built for developers
              </Paragraph>
              <Button>Launch</Button>
            </FlexLeft>
            <FlexRight>
              <Image src={landingBuilder} alt="landing builder" />
            </FlexRight>
          </Container>
          <RightBar />
        </LayoutInner>

        <LayoutInner>
          <Container style={{ height: "unset" }}>
            <FlexLeft />
            <FlexRight>
              <SubHeading>Don&apos;t Start From Scratch</SubHeading>
              <Paragraph style={{ maxWidth: "400px" }}>
                Begin coding your website without having to set up layouts,
                fonts, colors, or even meta tags
              </Paragraph>
            </FlexRight>
          </Container>

          <FeatureCards
            src1="color"
            src2="layout"
            h1="Custom Colors"
            h2="Build a Layout"
            p1="Set the font and accent colors of your layout"
            p2="Drag and drop any items you want"
          />
          <FeatureCards
            src1="template"
            src2="download"
            h1="Templates"
            h2="Download Files"
            p1="Choose any template you like to quickly get started"
            p2="Downlaod your zipped starter files"
          />
        </LayoutInner>
        <DevRow />
        <Footer />
      </Layout>
    </>
  );
};

export default App;
