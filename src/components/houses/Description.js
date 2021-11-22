import React, { useContext } from 'react';

const Description = () => {
  const { houseDetails } = useContext(houseDetails);

  return (
    <div>
      {Description.houseDetails}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      accusantium optio placeat impedit iure assumenda numquam vero ipsam
      doloribus hic!
    </div>
  );
};

export default Description;
