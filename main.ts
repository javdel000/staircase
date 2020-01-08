scene.setBackgroundColor(14)
let Juan = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . 5 5 5 5 d d 5 5 5 5 . . . . 
. . 5 d 5 d d d d d d 5 . . . . 
. . 5 d 5 d e d d e d 5 . . . . 
. . 5 5 5 d e d d e d 5 . . . . 
. . . . 5 d d d d d d 5 . . . . 
. . . . 5 5 5 5 d d 5 5 . . . . 
. . . . . f f 5 5 5 5 . . . . . 
. . . . . f f 5 5 5 . . . . . . 
. . d d f f f f f f f d d . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . 1 1 . 1 1 . . . . . . 
`, SpriteKind.Player)
for (let index = 0; index < 9; index++) {
    pause(100)
    Juan.y += 4
    pause(100)
    Juan.x += 4
}
pause(100)
for (let index = 0; index < 9; index++) {
    Juan.x += -4
    pause(100)
    Juan.y += -4
}
let Jesus = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . d e d e d . . . . . . 
. . . . . d e d e d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d 3 d d . . . . . . 
. . . . . f d d d f . . . . . . 
. . d f f f 5 f 5 f f f d . . . 
. . . . . f 5 f 5 f . . . . . . 
. . . . . f 5 f 5 f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . f . f . . . . . . . 
. . . . . . f . f . . . . . . . 
. . . . . 1 1 . 1 1 . . . . . . 
`, SpriteKind.Player)
for (let index = 0; index < 9; index++) {
    pause(100)
    Jesus.y += -4
    pause(100)
    Jesus.x += -4
}
for (let index = 0; index < 9; index++) {
    pause(100)
    Jesus.y += 4
    pause(100)
    Jesus.x += 4
}
