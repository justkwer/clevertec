import { FC, useMemo } from 'react';
import { searchTextDef } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';

export const Title: FC<{ title: string }> = ({ title }) => {
  const { text } = useAppSelector((state) => state.form);
  const spanText = useMemo(() => {
    const regex = new RegExp(`(${text})`, 'gi');

    return title.split(regex).map((el, index) => {
      const keys = index.toString();

      return regex.test(el) ? (
        <span key={keys} data-test-id='highlight-matches'>
          {el}
        </span>
      ) : (
        el
      );
    });
  }, [title, text]);

  return <h3>{text === searchTextDef ? title : spanText}</h3>;
};
