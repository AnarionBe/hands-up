export class Hitbox {
  constructor(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._color = '#0080FF'
  }

  isPointIn(x, y) {
    return x >= this._x && x <= this._x + this._width && y >= this._y && y <= this._y + this._height; 
  }

  get center() {
    return {
      x: this._x + this._width / 2,
      y: this._y + this._height / 2
    };
  }

  set color(c) {
    this._color = c;
  }

  get description() {
    return {
      x: this._x,
      y: this._y,
      width: this._width,
      height: this._height,
      center: this.center
    }
  }

  draw(ctx) {
    ctx.strokeStyle = this._color;
    ctx.beginPath();
    ctx.moveTo(this._x, this._y);
    ctx.lineTo(this._x + this._width, this._y);
    ctx.lineTo(this._x + this._width, this._y + this._height);
    ctx.lineTo(this._x, this._y + this._height);
    ctx.lineTo(this._x, this._y);
    ctx.stroke();
  }

  drawCenter(ctx) {
    ctx.strokeStyle = this._color;
    ctx.fillStyle = this._color;
    console.log(this.center)
    ctx.fillRect(this.center.x - 2, this.center.y - 2, 4, 4);
  }
}