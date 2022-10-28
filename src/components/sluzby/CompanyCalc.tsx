import Button from "@components/Button";
import RangeSlider from "@components/calculator/RangeSlider";
import Input from "@components/forms/Input";
import SelectTemp from "@components/forms/SelectTemp";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

type CompanyCalcProps = {
  className?: string;
};

export default function CompanyCalc({ className = "" }: CompanyCalcProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState({
    pujcka: 0,
    zastava: true,
    zajisteni: 0,
    splatnost: 0,
    sazba: 7,
    ucetUveru: "",
    druhNemovitosti: "",
  });

  function changeData(id: string, value: any) {
    setInputData((prevState) => ({ ...prevState, [id]: value }));
  }
  return (
    <div className={`flex flex-col p-5 ${className}`}>
      <div className="mt-24">
        <div className={`mb-10 flex w-fit flex-row`}>
          <span
            className={`rounded-md border-2 p-2 ${
              inputData.zastava === true
                ? "border-primary"
                : "c-link-3-a border-white"
            }`}
            onClick={() => changeData("zastava", true)}
          >
            Se zástavou
          </span>
          <span
            className={`rounded-md border-2 p-2 ${
              inputData.zastava === false
                ? "border-primary"
                : "c-link-3-a border-white"
            }`}
            onClick={() => changeData("zastava", false)}
          >
            Bez zástavy
          </span>
        </div>
        {inputData.zastava !== undefined && inputData.zastava ? (
          <>
            <RangeSlider
              changeData={changeData}
              id="pujcka"
              min={0}
              max={200000000}
              skip={500000}
              title="Kolik si chci půjčit?"
              unit="Kč"
            />
            <RangeSlider
              changeData={changeData}
              id="splatnost"
              min={1}
              max={20}
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
          </>
        ) : (
          <>
            <RangeSlider
              changeData={changeData}
              id="pujcka"
              min={0}
              max={3000000}
              skip={50000}
              title="Kolik si chci půjčit?"
              unit="Kč"
            />
            <RangeSlider
              changeData={changeData}
              id="splatnost"
              min={1}
              max={8}
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
          </>
        )}
        <RangeSlider
          changeData={changeData}
          id={"zajisteni"}
          min={inputData.pujcka}
          max={50000000}
          skip={100000}
          title={"Hodnota Vašeho zajištění?"}
          unit={"Kč"}
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
