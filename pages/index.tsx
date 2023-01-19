import Head from 'next/head';
import Main from '../components/Main/Main';
import AboutUs from '../components/Sections/AboutUs';
import ContactUs from '../components/Sections/ContactUs';
import Gallery from '../components/Sections/Gallery';
import Questions from '../components/Sections/Questions';
import Review from '../components/Sections/Review';
import Steps from '../components/Sections/Steps';
import Technologies from '../components/Sections/Technologies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Webtronics</title>
        <meta name="description" content="test task for Webtronics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <>
        <Main/>
        <AboutUs/>
        <Technologies/>
        <Steps/>
        <Questions/>
        <Review/>
        <Gallery/>
        <ContactUs/>
      </>
    </>
  )
}
