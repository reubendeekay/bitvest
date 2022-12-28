import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme/appModern";
import ResetCSS from "../common/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CountDown from "../components/CountDown";
import Features from "../components/FeatureSection";
import WorkHistory from "../components/WorkHistory";
import Investment from "../components/Investment";
import FundRaising from "../components/FundRaising";
import Privacypolicy from "../components/Privacy";
import WalletSection from "../components/WalletSection";
import MapSection from "../components/MapSection";
import FaqSection from "../components/FaqSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import GlobalStyle, {
  CryptoWrapper,
  ContentWrapper,
} from "../components/cryptoModern.style";

const CryptoModern = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Bitvest</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modern landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <CountDown />
            <Features />
            <WorkHistory />
            <Investment />
            <FundRaising />
            <Privacypolicy />
            <WalletSection />
            <MapSection />
            <FaqSection />
            {/* <Newsletter /> */}
          </ContentWrapper>
          {/* <Footer /> */}
        </CryptoWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default CryptoModern;
