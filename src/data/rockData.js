import spotifyImage from "../assets/images/spotify.jpg";
import deezerImage from "../assets/images/deezer.jpg";
import soundcloudImage from "../assets/images/soundcloud.jpg";
// album:
import eminemAlbumImage from "../assets/images/Rock/LZAlbum.jpg";
import tupacAlbumImage from "../assets/images/Rock/JimiHendrixAlbum.jpg";
import jayzAlbumImage from "../assets/images/Rock/AlbumAudioSlave.jpg";
// icons:
import eminemIconImage from "../assets/images/Rock/ledZeppelin.jpg";
import tupacIconImage from "../assets/images/Rock/jimiHendRix.jpg";
import jayzIconImage from "../assets/images/Rock/rock1.jpg";
// history:
import historyImage from "../assets/images/Rock/History.jpg";
// Instrument:
import instrumenstImage from "../assets/images/Rock/instruments.jpg";
// genre:
import genreImage from "../assets/images/Rock/rock.jpg";


export const rockData = {
  genre: "Rock",
  image: genreImage,
  history: {
    title: "Der Ursprung und die Evolution des Rock",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Frühe Anfänge",
        className: "rock-history-text-box",
        content:
          "Die Geschichte des Rock beginnt in den 1950er-Jahren, als sich Rhythm & Blues, Country und Gospel zu einer neuen, energiegeladenen Musikrichtung verbanden. Künstler wie Chuck Berry, Little Richard und Elvis Presley prägten den frühen Rock ’n’ Roll mit eingängigen Riffs, treibenden Rhythmen und rebellischer Attitüde."
      },
      {
        heading: "Blues Rock",
        className: "blues-rock-history-text-box",
        content:
          "Der Blues Rock entstand in den 1960ern, als Musiker den klassischen Blues lauter, schneller und verzerrter machten. The Rolling Stones, The Yardbirds und Cream brachten ihn nach vorne, während Jimi Hendrix und Led Zeppelin ihn mit psychedelischen und harten Riffs auf ein neues Level hoben. Später prägten Bands wie ZZ Top und The Allman Brothers Band den Sound weiter und machten ihn grooviger."
      },
      {
        heading: "Alternativ Rock",
        className: "alternative-rock-history-text-box",
        content:
          "Die 90er brachten mit Grunge und Alternative Rock eine rohe, ehrliche Note zurück – und hier setzt Audioslave an. Die Band vereinte den wuchtigen Sound von Rage Against the Machine mit der kraftvollen, bluesigen Stimme von Chris Cornell (Soundgarden). Ihr Stil mischte Hard Rock mit Alternative und Funk-Einflüssen, ähnlich wie Pearl Jam, Alice in Chains und Stone Temple Pilots, die mit emotionalem, rifflastigem Sound den Alternative Rock prägten."
      }
    ],
    image: historyImage,
    quiz: {
      question: "Wer gilt als einer der einflussreichsten Gitarristen des Rock?",
      options: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "Alle oben genannten"],
      answer: "Jimmy Page"

    }
  },
  icons: [
    {
      id: 1,
      name: "Led Zeppelin",
      image: eminemIconImage, //ledZeppelinImage,
      description:
        "Led Zeppelin war eine britische Rock-Band.",
        quiz: {
      question: "In welchem Jahr wurde Led Zeppelin gegründet?",
      options: ["1971", "1965", "1973", "1968"],
      answer: "1917"
        }
    },
    {
      id: 2,
      name: "Jimi Hendrix",
      image: tupacIconImage, //hendrixImage
      description:
        " Er war ein US-amerikanischer Gitarrist und Sänger.",
        quiz: {
      question: "Wie lautet der Name von Jimi Hendrix’ berühmtem Debütalbum?",
      options: ["Are You Experienced", "Electric Ladyland", "Axis: Bold as Love", "Band of Gypsys"],
      answer: "Electric Ladyland"
        }
    },
    {
      id: 3,
      name: "Chris Cornell",
      image: jayzIconImage, //cornellImage
      description: "Chris Cornell war eine der prägendsten Stimmen des Grunge und Alternative Rock. Als Frontmann von Soundgarden und Audioslave verband er kraftvolle Vocals mit tiefgehenden, emotionalen Texten. Seine Mischung aus rauem Hard Rock, melancholischem Grunge und bluesigen Einflüssen machte ihn zu einer der einzigartigsten Figuren der Rockgeschichte.",
      quiz: {
      question: "Mit welcher Band war Chris Cornell nicht verbunden?",
      options: ["Audioslave", "Soundgarden", "Temple of the Dog", "Pearl Jam"],
      answer: "Temple of the Dog"
      }
    }
  ],
  albums: [
    {
      id: 1,
      artist: "Led Zeppelin",
      albumTitle: "Mothership (Remastered 2007)",
      image: eminemAlbumImage,
      description: "Dieses Gateway- Album mit der Best-of Sammlung der Band verspricht eine Odysse durch das musikalische Universum von Led Zeppelin, dabei verläuft die Reise von Psychedelischen Elementen verschmelzend mit Blues, über Hard-Rock bis hin zu Folkmusik."
    },
    {
      id: 2,
      artist: "jimi Hendrix",
      albumTitle: "Are You Experienced (1967)",
      image: tupacAlbumImage,
      description: "Das Album, bei dem Rock und LSD beste Freunde wurden. Verzerrte Gitarren, surreale Sounds und pures Psychedelic-Feuer – eine Klangreise ohne Rückfahrkarte. "
    },
    {
      id: 3,
      artist: "Chris Cornell",
      albumTitle: "Audioslave(2002)",
      image: jayzAlbumImage,
      description: "Dieses Album fühlt sich an wie eine staubige Straße bei Sonnenuntergang, auf der du mit einem rostigen Muscle Car dahinrast – der Tank ist fast leer, aber du trittst trotzdem aufs Gas, weil die Musik dich antreibt.."
    }
  ],
  instruments: {
    title: "Instrumente, Sounds und Techniken von Rock",
    // Ein Array von Textblöcken
    texts: [
      {
        heading: "Blues Rock",
        className: "rock-instruments-text-box",
        content: "Dieser Stil basiert auf den Strukturen des Blues, kombiniert mit der Energie des Rock.Typische Instrumente sind elektrische Gitarren mit verzerrten Sounds, Bass und Schlagzeug, aber auch Keyboard-Effekte, wie die Orgel.      Harmonisch dominieren die klassischen Zwölftakt-Blues-Schemata und Pentatonik-Skalen."
      },
      {
        heading: "Psychedelic Rock",
        className: "psychedelic-rock-history-text-box",
        content: "Hier stehen experimentelle Klangwelten im Vordergrund. Verzerrte Gitarren, Echoeffekte und ungewöhnliche Akkordfolgen erzeugen einen sphärischen Sound. Musiker nutzen oft modale Tonleitern und ausgedehnte Jams, um hypnotische Atmosphären zu schaffen."

      },
      {
        heading: "Alternative & Grunge Rock",
        className: "alternative-rock-history-text-box",
        content: "In den 90ern brachte Grunge eine rohe, emotionale Energie in den Rock. Fuzz-Gitarren, düstere Akkordfolgen und dynamische Laut-Leise-Wechsel sind prägend. Texte sind oft introspektiv und drücken gesellschaftliche Frustrationen aus."
      }
    ],
    image: instrumenstImage,
    quiz: {
      question: "Wie gut kennst du die Geräte und Techniken, die den Rock prägen?",
      options: ["Synthesizer", "E-Gitarre", "Saxophon", "Geige"],
      answer: "Saxophon"
    }
  },
  playlists: {
    title: "Rock Playlists & Mehr",
    playlists: [
      { id: 1, name: "Spotify Playlist", link: "https://open.spotify.com/playlist/5XA0hFK03ZKXlDCPNo9z0q?si=2dc72939d86a4051", image: spotifyImage },
      { id: 2, name: "Deezer Playlist", link: "https://www.deezer.com/playlist/dummy", image: deezerImage },
      { id: 3, name: "SoundCloud Playlist", link: "https://soundcloud.com/playlist/dummy", image: soundcloudImage },
      // Weitere Playlists ...
    ],
    video: "https://www.youtube.com/embed/HQmmM_qwG4k?si=dM5Tj8Cu4PvUO_iN"
  }
};
