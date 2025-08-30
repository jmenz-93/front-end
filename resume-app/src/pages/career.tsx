import React from 'react';
// import WorkImage from '../components/work';
import MUImage from '../components/mu';
import UWMImage from '../components/uwm';

export function Career() {
    return (
        <>
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16">Education</h1>
            </div>
            <div className="container">
                <UWMImage
                    imageUrl="/uwm.png"
                    linkUrl="https://uwm.edu/"
                    altText="UWM"
                    size='w-40'
                />
                <MUImage
                    imageUrl="/mu.png"
                    linkUrl="https://www.marquette.edu/"
                    altText="MU"
                    size='w-24'
                />
            </div>
        </>
    );
}

export default React.memo(Career);