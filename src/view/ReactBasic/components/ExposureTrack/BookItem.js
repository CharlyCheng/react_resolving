import React from 'react';
import exposureHoc from './ExposureHoc';

const BookItem = (props) => {
  const { index, subItem } = props;
  return (
    <div key={subItem.bookId}>
      <img src={subItem.cover} width='136px' height='178px' />
      <span>{subItem.bookName}</span>
    </div>
  )
}

export default exposureHoc(BookItem)