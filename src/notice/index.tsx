import * as React from "react";
import * as colors from "../colors";
import styles from "./style.css";


export type Close = () => void;

export interface INoticeProps {
  key?: string;
  duration: number;
  content: any;
  onClose?: Close;
  type: "message"
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
    <div className={styles["container"]}>
      <div className={styles["notice-container"]}>{ props.content }</div>
    </div>
  );
}

export default Notice;