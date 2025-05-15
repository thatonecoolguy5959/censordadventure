scene.onOverlapTile(SpriteKind.Player, assets.tile`ignorant trap`, function (sprite, location) {
    mySprite.follow(myEnemy, 100)
    mySprite.setImage(assets.image`censor`)
    info.startCountdown(10)
})
info.onCountdownEnd(function () {
    info.stopCountdown()
    mySprite.follow(myEnemy, 0)
    mySprite.setImage(assets.image`ilumination`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-10)
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`ilumination`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
myEnemy.setPosition(250, 250)
info.setLife(3)
