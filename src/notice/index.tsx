import * as React from "react";
import * as colors from "../colors";
import styles from "./style.css";

export type CloseCallback = () => void;

type NoticeType = "show" | "message" | "error" | "ok" | "warning";
type NoticeContent = string | React.ReactNode;

export interface INoticeProps {
  key?: string;
  duration: number;
  content: NoticeContent;
  type: NoticeType
  onClose?: CloseCallback;
}

const getColor = (type: NoticeType): string => {
  switch(type) {
    case "message": {
      return colors.MESSAGE;
    }
    case "ok": {
      return colors.OK;
    }
    case "error": {
      return colors.ERROR;
    }
    case "warning": {
      return colors.WARN;
    }
    default: {
      return colors.DEFAULT
    }
  }
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
      <div 
        className={styles["notice-container"]}
        style={{
          backgroundColor: `${getColor(props.type)}`
        }}
      >
        {
          props.content
        }
      </div>
    </div>
  );
}

export default Notice;