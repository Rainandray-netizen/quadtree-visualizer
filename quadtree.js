class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y 
    this.w = w
    this.h = h
  }
}

class QuadTree {
  constructor(boundary, n) {
    this.boundary = boundary
    this.capacity = n
    this.points = []
    this.divided = false
  }

  subdivide() {
    let nw = new Rectangle(this.x + this.w / 2, this.y - this.h/2, this.w/2, this.h/2)
    let ne = new Rectangle(this.x - this.w / 2, this.y - this.h/2, this.w/2, this.h/2)
    let sw = new Rectangle(this.x + this.w / 2, this.y + this.h/2, this.w/2, this.h/2)
    let se = new Rectangle(this.x - this.w / 2, this.y + this.h/2, this.w/2, this.h/2)
   
    this.northwest = new QuadTree(nw)
    this.northeast = new QuadTree(ne)
    this.southwest = new QuadTree(sw)
    this.southeast = new QuadTree(se)
  }

  insert(point) {
    if(this.points.length < this.capacity){
      this.points.push(point)
    } else {
      this.subdivide()
    }
  }
}