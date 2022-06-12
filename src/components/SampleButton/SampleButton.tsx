import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './SampleButton.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps {
  type?: 'primary' | 'danger' | 'success';
  label: string;
  onClick?: () => void;
}

export const SampleButton = ({ type = 'primary', label, ...rest }: ButtonProps) => {
  const [state, setState] = useState('dd');
  if (state) {
    useEffect(() => {}, []);
  }
  return (
    <>
      <button type="button" className={cx('button', type)} {...rest}>
        {label}
      </button>
      <Image src="/vercel.svg" width={72} height={16} />
    </>
  );
};
