class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  getPerimeter() {
    return 4 * this.width; // Since a square has all sides equal, perimeter = 4 * side
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
