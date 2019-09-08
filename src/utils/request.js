import Taro from '@tarojs/taro';

// const baseUrl = 'https://xxxx.com/api/'

//你也可以自己封装request
export default (options = { method: 'GET', data: {} }) => {
  return Taro.request({
    // url: baseUrl + options.url,
    url:options.url,
    data: {
      ...options.data
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.msg !== 'success') {
        // Taro.showToast({
        //   // title: `${res.data.msg}~` || res.data.code,
        //   title: res.data.code,
        //   icon: 'none',
        //   mask: true,
        // });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
