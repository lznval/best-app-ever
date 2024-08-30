import { FC } from 'react';

interface ITagProps {
  tag: string;
  customStyles?: string;
}
export const Tag: FC<ITagProps> = ({ tag, customStyles }) => {
  return (
    <span
      key={tag}
      className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${customStyles}`}
    >
      #{tag}
    </span>
  );
};
