import { DEFAULT_DURATION } from "./utils";
import Notification from "./notification";
import { Close } from "./notice";

const notification = Notification.shareInstance();

export const message = (content: string, duration = DEFAULT_DURATION, onClose?: Close) => {
  notification.add({
    content,
    duration,
    onClose,
    type: "message",
  });
}

export const info = () => {

}

export const error = () => {
  
}

export const warning = () => {

}

export const destroy = () => {
  notification.destroy();
}