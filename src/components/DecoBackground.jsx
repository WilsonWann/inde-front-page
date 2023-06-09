import React from 'react'
import { css } from '@emotion/css'
import { useLocation } from 'react-router-dom';

export default function DecoBackground({ type }) {

  const repeat = type === 'content' ? true : false
  const position = type === 'content' ? 'absolute' : 'fixed';

  const style = css`
      --category-background-transform: translateY(-50%);
      --category-background-offset: ${position==='fixed' ? '19px' : '-362px'}; 
  
      ${position === 'fixed' ? 'position: fixed' : 'position: absolute'};
      inset: 0;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: ${repeat ? '261px' : '367px'};
        background-size: contain;
        top: 50%;
        background-repeat: ${repeat ? 'space' : 'no-repeat'};
        height: ${repeat ? '100%' : '826px'};     
        transform: var(--category-background-transform);
      }
      &::before {
        background-image: ${type === 'category'
      ? 'url(/src/assets/img/category/deco_toRight.png)'
      : type === 'content'
        ? 'url(/src/assets/img/content/deco_toRight.png)'
        : ''
    };
        left: var(--category-background-offset)} ;
      }
  
      &::after {
        background-image: ${type === 'category'
      ? 'url(/src/assets/img/category/deco_toLeft.png)'
      : type === 'content'
        ? 'url(/src/assets/img/content/deco_toLeft.png)'
        : ''
    };
        right: var(--category-background-offset);
      }
    `;
  return <div className={style} />;
}
