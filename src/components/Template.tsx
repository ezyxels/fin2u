type Props = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

// const Array = [
//   {
//     id: 1,
//     question: "Lorem ipsum",
//     answer: "Lorem ipsum",
//   },
//   {
//     id: 2,
//     question: "Lorem ipsum",
//     answer: "Lorem ipsum",
//   },
// ];

export default function Template({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: Props) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      {children}
    </Tag>
  );
}
