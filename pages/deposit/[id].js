import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../../common/theme/appModern";
import ResetCSS from "../../common/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../../components/Navbar";

import GlobalStyle, {
  CryptoWrapper,
  ContentWrapper,
} from "../../components/cryptoModern.style";
import AppTable from "../../components/table";
import ConfirmationTable from "../../components/confirmation_table";
import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const DepositPage = ({ amount }) => {
  const router = useRouter();
  const handleSave = () => {
    toast("Successfully saved. Wait for verification", {
      hideProgressBar: true,
      autoClose: 1000,
      type: "success",
      position: "bottom-right",
    });

    router.push("/");
  };
  const handleCancel = () => {
    console.log("cancel");
    toast("Ooops cancelled!!", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "error",
      position: "bottom-right",
    });

    router.push("/");
  };
  const data = [
    {
      country: "Tanzania",
      number: "+255748621497",
      carrier: "Vodacom",
      name: "SEMLBEYO OLEMELAU LAIZER",
    },
    {
      country: "Kenya",
      number: "+254 722 000 000",
      carrier: "Safaricom",
      name: "AURA INVESTMENTS LTD",
    },
    {
      country: "Uganda",
      number: "+256 772 000 000",
      carrier: "Airtel",
      name: "AURA INVESTMENTS LTD",
    },
  ];
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
            <div className="mx-20 mt-36 ">
              <h1 className="text-white font-bold text-2xl mb-4">
                PLEASE CONFIRM YOUR DEPOSIT
              </h1>
              <h1 className="text-white mb-10">
                Make your investment to the following accounts as per your
                carrier or country
              </h1>
            </div>
            {data.map((item, index) => (
              <div key={item.number} className="mx-20 my-2 mb-10 ">
                <h1 className="text-lg text-white uppercase font-semibold mb-3">
                  {item.country}
                </h1>
                <div className="flex flex-row space-x-2">
                  <h1 className="text-white">Phone number:</h1>
                  <h1 className="text-white font-semibold">{item.number}</h1>
                </div>
                <div className="flex flex-row space-x-2">
                  <h1 className="text-white">Carrier:</h1>
                  <h1 className="text-white font-semibold">{item.carrier}</h1>
                </div>
                <div className="flex flex-row space-x-2">
                  <h1 className="text-white">Account name:</h1>
                  <h1 className="text-white font-semibold">{item.name}</h1>
                </div>
              </div>
            ))}
            <div className="mx-20 mt-10 space-y-10">
              <AppTable amount={amount} />
              <ConfirmationTable />
              <div className="flex space-x-10">
                <Button
                  onClick={handleSave}
                  className="bg-[#00AEE8] rounded-md"
                >
                  Save
                </Button>
                <Button
                  type="submit"
                  onClick={handleCancel}
                  className="bg-[#00AEE8] rounded-md"
                >
                  Cancel
                </Button>
              </div>
            </div>

            {/* <Newsletter /> */}
          </ContentWrapper>
          {/* <Footer /> */}
        </CryptoWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default DepositPage;

//Get server side props
export async function getServerSideProps(context) {
  const { id } = context.params;
  return {
    props: {
      amount: context.params.id,
    },
  };
}
