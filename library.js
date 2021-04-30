const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }
     
const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
printPlaylists: function () {
       for (const playlists in this.playlists){ 
              console.log(`${playlists}: ${this.playlists[playlists].name} - ${this.playlists[playlists].tracks.length} tracks`)    
       }
},
printTracks: function() {
       for (const track in this.tracks) {
              console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
       }
},
printPlaylist: function(playlistId) {
       let arrOfTracks = this.playlists[playlistId].tracks; 
       let lengthOfPlaylist = this.playlists[playlistId].tracks.length
       let nameofPlaylist = this.playlists[playlistId].name;
       console.log(`${playlistId}: ${nameofPlaylist} - ${lengthOfPlaylist} tracks`)
       for (let i = 0; i < arrOfTracks.length; i++) {
              
              let nameOfTrack = this.tracks[arrOfTracks[i]].name;
              let artist = this.tracks[arrOfTracks[i]].artist;
              let album = this.tracks[arrOfTracks[i]].album;
              console.log(`${arrOfTracks[i]}: ${nameOfTrack} by ${artist} (${album})`)
       }
       
},
addTrackToPlaylist:function(trackId, playlistId) {
       this.playlists[playlistId].tracks.push(trackId)
},
addTrack: function(name, artist, album) {
       let newTrack = {id: generateUid(), name: name, artist: artist, album: album}
       const newID = newTrack.id;
       this.tracks[newID] = newTrack;
},
addPlaylist: function(name) {
       let newPlaylist = {id: generateUid(), name: name, tracks: []}
       const newID = newPlaylist.id;
       this.playlists[newID] = newPlaylist;
}
};


// /////////////////////////////
// // FUNCTIONS TO IMPLEMENT:
// /////////////////////////////

// // prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks


// const printPlaylists = function() {
//        for (const playlists in library.playlists){ 
//               console.log(`${playlists}: ${library.playlists[playlists].name} - ${library.playlists[playlists].tracks.length} tracks`)    
//        }
// }


// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function() {
//        for (const track in library.tracks) {
//               console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
//        }
// }

// // prints a list of tracks for a given playlist, using the following format:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {
//        let arrOfTracks = library.playlists[playlistId].tracks; //["t01", "t02"]
//        let lengthOfPlaylist = library.playlists[playlistId].tracks.length
//        let nameofPlaylist = library.playlists[playlistId].name;
//        console.log(`${playlistId}: ${nameofPlaylist} - ${lengthOfPlaylist} tracks`)
//        for (let i = 0; i < arrOfTracks.length; i++) {
              
//               let nameOfTrack = library.tracks[arrOfTracks[i]].name;
//               let artist = library.tracks[arrOfTracks[i]].artist;
//               let album = library.tracks[arrOfTracks[i]].album;
//               console.log(`${arrOfTracks[i]}: ${nameOfTrack} by ${artist} (${album})`)
//        }
       
// }



// // adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
//        library.playlists[playlistId].tracks.push(trackId)
// }



// // generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)


// // adds a track to the library
// const addTrack = function(name, artist, album) {
//        let newTrack = {id: generateUid(), name: name, artist: artist, album: album}
//        const newID = newTrack.id;
//        library.tracks[newID] = newTrack;
// }

// // adds a playlist to the library
// const addPlaylist = function(name) {
//        let newPlaylist = {id: generateUid(), name: name, tracks: []}
//        const newID = newPlaylist.id;
//        library.playlists[newID] = newPlaylist;
// }


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri") 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// }

