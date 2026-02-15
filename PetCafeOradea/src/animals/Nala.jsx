import AnimalPage from './AnimalPage';
import { Nala } from '../constants/AnimalDescription'; 

const NalaPage = () => {
  const nalaData = Nala[0];

  return (
    <AnimalPage
      animalTitle={nalaData.animalTitle}
      imgURL={nalaData.imgURL}
      denumire={nalaData.denumire}
      additionalImages={nalaData.additionalImages}
    />
  );
};

export default NalaPage;
