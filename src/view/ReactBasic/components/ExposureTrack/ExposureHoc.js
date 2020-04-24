import React, { useEffect } from "react";
import exposure from "./exposure";

// hoc，目的在于属性封装
const exposureHoc = (WrappedComponent) => (props) => {
  const { index, eventId, sendData = true, eventParam } = props;
  // did mount 添加至观察列表
  useEffect(() => {
    sendData && exposure.add({ el: document.getElementById(`paper-content-${index}`) })
  }, []);
  const value = { index: index, ...eventParam };
  // 通过dom data 属性设置埋点参数
  return (
    <div id={`paper-content-${index}`} data-eventId={eventId} data-param={JSON.stringify(value)}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default exposureHoc;