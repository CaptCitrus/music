function playMusic () {
    music.setVolume(60)
    music.play(music.createSong(assets.song`P Lead`), music.PlaybackMode.LoopingInBackground)
    music.setVolume(100)
    music.play(music.createSong(assets.song`P Harmony`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`P Bass 2`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`Drums2`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`P Bass`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`P Chords`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`Drums2`), music.PlaybackMode.LoopingInBackground)
}
