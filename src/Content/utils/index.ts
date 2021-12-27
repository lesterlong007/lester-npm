/**
 * Created by Lester on 2021/1/30
 */

import qs from "qs";

/**
 * 轻提示
 */
export const Toast = {
  info(text: string, duration = 2, parentElement?: HTMLElement) {
    const target = parentElement || document.body;
    const toast = document.createElement("div");
    toast.innerText = text;
    toast.style.position = parentElement ? "absolute": "fixed";
    toast.style.left = "50%";
    toast.style.top = "50%";
    toast.style.maxWidth = "150px";
    toast.style.lineHeight = "20px";
    toast.style.transform = "translate(-50%, -50%)";
    toast.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    toast.style.padding = "8px 15px";
    toast.style.borderRadius = "5px";
    toast.style.fontSize = "12px";
    toast.style.color = "#ffffff";
    toast.style.zIndex = "99999";
    target.appendChild(toast);
    setTimeout(() => {
      target.removeChild(toast);
    }, duration * 1000)
  },
  success(text: string, duration: number = 2) {
    this.info(text, duration);
  },
  fail(text: string, duration: number = 2) {
    this.info(text, duration);
  }
};

/**
 * 复制
 * @param text
 * @param showTip
 */
export const copy = (text: string, showTip: boolean = true) => {
  const ele = document.createElement('input');
  ele.value = text;
  document.body.appendChild(ele);
  ele.select();
  document.execCommand('copy');
  document.body.removeChild(ele);
  if (showTip) {
    Toast.info('复制成功');
  }
};

/**
 * 设置title
 * @param tile
 */
export const setTitle = (tile: string) => {
  document.title = tile;
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'display: none; width: 0; height: 0;';
  iframe.src = '';

  const listener = () => {
    setTimeout(() => {
      iframe.removeEventListener('load', listener);
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 0);
    }, 0);
  };
  iframe.addEventListener('load', listener);
  document.body.appendChild(iframe);
};

/**
 * 获取路由query参数
 * @param key
 */
export const getQueryParam = (key?: string) => {
  const { hash, search } = window.location;
  const hashIndex: number = hash.indexOf('?');
  let param: any = {};
  if (hashIndex > -1) {
    param = {
      ...qs.parse(hash.slice(hashIndex), { ignoreQueryPrefix: true })
    }
  }
  if (search) {
    param = {
      ...param,
      ...qs.parse(search, { ignoreQueryPrefix: true })
    }
  }

  if (key) {
    return param[key] || null;
  }
  return param;
};
