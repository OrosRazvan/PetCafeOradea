import AnimalPage from './AnimalPage';
import { Smokey } from '../constants/AnimalDescription'; 

const SmokeyPage = () => {
  const smokeyData = Smokey[0];

  return (
    <AnimalPage
      animalTitle={smokeyData.animalTitle}
      imgURL={smokeyData.imgURL}
      denumire={smokeyData.denumire}
      additionalImages={smokeyData.additionalImages}
    />
  );
};

export default SmokeyPage;
