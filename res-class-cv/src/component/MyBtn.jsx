/*請勿重複利用 */
import React from "react";
import ReactiveButton from 'reactive-button';
import { useState } from 'react';

export function MyBtnComp(props) {
  const [state, setState] = useState('idle');

  const onClickHandler = (e) => {
    console.log(e);
    props.parrentThis.fucnImgStripDo();
  };
  return <div className="myBtnComp">
    <ReactiveButton buttonState={state}
      onClick={onClickHandler}
      color={'primary'}
      idleText={props.showText}
      loadingText={'Loading'}
      successText={'Success'}
      errorText={'Error'}
      type={'button'}
      className={'class1 class2'}
      style={{ borderRadius: '5px' }}
      outline={false}
      shadow={false}
      rounded={false}
      size={'normal'}
      block={false}
      messageDuration={2000}
      disabled={false}
      buttonRef={null}
      width={null}
      height={null}
      animation={true} />
  </div>;
}
