import ReactReconciler from "react-reconciler";

/**
 * 2 - complete 阶段
 *  在 mount/update 的情况下，调用 [createInstance] 生成宿主对象
 *  在 mount/update 的情况下，调用 [createTextInstance] 生成文本节点
 * 
 *  complete 阶段完成时：
 *  在 mount  的情况下，调用 [finalizeInitialChildren] 处理props的属性;
 *  在 update 的情况下，调用 [prepareUpdate] 处理更新的props属性，生成effectList;
 * 
 * 1.2 - Mutation 阶段
 * 
 * 1.2.1 - Placement:
 *      - 如果是 hostRoot(根节点)，会调用
 *        [appendChildToContainer]
 *      - 如果是 hostComponent(宿主节点)，会调用
 *        [appendChild]
 * 
 * 1.2.2 - Update:
 *      - 如果是element节点
 *        [commitUpdate]
 *      - 如果是文本节点
 *        [commitTextUpdate]
 * 
 * 1.2.3 - Deletion:
 *      - 如果是 hostRoot(根节点)，会调用
 *        [removeChildFromContainer]
 *      - 如果是 hostComponent(宿主节点)，会调用
 *        [removeChild]
 */

function traceWrap(hostConfig) {
  let traceWrappedHostConfig = {};
  Object.keys(hostConfig).map((key) => {
    const func = hostConfig[key];
    traceWrappedHostConfig[key] = (...args) => {
      console.trace(key);
      return func(...args);
    };
  });
  return traceWrappedHostConfig;
}

const rootHostContext = {};
const childHostContext = {};

// 在 completeWork, commitWork 中会调用的一些函数。

const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext;
  },
  // commit work 之前调用
  prepareForCommit: () => { },
  resetAfterCommit: () => { },
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return (
      typeof props.children === "string" || typeof props.children === "number"
    );
  },
  /**
   This is where react-reconciler wants to create an instance of UI element in terms of the target. Since our target here is the DOM, we will create document.createElement and type is the argument that contains the type string like div or img or h1 etc. The initial values of domElement attributes can be set in this function from the newProps argument
   */
  // complete work 调用的。创建元素节点
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    // 待实现
    const domElement = (type === "red" || type === "blue") ? 
    document.createElement('button')
    : document.createElement(type);

    type === 'red' && domElement.setAttribute('style', "background-color: red")
    type === 'blue' && domElement.setAttribute('style', "background-color: blue")

    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];

      if(propName === "children") {
        if(typeof propValue === "string" || typeof propValue === "number") {
          domElement.textContent = propValue;
        }
      } else if(propName === "onClick") {
        domElement.addEventListener("click", propValue)
      } else if(propName === "className") {
        domElement.setAttribute('class', propValue)
      } else {
        domElement.setAttribute(propName, propValue)
      }

    });

    return domElement;
  },
  createTextInstance: (text) => {
    return document.createTextNode(text);
  },
  // complete work 调用的。挂载父节点
  appendInitialChild: (parent, child) => {
    parent.appendChild(child);
  },
  appendChild(parent, child) {
    parent.appendChild(child);
  },
  finalizeInitialChildren: (domElement, type, props) => { },
  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    parent.appendChild(child);
  },
  // complete 阶段，如果节点存在，hostComponent
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  // commit 阶段，更新
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === "string" || typeof propValue === "number") {
          domElement.textContent = propValue;
        }
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
  },
  // commitMutationEffects、 delete
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child);
  },
  clearContainer() { }
};
const ReactReconcilerInst = ReactReconciler(traceWrap(hostConfig));
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  render: (reactElement, domElement, callback) => {
    // Create a root Container if it doesnt exist
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(
        domElement,
        false
      );
    }

    // update the root Container
    return ReactReconcilerInst.updateContainer(
      reactElement,
      domElement._rootContainer,
      null,
      callback
    );
  }
};
