
const playlist = [
    {
      name: "Song 1",
      artist: "Artist 1",
      image: "song1.jpg"
    },
    {
      name: "Song 2",
      artist: "Artist 2",
      image: "song2.jpg"
    },
   
  ];
  
  let currentSongIndex = 0; 
  function updateSongDisplay() {
    const songImage = document.getElementById("song-image");
    const songName = document.getElementById("song-name");
    
    const currentSong = playlist[currentSongIndex];
    
    songImage.src = currentSong.image;
    songName.textContent = `${currentSong.name} - ${currentSong.artist}`;
  }