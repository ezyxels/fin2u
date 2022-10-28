import Button from "@components/Button";
import RangeSlider from "@components/calculator/RangeSlider";
import Input from "@components/forms/Input";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

type InvestmentCalcProps = {
  className?: string;
};

export default function InvestmentCalc({
  className = "",
}: InvestmentCalcProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState({
    renta: 0,
    cerpatZa: 0,
    investovat: 0,
    urok: 7,
    odklad: "",
  });

  console.log(inputData);

  function changeData(id: string, value: number) {
    setInputData((prevState) => ({ ...prevState, [id]: value }));
  }
  return (
    <div className={`flex flex-col p-5 ${className}`}>
      <div className="mt-24">
        <RangeSlider
          changeData={changeData}
          id="renta"
          min={5000}
          max={100000}
          skip={5000}
          title="Jak velkou měsíční rentu chcete?"
          unit="Kč"
        />
        <RangeSlider
          changeData={changeData}
          id={"cerpatZa"}
          min={0}
          max={30}
          skip={1}
          title={"Za kolik let chcete peníze čerpat?"}
          unit={
            inputData.cerpatZa < 5
              ? inputData.cerpatZa === 1
                ? "rok"
                : "roky"
              : "let"
          }
        />
        <RangeSlider
          changeData={changeData}
          id="investovat"
          min={0}
          max={10000000}
          skip={50000}
          title="Kolik už jste investovali?"
          unit={"Kč"}
        />
        <RangeSlider
          changeData={changeData}
          id="odklad"
          min={500}
          max={100000}
          skip={1000}
          title="Kolik můžete měsíčně odkládat?"
          unit={"Kč / měsíc"}
        />
      </div>
      <div className="mt-5 flex w-full items-center justify-center">
        <Button type="button" onClick={() => setIsModalOpen(true)}>
          Spočítat
        </Button>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        inputData={inputData}
      />
    </div>
  );
}

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  inputData: any;
};

function Modal({ isModalOpen, setIsModalOpen, inputData }: ModalProps) {
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
                    {" "}
                    X{" "}
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
                  <div className="flex w-full flex-col">
                    {Object.entries(inputData).map((e: any, index: number) => (
                      <div
                        className="mt-5 flex flex-row justify-between"
                        key={index}
                      >
                        <p>{e[0]}</p>
                        {typeof e[1] === "object" && e[1] !== null ? (
                          <div>
                            <p>Min {e[1].min}</p>
                            <p>Max {e[1].max}</p>
                          </div>
                        ) : (
                          <p>{e[1]}</p>
                        )}
                      </div>
                    ))}
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
