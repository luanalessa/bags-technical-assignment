import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';


import * as S from './style';

function Card({title, author, location, days}) {
  return (
    <S.Container>
      <S.Tag>Good Fit</S.Tag>
      <S.Title>{title}</S.Title>
      <S.Infor>{author}</S.Infor>
      <S.Infor>
        <HiOutlineLocationMarker className='icon' />
        {location}
      </S.Infor>
      <S.Infor>
        Get Funded in <strong>{days}</strong>
      </S.Infor>
      <S.Price>$10,000 - $1,000,000</S.Price>
    </S.Container>
  );
}

export default Card;