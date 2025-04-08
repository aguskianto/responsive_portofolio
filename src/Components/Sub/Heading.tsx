type Props = {
  text: string;
};

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <h1 className='mt-10 mb-14 text-3xl sm:text-2xl font-bold text-gray-600 text-center'>
      {text}
    </h1>
  );
};

export default Heading;
