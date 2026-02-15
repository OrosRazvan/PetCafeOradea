import AnimalPage from './AnimalPage';
import { Garfield } from '../constants/AnimalDescription'; 

const GarfieldPage = () => {
  const garfieldData = Garfield[0];

  return (
    <AnimalPage
      animalTitle={garfieldData.animalTitle}
      imgURL={garfieldData.imgURL}
      denumire={garfieldData.denumire}
      additionalImages={garfieldData.additionalImages}
    />
  );
};

export default GarfieldPage;
