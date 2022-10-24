import request from "~/util/request";

// 获取图形验证码
export const getRequestCaptcha = () => {
  return request<unknown>({
    url: '/captcha/getCaptcha',
    method: 'GET',
  });
};

export interface ISendValideCodeProps {
  areaCode: string;
  captcha: {
    key: string,
    vx: number,
    width: number,
  };
  phone: string;
}
// 获取手机验证码
export const sendValideCode = (data: ISendValideCodeProps) => {
  return request<unknown>({
    url: '/sms/home_reg/send',
    method: 'POST',
    data,
  });
};

export interface IPersionInfo {
  corpName: string;
  ip?: string;
  name: string;
  phone: string;
  smsCode: string;
}

// 提交表单
export const submitPersonInfo = (data: IPersionInfo) => {
  return request<unknown>({
    url: '/account/home_registration',
    method: 'POST',
    data,
  });
};