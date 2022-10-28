import Button from "@components/Button";
import RangeSlider from "@components/calculator/RangeSlider";
import Input from "@components/forms/Input";
import SelectTemp from "@components/forms/SelectTemp";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

type MortgageCalcProps = {
  className?: string;
};

export default function MortgageCalc({ className = "" }: MortgageCalcProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState({
    pujcka: 0,
    nemovitost: 0,
    splatnost: 0,
    sazba: 5.99,
    ucetUveru: "",
    druhNemovitosti: "",
  });
  const [result, setResult] = useState<number>(0);

  function letsCalcIt() {
    let top =
      (inputData.sazba / 100 / 12) *
      Math.pow(1 + inputData.sazba / 100 / 12, 12 * inputData.splatnost);
    let bottom =
      Math.pow(1 + inputData.sazba / 100 / 12, 12 * inputData.splatnost) - 1;
    setResult(Math.round(inputData.pujcka * (top / bottom) * 100) / 100);
    setIsModalOpen(true);
  }

  function changeData(id: string, value: number) {
    setInputData((prevState) => ({ ...prevState, [id]: value }));
  }
  return (
    <div className={`personalCalc flex flex-col p-5 ${className}`}>
      <div className="mt-24">
        <RangeSlider
          changeData={changeData}
          id="pujcka"
          min={500000}
          max={50000000}
          skip={100000}
          title="Kolik si chci půjčit?"
          unit="Kč"
        />
        <RangeSlider
          changeData={changeData}
          id={"nemovitost"}
          min={inputData.pujcka}
          max={50000000}
          skip={100000}
          title={"Hodnota Vaší nemovitosti?"}
          unit={"Kč"}
        />
        <RangeSlider
          changeData={changeData}
          id="splatnost"
          min={1}
          max={40}
          skip={1}
          title="Jak dlouho chcete splácet?"
          unit={
            inputData.splatnost < 5
              ? inputData.splatnost === 1
                ? "rok"
                : "roky"
              : "let"
          }
        />
        <div className="mb-5 flex flex-row justify-between border-b border-b-primary pb-3">
          <p>Současná sazba</p>
          <p className="text-lg"> {inputData.sazba} %</p>
        </div>
        <SelectTemp
          id="ucelUveru"
          title="Jaký je účel úvěru?"
          changeData={changeData}
          values={[
            "Koupě",
            "Stavba",
            "Rekonstrukce",
            "Refinancování",
            "Konsolidace",
            "Peníze na cokoliv",
            "Vypořádání dědictví",
          ]}
        />
        <SelectTemp
          id="druhNemovitosti"
          title="Jaký je druh nemovitosti?"
          changeData={changeData}
          values={["Byt", "Dům", "Rekreační objekt", "Bytový dům", "Jiný"]}
          className="mt-12"
        />
      </div>
      <div className="mt-5 flex w-full items-center justify-center">
        <Button type="button" onClick={() => letsCalcIt()}>
          Spočítat
        </Button>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        inputData={inputData}
        result={result!}
      />
    </div>
  );
}

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  inputData: any;
  result: number;
};

function Modal({ isModalOpen, setIsModalOpen, inputData, result }: ModalProps) {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [email, setEmail] = useState(String);
  const [emailVerified, setEmailVerified] = useState(Boolean);
  const [emailAlert, setEmailAlert] = useState(Boolean);

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  function verifyEmail() {
    if (
      /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
        email
      )
    ) {
      setEmailVerified(true);
    } else {
      setEmailAlert(true);
      setTimeout(() => {
        setEmailAlert(false);
      }, 2500);
    }
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {!emailVerified ? (
                <Dialog.Panel className="flex w-full max-w-md transform flex-col overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className="ml-auto h-10 w-10 rounded-md border border-blue-500"
                    onClick={() => setIsModalOpen(false)}
                  >
                    X
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Zadejte e-mail
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-gray-500">
                    Pro zobrazení vašich výsledků prosím zadejte Vaší e-mailovou
                    adresu.
                  </p>
                  <p className="text-red-500">
                    {emailAlert && "Prosím zadejte platný email!"}
                  </p>
                  <div className="mt-5 flex flex-col gap-5">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      isRequired
                      label="Váš e-mail"
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <Button type="button" onClick={() => verifyEmail()}>
                      Odeslat!
                    </Button>
                  </div>
                </Dialog.Panel>
              ) : (
                <Dialog.Panel className="flex w-full max-w-md transform flex-col overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Děkujeme za vyplnění dotazníku
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-gray-500">
                    Vaše výsledky můžete naleznout níže
                  </p>
                  <div className="mt-7 flex w-full flex-col">
                    <div className="flex flex-row justify-between">
                      <p className="hidden md:block">Při půjčce v hodnotě</p>
                      <p className="block md:hidden">Při půjčce</p>
                      <p>{inputData.pujcka.toLocaleString()} Kč</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="hidden md:block">A splatnostním období</p>
                      <p className="block md:hidden">A splatnosti</p>
                      <p>
                        {inputData.splatnost}{" "}
                        {inputData.splatnost < 5
                          ? inputData.splatnost === 1
                            ? "rok"
                            : "roky"
                          : "let"}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-row justify-between">
                      <p className="hidden items-end md:flex">
                        Činní měsíční splátka
                      </p>
                      <p className="flex items-end md:hidden">
                        Je měsíční splátka
                      </p>
                      <p className="text-lg underline underline-offset-4">
                        {result.toLocaleString()} Kč
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              )}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
