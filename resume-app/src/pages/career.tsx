import React from 'react';
import WorkImage from '../components/work';

export function Career() {
    return (
        <>
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16">Education</h1>
            </div>
            <div className="absolute  ">
                <WorkImage
                    imageUrl="/nm_2.png"
                    linkUrl="https://www.northwesternmutual.com/"
                    altText="LinkedIn"
                    toolTip="Click to view Jon's GitLab."
                />
            </div>
        </>
    );
}

export default React.memo(Career);