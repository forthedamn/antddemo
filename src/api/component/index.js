import { componentType, componentList } from "./data.js";

const getComponentType = function () {
  return componentType;
};

const getComponentList = function () {
  return componentList;
};

const addComponent = function (data) {
  componentList.push(data);
};

// getComponentType: 组件管理 => 组件类型
// getComponentType: 组件管理 => 组件列表

export { getComponentList, getComponentType, addComponent };
