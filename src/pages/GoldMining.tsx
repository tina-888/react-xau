import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Machine1 from "../components/goldMining/Machine1";
import Machine2 from "../components/goldMining/Machine2";
import Machine3 from "../components/goldMining/Machine3";
import Machine4 from "../components/goldMining/Machine4";
import ModalInvoiceDeposit from "../components/goldMining/modalPayment/DetailDeposit";
import ModalInvoiceWallet from "../components/goldMining/modalPayment/DetailWallet";
import "../styles/flipCard.css";
import apiPayment from "../api/apiPayment";
import Login from "../components/modalLogin/Login";
import Register from "../components/modalLogin/Register";

interface GoldMiningProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const GoldMining: React.FC<GoldMiningProps> = ({ isLoggedIn, onLogin }) => {
  useEffect(() => {
    document.title = "Gold Earning | XAU";
  }, []);

  const [isFlippedLogin, setIsFlippedLogin] = useState(false);
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [showInvoiceModalDeposit, setShowInvoiceModalDeposit] = useState(false);
  const [showInvoiceModalWallet, setShowInvoiceModalWallet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [miningPowerInput1, setMiningPowerInput1] = useState<string>("");
  const [miningPowerInput2, setMiningPowerInput2] = useState<string>("");
  const [miningPowerInput3, setMiningPowerInput3] = useState<string>("");
  const [miningPowerInput4, setMiningPowerInput4] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setMiningPowerInput: React.Dispatch<React.SetStateAction<string>>) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && !isNaN(Number(value)))) {
      setMiningPowerInput(value);
    }
  };

  const calculateValues = (cardType: "basic" | "standard" | "premium" | "platinum", miningPowerInput: string) => {
    const { r, b } = cardType === "basic" ? { r: 0.002, b: 0.02 } : cardType === "standard" ? { r: 0.004, b: 0.05 } : cardType === "premium" ? { r: 0.008, b: 0.1 } : { r: 0.01, b: 0.2 };

    const convertedToXAU = Number(miningPowerInput) * 0.00041089;
    const calculatedResultXAU = convertedToXAU * r * 90 + convertedToXAU * b;
    const calculatedTotalXAU = calculatedResultXAU + convertedToXAU;
    const convertedToUSD = calculatedTotalXAU / 0.00041089;

    return { calculatedResultXAU, convertedToUSD };
  };

  const handleSendData = async (e: React.FormEvent<HTMLFormElement>, cardType: "basic" | "standard" | "premium" | "platinum", miningPowerInput: string) => {
    e.preventDefault();
    setError(null);

    // Define minimum values for each card type
    const minValues: Record<string, number> = {
      basic: 50,
      standard: 500,
      premium: 1000,
      platinum: 2000,
    };

    const { calculatedResultXAU, convertedToUSD } = calculateValues(cardType, miningPowerInput);
    const numberInput = Number(miningPowerInput);
    if (isNaN(Number(numberInput)) || Number(numberInput) <= 0) {
      setError("Invalid mining power input.");
      return;
    }
    if (numberInput < minValues[cardType]) {
      alert(`Minimum deposit for ${cardType} is ${minValues[cardType]} USD.`);
      return;
    }

    try {
      const AddPaymentData = {
        name: cardType,
        xau: Number(miningPowerInput) * 0.00041089,
        usd: convertedToUSD,
        total: calculatedResultXAU,
        status: "pending",
      };

      console.log("Sending data:", AddPaymentData);

      const result = await apiPayment.PaymentAdd(AddPaymentData);

      console.log("Payment successful:", result);
      if (paymentMethod === "deposit") {
        setShowInvoiceModalDeposit(true);
      } else if (paymentMethod === "wallet") {
        setShowInvoiceModalWallet(true);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const renderCardBack = (
    cardType: "basic" | "standard" | "premium" | "platinum",
    setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>,
    miningPowerInput: string,
    setMiningPowerInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { calculatedResultXAU, convertedToUSD } = calculateValues(cardType, miningPowerInput);

    return (
      <div className="flip-card-back">
        <div className="w-full h-[500px] mx-auto flex flex-col gap-2 px-16 py-4 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
          <form onSubmit={(e) => handleSendData(e, cardType, miningPowerInput)}>
            <div className="h-80">
              <div className="flex items-center justify-center pb-4">
                <h1 className="text-2xl font-bold text-white dark:text-white mb-4">Payment Form</h1>
              </div>
              <div className="mb-6">
                <div className="grid gap-4">
                  <div>
                    <label htmlFor={`mining_power_${cardType}`} className="block text-white dark:text-white mb-1">
                      Deposit Min. {cardType === "basic" ? "$10 USD" : cardType === "standard" ? "$500 USD" : cardType === "premium" ? "$1000 USD" : "$2000 USD"}
                    </label>
                    <div className="relative w-full">
                      <input
                        type="number"
                        id={`mining_power_${cardType}`}
                        value={miningPowerInput}
                        onChange={(e) => handleInputChange(e, setMiningPowerInput)}
                        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        min="0"
                        step="0.001"
                      />
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-black dark:text-white">USD</span>
                    </div>
                  </div>
                  <span className="ml-2 text-white dark:text-white text-sm">
                    *1 USD = 0.00041089 XAU
                    <br />
                    *Return {cardType === "basic" ? "0.2%" : cardType === "standard" ? "0.4%" : cardType === "premium" ? "0.8%" : "1%"} per day
                    <br />
                    *Bonus {cardType === "basic" ? "2%" : cardType === "standard" ? "5%" : cardType === "premium" ? "0.8%" : "1%"}
                  </span>
                </div>
                <div className="mt-4">
                  <label htmlFor="address" className="block text-white dark:text-white mb-1">
                    Your profit
                  </label>
                  <h1 className="text-white dark:text-white">
                    {calculatedResultXAU.toFixed(6)} XAU = {convertedToUSD.toFixed(2)} USD
                  </h1>
                </div>
                <div className="mt-4">
                  <label htmlFor="payment" className="block text-white dark:text-white mb-1">
                    Payment Method
                  </label>
                  <div>
                    <input type="radio" id="deposit" name={`payment_method_${cardType}`} value="deposit" className="mr-2" onChange={handlePaymentMethodChange} />
                    <label htmlFor="deposit" className="text-white dark:text-white mr-4">
                      Deposit
                    </label>
                    <input type="radio" id="wallet" name={`payment_method_${cardType}`} value="wallet" className="mr-2" onChange={handlePaymentMethodChange} />
                    <label htmlFor="wallet" className="text-white dark:text-white">
                      Connect Wallet
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-end gap-4">
              <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsFlipped((prev) => !prev)}>
                Back
              </button>
              {isLoggedIn ? (
                <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                  Confirm
                </button>
              ) : (
                <button
                  type="button"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-custom-gold-rod text-custom-gold dark:text-white hover:bg-custom-gold hover:text-white text-max-md"
                  onClick={() => setShowModal(true)}
                >
                  Login
                </button>
              )}
            </div>
            {error && <p className="text-center text-sm text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="items-center justify-between relative w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-blackgrey to-custom-black">
      <div className="py-16 pb-48">
        <div className="flex flex-col items-center pt-2">
          <div className="mx-auto w-5/6 mt-10 max-md:w-full max-md:px-4">
            <div className="grid grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-36">
              {" "}
              {/* Card 1 */}
              <div className={`flex flex-col mt-8 mb-20 w-full h-96 max-md:w-full flip-card ${isFlipped1 ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <Machine1 setIsFlipped1={setIsFlipped1} isFlipped1={isFlipped1} />
                    </div>
                  </div>
                  {renderCardBack("basic", setIsFlipped1, miningPowerInput1, setMiningPowerInput1)}
                </div>
              </div>
              {/* Card 2 */}
              <div className={`flex flex-col mt-8 mb-20 w-full h-96 max-md:w-full flip-card ${isFlipped2 ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <Machine2 setIsFlipped2={setIsFlipped2} isFlipped2={isFlipped2} />
                    </div>
                  </div>
                  {renderCardBack("standard", setIsFlipped2, miningPowerInput2, setMiningPowerInput2)}
                </div>
              </div>
              {/* Card 3 */}
              <div className={`flex flex-col mt-8 mb-20 w-full h-96 max-md:w-full flip-card ${isFlipped3 ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <Machine3 setIsFlipped3={setIsFlipped3} isFlipped3={isFlipped3} />
                    </div>
                  </div>
                  {renderCardBack("premium", setIsFlipped3, miningPowerInput3, setMiningPowerInput3)}
                </div>
              </div>
              {/* Card 4 */}
              <div className={`flex flex-col mt-8 mb-20 w-full h-96 max-md:w-full flip-card ${isFlipped4 ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="w-full mx-auto flex flex-col gap-2 p-8 border border-custom-gold-rod rounded-3xl customShadow dark:bg-gray-900">
                      <Machine4 setIsFlipped4={setIsFlipped4} isFlipped4={isFlipped4} />
                    </div>
                  </div>
                  {renderCardBack("platinum", setIsFlipped4, miningPowerInput4, setMiningPowerInput4)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showInvoiceModalDeposit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 w-full h-full">
            <ModalInvoiceDeposit setShowInvoiceModalDeposit={setShowInvoiceModalDeposit} />
          </div>
        )}
        {showInvoiceModalWallet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 w-full h-full">
            <ModalInvoiceWallet setShowInvoiceModalWallet={setShowInvoiceModalWallet} />
          </div>
        )}

        {paymentMethod === "wallet" && <div>Wallet</div>}
        {showModal && (
          <div className="fixed inset-0 z-10 flex items-start justify-center pt-12 bg-black bg-opacity-50">
            <div className="relative mt-16 w-full max-w-md px-6 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
              <div className={`flip-card ${isFlippedLogin ? "flipped" : ""}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front w-full flex items-center justify-center p-8 customShadow bg-slate-200 sm:rounded-xl sm:px-10">
                    <Login setIsFlipped={setIsFlippedLogin} setShowModal={setShowModal} onLogin={onLogin} />
                  </div>
                  <div className="flip-card-back w-full flex items-center justify-center p-8 customShadow bg-slate-200 sm:rounded-xl sm:px-10">
                    <Register setIsFlipped={setIsFlippedLogin} setShowModal={setShowModal} onLogin={onLogin} />
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
