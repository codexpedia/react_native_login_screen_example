import React from 'react';
import { Path, Svg } from 'react-native-svg';

export default function IconShow({
    fillColor = '#000000',
    size = 24,
    viewBox = '0 0 24 24',
}) {
    return (
        <Svg
            height={size}
            viewBox={viewBox}
            width={size}
        >
            <Path
                fill={fillColor}
                d="M12,4.5C7,4.5 2.73,7.61 1,12c1.73,4.39 6,7.5 11,7.5s9.27,-3.11 11,-7.5c-1.73,-4.39 -6,-7.5 -11,-7.5zM12,17c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5zM12,9c-1.66,0 -3,1.34 -3,3s1.34,3 3,3 3,-1.34 3,-3 -1.34,-3 -3,-3z"
            />
        </Svg>
    );
}
