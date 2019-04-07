import * as React from "react";
import * as ReactDOM from "react-dom";
import * as colors from "./colors";
import { DEFAULT_DURATION, DEFAULT_MASK } from "./utils";
import Notification from "./notification";
import { Close } from "./notice";

const notification = Notification.shareInstance();

export const message = (content: string, duration = DEFAULT_DURATION, mask = DEFAULT_MASK, onClose?: Close) => {
  
}