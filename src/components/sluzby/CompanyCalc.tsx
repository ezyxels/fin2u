import Button from "@components/Button";
import RangeSlider from "@components/calculator/RangeSlider";
import Input from "@components/forms/Input";
import SelectTemp from "@components/forms/SelectTemp";
import emailjs from "@emailjs/browser";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

type CompanyCalcProps = {
  className?: string;
};

export default function CompanyCalc({ className = "" }: CompanyCalcProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState({
    kalkulacka: "Firemní Financování",
    pujcka: 0,
    zastava: true,
    zajisteni: 0,
    splatnost: 0,
    sazba: 7,
    ucetUveru: "",
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

  function changeData(id: string, value: any) {
    setInputData((prevState) => ({ ...prevState, [id]: value }));
  }
  return (
    <div className={`personalCalc flex flex-col p-5 ${className}`}>
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
              defaultValue={inputData.pujcka}
              title="Kolik si chci půjčit?"
              unit="Kč"
            />
            <RangeSlider
              changeData={changeData}
              id="splatnost"
              min={1}
              max={20}
              skip={1}
              defaultValue={inputData.splatnost}
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
              defaultValue={inputData.pujcka}
              title="Kolik si chci půjčit?"
              unit="Kč"
            />
            <RangeSlider
              changeData={changeData}
              id="splatnost"
              min={1}
              max={8}
              skip={1}
              defaultValue={inputData.splatnost}
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
          max={inputData.zastava === true ? 200000000 : 50000000}
          skip={100000}
          defaultValue={inputData.zajisteni}
          title={"Hodnota Vašeho zajištění?"}
          unit={"Kč"}
        />
        <SelectTemp
          id="ucelUveru"
          title="Účel Vašeho úvěru?"
          changeData={changeData}
          values={[
            "Klasický neúčelový úvěr",
            "Účelový podnikatelský úvěr",
            "Leasing",
            "Provozní úvěry",
            "Kontokorentní úvěr",
            "Podnikatelské kreditní karty",
            "Investiční úvěry",
            "Úvěry se zárukou Evropského investičního fondu",
          ]}
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
        result={result}
      />
    </div>
  );
}

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  inputData: any;
  result: any;
};

function Modal({ isModalOpen, setIsModalOpen, inputData, result }: ModalProps) {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [email, setEmail] = useState(String);
  const [phone, setPhone] = useState(Number);
  const [allVerified, setAllVerified] = useState(Boolean);
  const [allAlert, setAllAlert] = useState(Boolean);

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  function verifyAll() {
    if (
      /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
        email) && /\d{9}/.test( phone.toString() )
      
    ) {
      setAllVerified(true);
      sendEmail();
    } else {
      setAllAlert(true);
      setTimeout(() => {
        setAllAlert(false);
      }, 2500);
    }

    function sendEmail() {
      emailjs.send(
        "service_jlz369o",
        "template_w729jur",
        {
          email: email,
          phone: phone,
          kalkulacka: "Kalkulačka - " + inputData.kalkulacka,
          pujcka: "Půjčka: " + inputData.pujcka.toLocaleString() + " Kč",
          zastava:
            inputData.zastava === true
              ? "Zástava: se zástavou"
              : "Zástava: bez zástavy",
          nemovitost:
            "Nemovitost: " + inputData.zajisteni.toLocaleString() + " Kč",
          splatnost:
            inputData.splatnost < 5 && inputData.splatnost > 0
              ? inputData.splatnost === 1
                ? "Splatnost: " + inputData.splatnost + " rok"
                : "Splatnost: " + inputData.splatnost + " roky"
              : "Splatnost: " + inputData.splatnost + " let",
          sazba: "Sazba: " + inputData.sazba + " %",
          ucelUveru: "Účel úvěru: " + inputData.ucelUveru,
          druhNemovitosti: "Druh nemovitosti: " + inputData.druhNemovitosti,
          vysledek: "Vypočítaný výsledek: " + result.toLocaleString() + " Kč",
        },
        "user_2tNsUaIQSULo6wFXKZVCs"
      );
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
              {!allVerified ? (
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
                    Zadejte údaje pro ověření
                  </Dialog.Title>
                  <p className="mt-2 text-sm text-gray-500">
                    Pro zobrazení vašich výsledků prosím zadejte Vaší e-mailovou
                    adresu a telefonní číslo.
                  </p>
                  <p className="text-red-500">
                    {allAlert && "Prosím zadejte platný email a číslo!"}
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
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      isRequired
                      label="Váše telefonní číslo"
                      onChange={(e: any) => setPhone(e.target.value)}
                    />
                    <Button type="button" onClick={() => verifyAll()}>
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
