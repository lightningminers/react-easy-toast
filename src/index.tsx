import { DEFAULT_DURATION } from "./utils";
import Notification from "./notification";
import { CloseCallback, NoticeContent  } from "./notice";

const notification = Notification.shareInstance();

export const message = (content: NoticeContent, duration = DEFAULT_DURATION, onClose?: CloseCallback) => {
  notification.add({
    content,
    duration,
    onClose,
    type: "message",
  });
}

export const ok = (content: NoticeContent, duration = DEFAULT_DURATION, onClose?: CloseCallback) => {
  notification.add({
    content,
    duration,
    onClose,
    type: "ok",
  });
}

export const error = (content: NoticeContent, duration = DEFAULT_DURATION, onClose?: CloseCallback) => {
  notification.add({
    content,
    duration,
    onClose,
    type: "error",
  });
}

export const warning = (content: NoticeContent, duration = DEFAULT_DURATION, onClose?: CloseCallback) => {
  notification.add({
    content,
    duration,
    onClose,
    type: "warning",
  });
}

export const show = (content: NoticeContent, duration = DEFAULT_DURATION, onClose?: CloseCallback) => {
  notification.add({
    content,
    duration,
    onClose,
    type: "show",
  });
}

export const destroy = () => {
  notification.destroy();
}