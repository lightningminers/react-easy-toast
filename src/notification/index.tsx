import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./style.css";
import createUUID from "usedjs/lib/createUUID";
import Notice, { INoticeProps } from "../notice";

interface IProps {}
interface IState {
  notices: INoticeProps[];
}

interface IShareInstance {
  destroy: () => void;
  remove: (key: string) => void;
  add: (notice: INoticeProps) => void;
}

let shareNotificationInstance: IShareInstance | undefined;

export default class Notification extends React.Component<IProps, IState> {

  static shareInstance(){
    if (!shareNotificationInstance) {
      const div = document.createElement("div");
      div.setAttribute("class", styles["toast-container"]);
      document.body.appendChild(div);
      const notification = ReactDOM.render(
        <Notification />,
        div
      ) as any;
      shareNotificationInstance = {
        add(notice: INoticeProps){
          notification.add(notice);
        },
        remove(key: string){
          notification.remove(key);
        },
        destroy(){
          ReactDOM.unmountComponentAtNode(div);
          document.body.removeChild(div);
        }
      }
      return shareNotificationInstance;
    }
    return shareNotificationInstance;
  }

  constructor(props: IProps) {
    super(props);
    this.state = {
      notices: [],
    }
  }

  add(notice: INoticeProps){
    const { notices } = this.state;
    const key = notice.key !== undefined ? notice.key : createUUID();
    notice.key = key;
    const is = notices.some(v => v.key === key);
    const onClose = notice.onClose;
    notice.onClose = () => {
      this.remove(key);
      if (onClose) {
        onClose();
      }
    }
    if (!is) {
      notices.push(notice);
      this.setState({
        notices,
      });
    }
  }

  remove(key: string) {
    this.setState({
      notices: this.state.notices.filter(v => v.key !== key),
    });
  }

  getNotice(notices: INoticeProps[]){
    return (
      <>
      {
        notices.map((v) => {
          return (
            <Notice {...v}/>
          )
        })
      }
      </>
    )
  }

  render(){
    const { notices } = this.state;
    return (
      <>
        {this.getNotice(notices)}
      </>
    )
  }
}