/*
canvas工具函数
*/
interface CvTool {
  getOffset: (ele: any) => void;
  eventWrapper: (e: any) => void;
}

class Cv implements CvTool {
  getOffset(ele: any): { x; y } {
    let mouse = { x: 0, y: 0 };
    ele.addEventListener('mousemove', (e) => {
      let { x, y } = this.eventWrapper(e);
      mouse.x = x;
      mouse.y = y;
    });
    return mouse;
  }
  eventWrapper(e: any): { x; y } {
    let { pageX, pageY, target } = e;
    let { left, top } = target.getBoundingClientRect();
    return { x: pageX - left, y: pageY - top };
  }
}

export const cv = new Cv();
