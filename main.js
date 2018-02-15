const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const W = 800
const H = 600

const max = 50
const maxSquare = 50
const pointsPerFace = 10
const amplitude = 5

const step = H / 2 / maxSquare
const random = factor => {
  return Math.random() * factor
}


const monCarre = (ctx, x, y, c) => {
  ctx.beginPath()
  ctx.moveTo(x + random(amplitude), y + random(amplitude))
  let i
  let currentX = x
  let currentY = y

  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX + c / pointsPerFace * i, currentY + random(amplitude))
  }
  currentX = x + c
  currentY = y

  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX + random(amplitude), currentY + c / pointsPerFace * i)
  }
  currentX = x + c
  currentY = y + c
  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX - i * c / pointsPerFace, currentY + random(amplitude))
  }
  currentX = x
  currentY = y + c

  for (i = 0; i < pointsPerFace; i++) {
    ctx.lineTo(currentX + random(amplitude), currentY - i * c / pointsPerFace)
  }

  ctx.closePath()
  ctx.stroke()
}

let i
for (i = 0; i < maxSquare; i++) {
  const x = i * step
  const y = i * step
  const c = H - i * step * 2
  monCarre(ctx, x, y, c)
}
