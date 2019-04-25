import MovieItem from './MovieItem'
import BerserkImg from './Images/Berserk.jpg';
import CodeGeassImg from './Images/Code Geass.jpg';
import FullMetalAlchemistImg from './Images/Fullmetal Alchemist Brotherhood.jpg';
import SamuraiChamplooImg from './Images/SamuraiChamploo.jpg';
import TrigunImg from './Images/Trigun.jpg';
import CowboyBebopImg from './Images/Cowboy Bebop.jpg';

export default function returnGallery() {
    return [
      {id: 'Berserk', name: 'Berserk', movieImage: BerserkImg, details: 'Guts (ガッツ Gattsu) is a wandering mercenary who has known war and death since he was born from a hanged corpse and saved by his adopted mother, who died from the plague when he was only three years old. ... Griffith forces Guts into joining his forces upon defeating him in battle.'},
      {id: 'CodeGeass', name: 'Code Geass', movieImage: CodeGeassImg, details: 'he main lead of Code Geass is Lelouch—a prince of Britannia in hiding in Japan. His goals are simple: He wants to kill his father, the Emperor, for abandoning him and his crippled sister Nunnally after the assassination of their mother.'},
      {id: 'FMABrotherhood', name: 'Full Metal Alchemist: Brotherhood' , movieImage:FullMetalAlchemistImg, details: 'Abandoned by their father as kids, two young brothers, Edward and Alphonse Elric lived with their mother in a small town called Resembool. After losing their mother to a terminal illness, they try to resurrect her using alchemy - a science which allows you to transform physical matter from one form to another.'},
      {id: 'SamuraiChamploo', name: 'Samurai Champloo', movieImage: SamuraiChamplooImg, details: 'A young woman named Fuu is working as a waitress in a tea shop when she is abused by a band of samurai. She is saved by a mysterious rogue named Mugen and a young rōnin named Jin. Mugen attacks Jin after he proves to be a worthy opponent.'},
      {id: 'Trigun', name: 'Trigun', movieImage: TrigunImg, details: 'Trigun revolves around a man known as "Vash the Stampede" and two Bernardelli Insurance Society employees, Meryl Stryfe and Milly Thompson, who follow him around in order to minimize the damages inevitably caused by his appearance.'},
      {id: 'CowboyBebop', name: 'Cowboy Bebop', movieImage: CowboyBebopImg, details: 'Cocky Spike Spiegel and the crew of his spaceship, Bebop, an intrepid band of bounty hunters, land on Mars in the year 2071 chasing an enormous cash reward. The four-person team, also including looming cyborg Jet Black, fearless Faye Valentine and tech expert Edward, are in search of ex-military officer Vincent. The former hero has become a biological terrorist with an arsenal of devastating nano-bots that he\'ll let loose on Alba City on the night before Halloween if his demands aren\'t met.'}
    ];
  }