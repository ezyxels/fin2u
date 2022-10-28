import ScrollReveal from "@components/ScrollReveal";

type Props = {
  number: string;
  question: string;
  answer: string;
  className?: string;
};

export default function Question({
  number,
  question,
  answer,
  className = "",
}: Props) {
  // Logic goes here
  return (
    <ScrollReveal className={`flex flex-col gap-2 ${className}`}>
      <div className="flex w-full items-center justify-start gap-3">
        <span className="block shrink-0 grow-0 text-xl font-semibold text-primary md:text-2xl">
          Q{number}
        </span>
        <span className="block text-lg font-semibold leading-tight text-rich md:text-xl">
          {question}
        </span>
      </div>
      <div className="rounded-lg bg-gray-100 p-4">
        <p>{answer}</p>
      </div>
    </ScrollReveal>
  );
}
