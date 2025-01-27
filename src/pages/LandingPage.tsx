import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Faqs from "../components/landingpage/Faqs";
import Hero from "../components/landingpage/Hero";
import News from "../components/landingpage/News";
import PartnershipKOLs from "../components/landingpage/PartnershipKOLs";
import PartnershipVcs from "../components/landingpage/PartnershipVCs/PartnershipVcs";
import Roadmap from "../components/landingpage/Roadmap";
import Services from "../components/landingpage/Services";
import Testimoni from "../components/landingpage/Testimoni";
import ModalAds from "../components/landingpage/ModalAds";
import Networks from "../components/landingpage/Networks";

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    document.title = "Home | XAU";
  }, []);

  return (
    <div className="items-center justify-between relative w-full ">
      <ModalAds isOpen={isModalOpen} onClose={closeModal}></ModalAds>

      <div className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <Hero />
      </div>

      <div className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <Networks />
      </div>

      <div className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <Services />
      </div>

      <div className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <News />
      </div>

      <div className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <Roadmap />
      </div>

      <div className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <Testimoni />
      </div>

      <div id="VCs" className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <PartnershipVcs />
        <PartnershipKOLs />
      </div>

      <div id="Faqs" className="py-16 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <Faqs />
      </div>

      <div id="Contact">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
