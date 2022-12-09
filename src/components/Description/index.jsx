import React from 'react';
import Button from '../Button';

import * as S from './style';

function Description({title, author, location, days}) {
  return (
    <S.Container>
      <section>
        <S.Title>About the Lender</S.Title>
        <Button />
      </section>
      <S.Infor>
        Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns asabsqh
        sw whhdi dw ppwd euy4h dbdjq jeeoi nd.
      </S.Infor>

      <S.Option>
        <S.Items>Lender Benefit</S.Items>
        <S.Items>Lender Benefit</S.Items>
        <S.Items>Lender Benefit</S.Items>
      </S.Option>
    </S.Container>
  );
}

export default Description;