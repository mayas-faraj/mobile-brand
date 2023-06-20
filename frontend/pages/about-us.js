import Feature from "../components/Feature";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

const aboutText = `
Welcome to our mobile trading company based in the UAE! We are proud to be direct partners with leading mobile phone brands such as Samsung, One-Plus, Apple, Xiaomi, Oppo, Vivo and Infinix. Our company deals in both retail and wholesale, offering our customers a wide range of mobile phones at competitive prices.
We understand the importance of staying up-to-date with the latest technology, which is why we bring you the latest models from our partnered brands. Our team is dedicated to providing excellent customer service, ensuring that you have the best shopping experience with us.
Whether you are looking for a new phone for personal use or for your business, we have the right solution for you. With our online platform, you can easily browse through our products and place your order from the comfort of your own home. We also offer convenient delivery options to ensure that you receive your order in a timely manner.
Thank you for considering our company for your mobile phone needs. We look forward to serving you!
`;

const features = [
  "History: AmkInt is found since 2009 and until this day we developing our self more",
  "Advanced Trading Tools: We offer a range of advanced trading tools to help you make informed decisions and maximize your profits. From real-time market data to technical analysis tools, we give you the tools you need to succeed.",
  "Secure and Reliable: We take security seriously, which is why we use state-of-the-art encryption technology to protect your data and transactions. Our platform is also reliable, with 24/7 uptime and fast execution speeds.",
  "Education and Support: We believe that education is key to success in trading, which is why we offer a range of educational resources to help you learn and grow. We also provide 24/7 support, so you can get help whenever you need it.",
  "Mobile Trading: Our platform is optimized for mobile devices, so you can trade on the go from your smartphone or tablet. This gives you the freedom to trade from anywhere, whether you're on the train or waiting in line at the grocery store."
];

export default function Home() {
  return (
    <>
      <SeoHead title='AmkInt Landing Page' />
      <Layout>
        <div className="mt-40">
          <Feature title="About AmkInt"
            text={aboutText}
            image="/assets/amk-int-logo.png"
            features={features}
          />
        </div>
      </Layout>
    </>
  );
}
