let qtree
function setup() {
  createCanvas(800 ,800)

  let boundary = new Rectangle(400, 400, 400, 400)
  qtree = new QuadTree(boundary, 4)
  console.log(qtree)

  // for (let i = 0; i < 500; i++){
  //   let p = new Point(random(width),random(height))
  //   qt.insert(p)
  // }

}

function draw () {
  if (mouseIsPressed){
    let m = new Point(mouseX,mouseY)
    qtree.insert(m)
  }

  background(0)
  qtree.show()
}