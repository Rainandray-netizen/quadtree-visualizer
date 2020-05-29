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
    let x = this.boundary.x
    let y = this.boundary.y
    let w = this.boundary.w
    let h = this.boundary.h

    let ne = new Rectangle(x + w / 2, y - h/2, w/2, h/2)
    let nw = new Rectangle(x - w / 2, y - h/2, w/2, h/2)
    let se = new Rectangle(x + w / 2, y + h/2, w/2, h/2)
    let sw = new Rectangle(x - w / 2, y + h/2, w/2, h/2)
   
    this.northwest = new QuadTree(nw)
    this.northeast = new QuadTree(ne)
    this.southwest = new QuadTree(sw)
    this.southeast = new QuadTree(se)
  }

  insert(point) {
    if(this.points.length < this.capacity){
      this.points.push(point)
    } else {
      if(!this.divided){
        this.subdivide()
        this.divided = true
      }
    }
  }
}