import { useState } from "react";
import Footer from "../components/Footer";
import Machine1 from "../components/goldMining/Machine1";
import Machine2 from "../components/goldMining/Machine2";
import Machine3 from "../components/goldMining/Machine3";
import BackMachine1 from "../components/goldMining/BackMachine1";
import BackMachine3 from "../components/goldMining/BackMachine3";
import BackMachine2 from "../components/goldMining/BackMachine2";
import ModalInvoice from "../components/goldMining/modalPayment/OrderDetail";

import Login from "./../components/modalLogin/Login";
import Register from "./../components/modalLogin/Register";

import Modal from "../components/modalLogin/Modal";

import "../styles/flipCard.css";

interface GoldMiningProps {
  isLoggedIn: boolean;
}

const GoldMining: React.FC<GoldMiningProps> = ({ isLoggedIn }) => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false); // Manage invoice modal visibility

  const [showModal, setShowModal] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="items-center justify-between relative w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
      <div className="py-16 pb-48">
        <div className="flex flex-col items-center pt-2">
          <div className="mx-auto w-5/6 mt-2 max-md:max-w-full">
            <div className="flex justify-center gap-5 pb-4 max-md:flex-col max-md:gap-48">
              <div className={`flex flex-col mt-8 w-1/3 h-96 max-md:w-full flip-card ${isFlipped1 ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <Machine1 setIsFlipped1={setIsFlipped1} isFlipped1={isFlipped1} />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <BackMachine1 />
                      <div className="mt-8 flex justify-end gap-4">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsFlipped1((prev) => !prev)}>
                          Back
                        </button>
                        {isLoggedIn ? (
                          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" onClick={() => setShowInvoiceModal(true)}>
                            Confirm
                          </button>
                        ) : (
                          <button
                            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-custom-gold-rod text-custom-gold dark:text-white hover:bg-custom-gold hover:text-white text-max-md"
                            onClick={() => setShowModal(true)}
                          >
                            Login
                          </button>
                          // <Modal />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex flex-col mt-8 w-1/3 h-96  max-md:w-full flip-card ${isFlipped2 ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <Machine2 setIsFlipped2={setIsFlipped2} isFlipped2={isFlipped2} />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <BackMachine2 />
                      <div className="mt-8 flex justify-end gap-4">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsFlipped2((prev) => !prev)}>
                          Back
                        </button>
                        {isLoggedIn ? (
                          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" onClick={() => setShowInvoiceModal(true)}>
                            Confirm
                          </button>
                        ) : (
                          <Modal />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`flex flex-col mt-8 w-1/3 h-96 max-md:w-full flip-card ${isFlipped3 ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <Machine3 setIsFlipped3={setIsFlipped3} isFlipped3={isFlipped3} />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <BackMachine3 />
                      <div className="mt-8 flex justify-end gap-4">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsFlipped3((prev) => !prev)}>
                          Back
                        </button>
                        {isLoggedIn ? (
                          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700" onClick={() => setShowInvoiceModal(true)}>
                            Confirm
                          </button>
                        ) : (
                          <Modal />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showInvoiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 w-full h-full">
            <ModalInvoice setShowInvoiceModal={setShowInvoiceModal} />
          </div>
        )}
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-10 flex items-start justify-center pt-12 bg-black bg-opacity-50">
            <div className="relative mt-16 w-full max-w-md px-6 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
              <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front w-full flex items-center justify-center p-8 customShadow bg-slate-200 sm:rounded-xl sm:px-10">
                    <Login setIsFlipped={setIsFlipped} setShowModal={setShowModal} />
                  </div>
                  <div className="flip-card-back w-full flex items-center justify-center p-8 customShadow bg-slate-200 sm:rounded-xl sm:px-10">
                    <Register setIsFlipped={setIsFlipped} setShowModal={setShowModal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GoldMining;
