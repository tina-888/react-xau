import { useState } from "react";
import "../../styles/flipCard.css";
import Login from "./Login";
import Register from "./Register";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {/* Button */}
      <button className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-custom-gold text-custom-gold dark:text-white hover:bg-custom-gold hover:text-white text-md" onClick={() => setShowModal(true)}>
        Login
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 flex pt-16 overflow-auto bg-black bg-opacity-50">
          <div className="relative mx-auto w-full max-w-md px-6 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front  shadow-xl ring-1 p-8 ring-gray-900/5 sm:rounded-xl sm:px-10">
                  <Login setIsFlipped={setIsFlipped} setShowModal={setShowModal} />
                </div>
                <div className="flip-card-back  shadow-xl ring-1 p-8 ring-gray-900/5 sm:rounded-xl sm:px-10">
                  <Register setIsFlipped={setIsFlipped} setShowModal={setShowModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
