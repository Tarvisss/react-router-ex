import React from "react";
import { useParams } from "react-router-dom";
import ColorDetails from './ColorDetails'
const FilterColors = ({colors}) => {
        const params = useParams();
      
        if (params.name) {
          const currentColor = colors.find(
            colors => colors.name.toLowerCase() === params.name.toLowerCase()
          );
          return <ColorDetails color={currentColor} />;
        }
      
        return null;
}

export default FilterColors;