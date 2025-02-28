import spotifyImage from "../assets/images/spotify.jpg";
import deezerImage from "../assets/images/deezer.jpg";
import soundcloudImage from "../assets/images/soundcloud.jpg";
// album:
import eminemAlbumImage from "../assets/images/Rap/eminem_album.jpg";
import tupacAlbumImage from "../assets/images/Rap/tupac_album.jpg";
import jayzAlbumImage from "../assets/images/Rap/jayz_album.jpg";
// icons:
import MinemIconImage from "../assets/images/Rap/eminem.jpg";
import tupacIconImage from "../assets/images/Rap/tupac.jpg";
import jayzIconImage from "../assets/images/Rap/jayz.jpg";
// history:
import historyImage from "../assets/images/Rap/history.jpg";
// Instrument:
import instrumenstImage from "../assets/images/Rap/instruments.jpg";
// genre:
import genreImage from "../assets/images/Rap/rap.jpg";


export const rapData = {
  genre: "Rap",
  image: genreImage,
  history: {
    title: "Der Ursprung und die Evolution des Rap",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Frühe Anfänge",
        className: "rap-history-text-box",
        content: "Rap wurde in den späten 1970er Jahren in der Bronx geboren. Rap ist eine der einflussreichsten Musikrichtungen mit tiefen Wurzeln in der Hip-Hop-Kultur und ..."
      }
    ],
    image: historyImage,
    quiz: {
      question: "In welchem New Yorker Stadtteil entstand Rap?",
      options: ["Brooklyn", "Queens", "Bronx", "Manhattan"],
      answer: "Queens"
    }
  },
  icons: [
    {
      id: 1,
      name: "Eminem",
      image: MinemIconImage,
      description:
        "Eminem, auch bekannt als Slim Shady, revolutionierte den Rap mit seinem provokanten Stil und außergewöhnlichen Lyrik. Seine Texte reflektieren persönliche Kämpfe und gesellschaftliche Themen.",
      quiz: {
        question: "Welches Album machte Eminem weltbekannt?",
        options: ["The Slim Shady LP", "Recovery", "Relapse", "The Marshall Mathers LP"],
        answer: "Relapse"
      }
    },
    {
      id: 2,
      name: "Tupac",
      image: tupacIconImage,
      description:
        "Tupac Shakur ist ein Symbol des amerikanischen Rap. Mit seinen tiefgründigen Texten und charismatischer Präsenz prägte er eine ganze Generation und bleibt bis heute einflussreich.",
      quiz: {
        question: "In welchem Jahr wurde Tupac geboren?",
        options: ["1971", "1975", "1973", "1970"],
        answer: "1970"
      }
    },
    {
      id: 3,
      name: "Jay-Z",
      image: jayzIconImage,
      description:
        "Jay-Z ist nicht nur ein Rapper, sondern auch ein erfolgreicher Unternehmer. Mit seinem einzigartigen Flow und cleveren Texten hat er die Musikindustrie nachhaltig beeinflusst.",
      quiz: {
        question: "Wie lautet der Geburtsname von Jay-Z?",
        options: ["Shawn Carter", "Jay Carter", "John Carter", "Jason Carter"],
        answer: "John Carter"
      }
    }
  ],
  albums: [
    {
      id: 1,
      artist: "Eminem",
      albumTitle: "The Marshall Mathers LP",
      image: eminemAlbumImage,
      description: "Ein ikonisches Album, das den Rap revolutionierte."
    },
    {
      id: 2,
      artist: "Tupac",
      albumTitle: "All Eyez on Me",
      image: tupacAlbumImage,
      description: "Ein Meisterwerk, das Tupac's Einfluss auf die Kultur festigte."
    },
    {
      id: 3,
      artist: "Jay-Z",
      albumTitle: "The Blueprint",
      image: jayzAlbumImage,
      description: "Ein Album, das den modernen Rap maßgeblich prägte."
    }
  ],
  instruments: {
    title: "Instrumente, Sounds und Techniken von Rap",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Instrumente von Rap",
        className: "rap-instruments-text-box",
        content: "Rap lebt von innovativen Beats und modernen Soundtechniken..."
      }
    ],
    image: instrumenstImage,
    quiz: {
      question: "Welches Gerät ist ein wesentlicher Bestandteil moderner Rap-Produktionen?",
      options: ["Gitarre", "Drum Machine", "Klavier", "Violine"],
      answer: "Klavier"
    }
  },
  playlists: {
    title: "Rap Playlists & Mehr",
    playlists: [
      { id: 1, name: "Spotify Playlist", link: "https://open.spotify.com/playlist/dummy", image: spotifyImage },
      { id: 2, name: "Deezer Playlist", link: "https://www.deezer.com/playlist/dummy", image: deezerImage },
      { id: 3, name: "SoundCloud Playlist", link: "https://soundcloud.com/playlist/dummy", image: soundcloudImage },
      // Weitere Playlists ...
    ],
    video: "https://www.youtube.com/embed/0wrS5txE-_U"
  }
};
