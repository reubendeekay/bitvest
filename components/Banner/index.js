import React from "react";
import { Fade } from "react-awesome-reveal";
import Text from "../../common/components/Text";
import NextImage from "../../common/components/NextImage";
import Button from "../../common/components/Button";
import Heading from "../../common/components/Heading";
import Container from "../../common/components/UI/Container";
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from "./banner.style";

import bannerImg from "../../common/assets/image/cryptoModern/banner-bg.png";

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <DiscountLabel>
              <Text className="discountAmount" content="25% Discount" />
              <Text
                className="discountText"
                content="on every first project "
              />
            </DiscountLabel>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="The next level  cryptocurrency investments"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="Trusted trading partners guaranteeing you an increasing investment returns in multiple folds with tested, verified and fool proof methods." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="INVEST" />
              <Button
                className="text"
                variant="textButton"
                title="WHITE PAPER"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
