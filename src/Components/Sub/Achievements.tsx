import { ReactNode } from 'react';

import Counter from './Counter';

type Props = {
  title: string;
  amount: number;
  children: ReactNode;
};

const Achievements: React.FC<Props> = ({ title, amount, children }) => {
  return (
    <div className='flex items-end gap-x-3'>
      <span className='text-4xl text-gray-300 lg:text-2xl'>{children}</span>
      <h1 className='flex flex-col gap-y-2'>
        <Counter from={0} to={amount} />
        <span className='text-sm tracking-wide text-gray-500'>{title}</span>
      </h1>
    </div>
  );
};

export default Achievements;
