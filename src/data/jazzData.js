import spotifyImage from "../assets/images/spotify.jpg";
import deezerImage from "../assets/images/deezer.jpg";
import soundcloudImage from "../assets/images/soundcloud.jpg";
// genre:
import genreImage from "../assets/images/Jazz/jazz.jpg";
import historyImage from "../assets/images/Jazz/JazzHistory.jpg";
import milesDavisAlbumImage from "../assets/images/Jazz/MilesDavis_KindOfBlue.jpg";
import JohnColtraneAlbumImage from "../assets/images/Jazz/JohnColtrane_LoveSupreme.jpg";
import SaxophoneColossusAlbumImage from "../assets/images/Jazz/SaxophoneColossus_SonnyRollins.jpg";

import louisArmstrongImage from "../assets/images/Jazz/louis_armstrong.jpg";
import billieHolidayImage from "../assets/images/Jazz/billie-holiday.jpg";
import milesDavisImage from "../assets/images/Jazz/miles_davis.jpg";
// instrumenstImage
import instrumentsImage from "../assets/images/Jazz/instruments.jpg";

export const jazzData = {
  genre: "Jazz",
  image: genreImage,
  history: {
    title: "Der Ursprung und die Evolution des Jazz",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Frühe Anfänge",
        className: "jazz-history-text-box",
        content: "Jazz entstand Anfang des 20. Jahrhunderts in New Orleans aus Blues, Ragtime, Tanzmusik und europäischen Einflüssen. Afroamerikanische Musiker kombinierten Harmonien, Rhythmen und Improvisation (Louis Armstrong). Ab 1910 entwickelten weiße Musiker den Dixieland, später folgte der Swing (ab 1926, Duke Ellington, Ella Fitzgerald) mit Big Bands. Die 1940er brachten den schnellen Bebop (Dizzy Gillespie, Charlie Parker), dann folgten Cool Jazz (ab 1948, Miles Davis) und Hardbop (ab 1955, Art Blakey). Ab den späten 1950ern brach der Free Jazz (Ornette Coleman) traditionelle Strukturen auf. Auch heute spielt Jazz eine sehr große Rolle in unserer Musikkultur – von Big Bands über kleine Ensembles bis hin zu Solokünstlern, die in Schulen, Clubs, Bars und auf großen Bühnen auftreten. Seine Vielfalt und die Mischung aus Tradition und Innovation machen ihn zeitlos und lebendig. Musiker wie Michael Bublé, Till Brönner und Eliane Elias prägen den modernen Jazz bis heute. Auch modernere Arten wie Jazz-Funk und Fusion bereicherten das Genre mit Elementen aus Funk, Rock und R&B und schufen so einen dynamischen Sound. Sogar international hinterließ Jazz Spuren: In Japan begeistert Hiromi Uehara mit virtuosem Klavierspiel, während in der arabischen Welt die syrische Sängerin Rasha Rizk und der libanesische Komponist Ziad Rahbani Jazz mit traditioneller Musik verbinden."
      }
    ],
    image: historyImage,
    quiz: {
      question: "Bei welcher Kategorie von Jazz war Ella Fitzgerald berühmt?",
      options: ["Der Dixieland", "Blues", "Swing", "Cool Jazz"],
      answer: "Cool Jazz"
    }
  },
  icons: [
    {
      id: 1,
      name: "Louis Armstrong",
      image: louisArmstrongImage,
      description:
        "Louis Armstrong prägte den Jazz mit virtuosem Trompetenspiel und markanter Stimme, beeinflusste Swing und Improvisation. Er ist eine Jazzlegende und einer der einflussreichsten Musiker des 20. Jahrhunderts.",
      quiz: {
        question: "Welches Lied machte Louis Armstrong weltbekannt?",
        options: ["What a Wonderful World", "La Vie En Rose", "Hello, Dolly!", "When the Saints Go Marching In"],
        answer: "Hello, Dolly!"
      }
    },
    {
      id: 2,
      name: "Billie Holiday",
      image: billieHolidayImage,
      description:
        "Billie Holiday berührte mit ihrer einzigartigen Stimme und emotionalen Tiefe, ihre Songs erzählen von Liebe und Schmerz. Sie ist eine der größten Jazzsängerinnen aller Zeiten.",
      quiz: {
        question: "Welche Art von Jazz singt Billie Holiday?",
        options: ["Swing", "Blues", "Bepop", "Cool Jazz"],
        answer: "Bepop"
      }
    },
    {
      id: 3,
      name: "Miles Davis",
      image: milesDavisImage,
      description:
        "Miles Davis war ein innovativer Jazzmusiker und Trompeter, der den Jazz in verschiedenen Epochen prägte. Er ist bekannt für seine Alben 'Kind of Blue' und 'Bitches Brew'.",
      quiz: {
        question: "Welches Album machte Miles Davis weltbekannt?",
        options: ["Kind of Blue", "Bitches Brew", "Birth of the Cool", "Sketches of Spain"],
        answer: "Birth of the Cool"
      }
    }
  ],
  albums: [
    {
      id: 1,
      artist: "Miles Davis",
      albumTitle: "Kind of Blue",
      image: milesDavisAlbumImage,
      description: "Eines der besten Jazzalben aller Zeiten - Ein Muss für jeden Jazzliebhaber"
    },
    {
      id: 2,
      artist: "John Coltrane",
      albumTitle: "Love Supreme",
      image: JohnColtraneAlbumImage,
      description: "ein spirituelles und introspektives Meisterwerk, das Coltranes beispielloses Talent als Saxophonist und Komponist zeigt"
    },
    {
      id: 3,
      artist: "Sonny Rollins",
      albumTitle: "Saxophone Colossus",
      image: SaxophoneColossusAlbumImage,
      description: "ein Jazz-Klassiker mit dem Hit St. Thomas und beeindruckender Improvisation"
    }
  ],
  instruments: {
    title: "Instrumente, Sounds und Techniken von Jazz",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Instrumente von Jazz",
        className: "jazz-instruments-text-box",
        content: "Jazz ist bekannt für seine Vielfalt an Instrumenten und die einzigartige Art und Weise, wie sie gespielt werden. Zu den wichtigsten Instrumenten im Jazz gehören das Saxophon, die Trompete, das Klavier, der Kontrabass und das Schlagzeug. Improvisation und komplexe Harmonien sind zentrale Elemente des Jazz, die durch diese Instrumente zum Leben erweckt werden."
      }
    ],
    image: instrumentsImage,
    quiz: {
      question: "Welches Instrument ist ein wesentlicher Bestandteil von Jazz-Ensembles?",
      options: ["Gitarre", "Saxophon", "Klavier", "Violine"],
      answer: "Saxophon"
    }
  },
  playlists: {
    title: "Jazz Playlists & Mehr",
    playlists: [
      { id: 1, name: "Spotify Playlist", link: "https://open.spotify.com/playlist/dummy", image: spotifyImage },
      { id: 2, name: "Deezer Playlist", link: "https://www.deezer.com/playlist/dummy", image: deezerImage },
      { id: 3, name: "SoundCloud Playlist", link: "https://soundcloud.com/playlist/dummy", image: soundcloudImage },
      // Weitere Playlists ...
    ],
    video: "https://www.youtube.com/embed/VqhCQZaH4Vs?si=6BhomFTWq8PLM-70"
  }
};
