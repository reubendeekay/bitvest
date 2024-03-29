import React from "react";
import Text from "../../common/components/Text";
import { Fade } from "react-awesome-reveal";
import Heading from "../../common/components/Heading";
import NextImage from "../../common/components/NextImage";
import Container from "../../common/components/UI/Container";
import Button from "../../common/components/Button";
import FeatureBlock from "../../common/components/FeatureBlock";
import { WalletFeatures } from "../../common/data";
import SectionWrapper, { ContentWrapper } from "./walletSection.style";
import WalletImg from "../../common/assets/image/cryptoModern/illustration2.png";
import BtnIcon1 from "../../common/assets/image/cryptoModern/apple.png";
import BtnIcon2 from "../../common/assets/image/cryptoModern/playstore.png";

const WalletPortal = () => {
  return (
    <SectionWrapper id="wallet">
      <Container>
        <ContentWrapper>
          <div className="image">
            <NextImage src={WalletImg} alt="Wallet Image" />
          </div>
          <div className="content">
            <Heading content="Our wallet is built for the investor  beginner" />
            <Text content="Be in the loop of your investment and tracking." />
            <div className="walletfeatures">
              <Fade up>
                {WalletFeatures.map((feature, index) => (
                  <FeatureBlock
                    key={`feature_point-${index}`}
                    icon={<img src={feature.icon?.src} />}
                    iconPosition="left"
                    title={<Text content={feature.title} />}
                  />
                ))}
              </Fade>
            </div>
            {/* <div className="btnGroups">
              <Button
                title="APP STORE"
                variant="textButton"
                icon={<img src={BtnIcon1?.src} />}
                iconPosition="left"
                className="appStore"
              />
              <Button
                title="PLAY STORE"
                variant="textButton"
                icon={<img src={BtnIcon2?.src} />}
                iconPosition="left"
                className="playStore"
              />
            </div> */}
            <Text
              className="windowsAllert"
              content="*Windows app coming soon"
            />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletPortal;
