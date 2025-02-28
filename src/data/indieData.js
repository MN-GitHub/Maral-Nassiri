import spotifyImage from "../assets/images/spotify.jpg";
import deezerImage from "../assets/images/deezer.jpg";
import soundcloudImage from "../assets/images/soundcloud.jpg";
// album:
import thenbhdalbum from "../assets/images/Indie/thenbhdalbum.jpg";
import the1975album from "../assets/images/Indie/the1975album.jpg";
import casalbum from "../assets/images/Indie/casalbum.jpg";
// icons:
import theNBHDImage from "../assets/images/Indie/TheNBHD.jpg";
import the1975Image from "../assets/images/Indie/The1975.jpg";
import casImage from "../assets/images/Indie/CAS.jpg";
// history:
import historyImage from "../assets/images/Indie/indieHistory.jpg"; // Neues Bild für Indie-Geschichte
// genre:
import genreImage from "../assets/images/Indie/indie.jpg";
// Instrument:
import instrumentsImage from "../assets/images/Indie/indieInstrumente.jpg";



export const indieData = {
  genre: "Indie",
  image: genreImage,
  history: {
    title: "Der Ursprung und die Evolution des Indie",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Frühe Anfänge",
        className: "indie-history-text-box",
        content: "Indie-Musik entstand in den späten 1970er Jahren als Gegenbewegung zum kommerziellen Mainstream und wurde durch unabhängige Labels und Künstler geprägt. Ursprünglich als „Independent“ bekannt, ermöglichten es diese Strukturen Musikern, kreative Freiheit zu bewahren und neue, oft experimentelle Klänge zu erforschen. Von Post-Punk bis hin zu Dream Pop hat Indie eine vielseitige Entwicklung durchlaufen und bleibt ein Symbol für musikalische Authentizität und Individualität. Heute ist Indie-Musik ein fester Bestandteil der globalen Musikszene und inspiriert Generationen von Künstlern."
      }
    ],
    image: historyImage,
    quiz: {
      question: "In welchem New Yorker Stadtteil entstand Rap?",
      options: ["1960er", "1970er", "1980er", "1990er"],
      answer: "1960er"
    }
  },
  icons: [
    {
      id: 1,
      name: "The Neighbourhood",
      image: theNBHDImage,
      description:
        "The Neighbourhood sind bekannt für ihren einzigartigen Mix aus Indie-Rock, R&B und düsteren, atmosphärischen Sounds. Ihre melancholischen Texte und cineastischen Klänge haben eine treue Fangemeinde geschaffen.",
      quiz: {
        question: "Mit welchem Song wurde The Neighbourhood international bekannt?",
        options: ["Sweater Weather", "R.I.P. 2 My Youth", "Daddy Issues", "Afraid"],
        answer: "Daddy Issues"
      }
    },
    {
      id: 2,
      name: "The 1975",
      image: the1975Image,
      description:
        "The 1975 kombinieren Indie-Rock mit elektronischen und poppigen Elementen. Ihr experimenteller Sound und tiefgründige, oft gesellschaftskritische Texte haben sie zu einer der innovativsten Bands ihrer Generation gemacht.",
      quiz: {
        question: "In welchem Jahr wurde The 1975 gegründet?",
        options: ["2002", "2010", "2013", "2009"],
        answer: "2010"
      }
    },
    {
      id: 3,
      name: "Cigarettes After Sex",
      image: casImage,
      description:
        "Cigarettes After Sex sind für ihren verträumten, melancholischen Sound bekannt, der durch sanfte Vocals und langsame, atmosphärische Arrangements geprägt ist. Ihre Musik vermittelt eine tief emotionale und intime Stimmung.",
      quiz: {
        question: "Welches Album machte Cigarettes After Sex berühmt?",
        options: ["Cigarettes After Sex", "X’s", "Cry", "Neon Moon"],
        answer: "Cry"
      }
    }
  ],
  albums: [
    {
      id: 1,
      artist: "The Neighbourhood",
      albumTitle: "I Love You.",
      image: thenbhdalbum,
      description: "Ein atmosphärisches Album, das mit melancholischen Melodien und introspektiven Texten eine düstere, aber zugleich fesselnde Stimmung schafft."
    },
    {
      id: 2,
      artist: "The 1975",
      albumTitle: "The 1975",
      image: the1975album,
      description: "Ein vielseitiges Debütalbum, das Indie-Rock mit Pop- und Synthwave-Elementen kombiniert und die Band weltweit bekannt machte."
    },
    {
      id: 3,
      artist: "Cigarettes After Sex",
      albumTitle: "X’s",
      image: casalbum,
      description: "Ein verträumtes Album voller sanfter Klänge und gefühlvoller Texte, das die charakteristische Sehnsucht und Romantik der Band widerspiegelt."
    }
  ],
  instruments: {
    title: "Instrumente, Sounds und Techniken von Indie",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Instrumente von Indie",
        className: "indie-instruments-text-box",
        content: "Indie-Musik zeichnet sich durch eine vielfältige Instrumentierung aus. Charakteristisch sind clean gespielte E-Gitarren mit Reverb-Effekten, sanfte Synthesizer, analoge Drum-Sounds und warme Basslines. Viele Indie-Bands setzen auf einen rohen, authentischen Klang statt auf überproduzierte Studioeffekte. Die DIY-Ästhetik und kreative Klangexperimente sind dabei genauso wichtig wie traditionelle Instrumente.ap lebt von innovativen Beats und modernen Soundtechniken..."
      }
    ],
    image: instrumentsImage,
    quiz: {
      question: "Wie gut kennst du die typischen Sounds der Indie-Musik?",
      options: ["Synthesizer", "Akustikgitarre", "E-Gitarre mit Reverb", "Saxophon"],
      answer: "E-Gitarre mit Reverb"
    }
  },
  playlists: {
    title: "Indie Playlists & Mehr",
    playlists: [
      { id: 1, name: "Spotify Playlist", link: "https://open.spotify.com/playlist/37i9dQZF1DWYJeWl6ior4d", image: spotifyImage },
      { id: 2, name: "Deezer Playlist", link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.deezer.com/en/playlist/735488796&ved=2ahUKEwjBtNfWz-OLAxVmSWwGHZeaIwcQFnoECBMQAw&usg=AOvVaw2bg8rq9jWBzm96-d9e0jIv", image: deezerImage },
      { id: 3, name: "SoundCloud Playlist", link: "https://soundcloud.com/buzzing-playlists/sets/buzzing-indie", image: soundcloudImage },
      // Weitere Playlists ...
    ],
    video: "https://www.youtube.com/embed/6366dxFf-Os"
  }
};
