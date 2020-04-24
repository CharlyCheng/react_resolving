// polyfill 解决兼容性问题
import 'intersection-observer';
// 延迟时间，节流作用
IntersectionObserver.prototype['THROTTLE_TIMEOUT'] = 300;

class Exposure {
  constructor(maxNum = 10) {
    this.time = 0; // 延迟上报时间
    this.dataList = [];
    this.maxNum = maxNum; // 一次上报最大个数
    this._observer = null;
    this._timer = null;
    this.init();
  }

  // 初始化
  init() {
    const self = this;
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { // 进入视图触发
          try {
            self._timer && clearTimeout(self._timer); // 清除定时器
            const eventParam = entry.target.attributes['data-param'].value;
            const eventId = entry.target.attributes['data-eventId'].value;
            self.dataList.push({ eventId, eventParam });
            // 已经上报的节点、取消对该DOM的观察
            self._observer.unobserve(entry.target);
            // 超出最大长度直接上报
            if (self.dataList.length >= self.maxNum) {
              self.send();
            } else if (self.dataList.length > 0) {
              self._timer = setTimeout(() => { // 定时上报
                self.send();
              }, self.time);
            }
          } catch (err) {
            console.log(err);
          }
        }
      })
    }, {
      root: document.querySelector('#app'),
      rootMargin: "0px",
      threshold: 1 // 目标dom出现在视图的比例 0 - 1
    });
  }

  // 添加至观察列表
  add(entry) {
    const { el } = entry || {};
    this._observer && this._observer.observe(el)
  }

  // 触发上报数据
  send() {
    console.log('---上报埋点数据---');
    const data = this.dataList.slice(0, this.maxNum);
    window.ZM_JSSDK && window.ZM_JSSDK.sendStuEvent(data)
  }

  // 组件销毁，数据全部上报
  beforeUnmount() {
    console.log('---离开页面，上报埋点数据---');
    const data = this.dataList;
    window.ZM_JSSDK && window.ZM_JSSDK.sendStuEvent(data)
  }
}

export default new Exposure();