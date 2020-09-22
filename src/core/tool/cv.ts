/*
canvas工具函数
*/
interface CvTool {
  // 获取鼠标在坐标上的位置
  getOffset: (ele: any) => void;
  // 坐标系转换
  eventWrapper: (e: any) => void;
  //弧度转角度
  toAngle: (e) => void;
  // 角度转弧度
  toRad: (e) => void;
}

class Cv implements CvTool {
  toAngle(rad) {
    return (rad * 180) / Math.PI;
  }

  toRad(angle) {
    return (angle * Math.PI) / 180;
  }

  getOffset(ele: any): { x: number; y: number } {
    let mouse = {x: 0, y: 0};
    ele.addEventListener('mousemove', (e) => {
      let {x, y} = this.eventWrapper(e);
      mouse.x = x;
      mouse.y = y;
    });
    return mouse;
  }

  eventWrapper(e: any): { x; y } {
    let {pageX, pageY, target} = e;
    let {left, top} = target.getBoundingClientRect();
    return {x: pageX - left, y: pageY - top};
  }
}

export class Arrow {
  x: number;
  private h: number;
  y: number;
  private w: number;
  public rotation: number;
  private fillStyle: string;
  private strokeStyle: string;

  constructor(props) {
    this.x = 0
    this.y = 0
    this.w = 60
    this.h = 30
    this.rotation = 0
    this.fillStyle = 'rgba(57,119,224)'
    this.strokeStyle = 'rgba(0,0,0,0)'
    Object.assign(this, props)
    return this
  }

  createPath(ctx) {
    let {w, h} = this
    ctx.beginPath()
    ctx.moveTo(-w / 2, - h / 2)
    ctx.lineTo(w / 10, -h / 2)
    ctx.lineTo(w / 10, -h)
    ctx.lineTo(w / 2, 0)
    ctx.lineTo(w / 10, h)
    ctx.lineTo(w / 10, h / 2)
    ctx.lineTo(-w / 2, h / 2)
    ctx.closePath()
    return this
  }

  render(ctx) {
    let {fillStyle, strokeStyle, rotation, x, y} = this
    ctx.save()
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.translate(x, y)
    ctx.rotate(rotation)
    this.createPath(ctx)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}

export const cv = new Cv();
