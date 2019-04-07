import * as React from "react";
import * as colors from "./colors";
import { DEFAULT_DURATION, DEFAULT_MASK } from "./utils";
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