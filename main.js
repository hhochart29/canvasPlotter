const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const W = 800
const H = 600

const max = 50

const random = factor => {
  return Math.random() * factor
}

const pointsPerFace = 10

const monCarre = (ctx, x, y, c) => {
  ctx.beginPath()
  ctx.moveTo(x + random(10), y + random(5))
  let i
  let currentX = x
  let currentY = y

  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX + c / pointsPerFace * i, currentY + random(2))
  }
  currentX = x + c
  currentY = y

  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX + random(2), currentY + c / pointsPerFace * i)
  }
  currentX = x + c
  currentY = y + c
  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX - i * c / pointsPerFace, currentY + random(2))
  }
  currentX = x
  currentY = y + c

  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX + random(2), currentY - i * c / pointsPerFace)
  }

  ctx.closePath()
  ctx.stroke()
}

let i
for (i = 0; i < 400; i++) {
  const x = Math.random() * W
  const y = Math.random() * H
  const c = Math.random() * max
  monCarre(ctx, x, y, c)
}
