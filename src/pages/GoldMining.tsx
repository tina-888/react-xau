import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Machine1 from "../components/goldMining/Machine1";
import Machine2 from "../components/goldMining/Machine2";
import Machine3 from "../components/goldMining/Machine3";
import BackMachine1 from "../components/goldMining/BackMachine1";
import BackMachine3 from "../components/goldMining/BackMachine3";
import BackMachine2 from "../components/goldMining/BackMachine2";
import OrderDetail from "../components/goldMining/modalPayment/OrderDetail";
import "../styles/flipCard.css";

const GoldMining = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="items-center justify-between relative w-full ">
      <Navbar />
      <div className="h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
        <div className="mx-auto pt-24 w-5/6">
          <div className="w-full h-full grid grid-cols-3 gap-10">
            <div className={`flip-card ${isFlipped1 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Machine1 setIsFlipped1={setIsFlipped1} isFlipped1={isFlipped1} />
                </div>
                <div className="flip-card-back">
                  <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                    <BackMachine1 />
                    <div className="mt-8 flex justify-end gap-4">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsFlipped1((prev) => !prev)}>
                        Back
                      </button>
                      <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" onClick={() => setShowModal(true)}>
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flip-card ${isFlipped2 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Machine2 setIsFlipped2={setIsFlipped2} isFlipped2={isFlipped2} />
                </div>
                <div className="flip-card-back">
                  <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                    <BackMachine2 />
                    <div className="mt-8 flex justify-end gap-4">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsFlipped2((prev) => !prev)}>
                        Back
                      </button>
                      <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" onClick={() => setShowModal(true)}>
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flip-card ${isFlipped3 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Machine3 setIsFlipped3={setIsFlipped3} isFlipped3={isFlipped3} />
                </div>
                <div className="flip-card-back">
                  <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                    <BackMachine3 />
                    <div className="mt-8 flex justify-end gap-4">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsFlipped3((prev) => !prev)}>
                        Back
                      </button>
                      <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" onClick={() => setShowModal(true)}>
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 w-full h-full">
          <OrderDetail setShowModal={setShowModal} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default GoldMining;
