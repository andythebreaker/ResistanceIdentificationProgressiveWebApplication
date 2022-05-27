/*請勿重複利用 */
import React from "react";
import ReactiveButton from 'reactive-button';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function MyBtnComp(props) {
  const [state, /*setState*/] = useState('idle');
  const MySwal = withReactContent(Swal)
  const onClickHandler = (e) => {
    console.log(e);
    if(props.fucnSelect==='vt'){
      props.parrentThis.fucnImgStripDo();
    }else if(props.fucnSelect==='hz'){
      props.parrentThis.fucnImgStripHZ();
    }else{
      MySwal.fire({
        title: <p>error</p>,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.showLoading()
        },
      }).then(() => {
        return MySwal.fire(<p>vt/zh</p>)
      });
    }
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
