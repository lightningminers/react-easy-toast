import * as React from "react";
import * as ReactDOM from "react-dom";
import createUUID from "usedjs/lib/createUUID";
import styles from "./style.css";

interface IProps {}
interface IState {
  notices: any[];
}

interface INotice {
  key?: string;
}

interface IShareInstance {
  destroy: () => void;
  remove: (key: string) => void;
  add: () => void;
}

let shareNotificationInstance: IShareInstance | undefined;

export default class Notification extends React.Component<IProps, IState> {

  static shareInstance(){
    if (!shareNotificationInstance) {
      const div = document.createElement('div');
      div.setAttribute('class', styles["container"]);
      document.body.appendChild(div);
      ReactDOM.render(
        <Notification />,
        div
      );
      shareNotificationInstance = {
        add(){
  
        },
        remove(key: string){
  
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

  add(notice: INotice){
    const { notices } = this.state;
    const key = notice.key !== undefined ? notice.key : createUUID();
    notice.key = key;
    const is = notices.some(v => v.key === key);
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

  render(){
    return (
      <>
        1234
      </>
    )
  }
}