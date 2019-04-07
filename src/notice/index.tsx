import * as React from "react";


export type Close = () => void;

interface INoticeProps {
  duration: number;
  content: any;
  onClose?: Close;
}

const Notice = (props: INoticeProps) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (props.onClose) {
        props.onClose();
      }
    }, props.duration);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    }
  });
  return (
    <div>
      { props.content }
    </div>
  );
}

export default Notice;