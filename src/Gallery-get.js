import MovieItem from './MovieItem'
import BerserkImg from './Images/Berserk.jpg';
import CodeGeassImg from './Images/Code Geass.jpg';
import FullMetalAlchemistImg from './Images/Fullmetal Alchemist Brotherhood.jpg';
import SamuraiChamplooImg from './Images/SamuraiChamploo.jpg';
import TrigunImg from './Images/Trigun.jpg';
import CowboyBebopImg from './Images/Cowboy Bebop.jpg';

export default function returnGallery() {
    return [
      {id: 'Berserk', name: 'BerserkImg', movieImage: BerserkImg},
      {id: 'CodeGeass', name: 'Code Geass', movieImage: CodeGeassImg},
      {id: 'FMABrotherhood', name: 'Full Metal Alchemist: Brotherhood' , movieImage:FullMetalAlchemistImg},
      {id: 'SamuraiChamploo', name: 'Samurai Champloo', movieImage: SamuraiChamplooImg},
      {id: 'Trigun', name: 'Trigun', movieImage: TrigunImg},
      {id: 'CowboyBebop', name: 'Cowboy Bebop', movieImage: CowboyBebopImg}
    ];
  }