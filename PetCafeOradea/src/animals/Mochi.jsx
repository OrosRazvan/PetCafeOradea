import AnimalPage from './AnimalPage';
import { Mochi } from '../constants/AnimalDescription'; 

const MochiPage = () => {
  const mochiData = Mochi[0];

  return (
    <AnimalPage
      animalTitle={mochiData.animalTitle}
      imgURL={mochiData.imgURL}
      denumire={mochiData.denumire}
      additionalImages={mochiData.additionalImages}
    />
  );
};

export default MochiPage;
