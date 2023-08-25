import * as React from 'react';
import { Carousel, CarouselButtonsDisplay, CarouselButtonsLocation, CarouselIndicatorShape } from "@pnp/spfx-controls-react/lib/Carousel";
import { ImageFit } from 'office-ui-fabric-react';
const PnpcCarousel : React.FC =  () => {
    return (
<Carousel
  buttonsLocation={CarouselButtonsLocation.center}
  buttonsDisplay={CarouselButtonsDisplay.buttonsOnly}
  isInfinite={true}
  indicatorShape={CarouselIndicatorShape.circle}
  pauseOnHover={true}

  element={[
    {
      imageSrc: 'https://images.unsplash.com/photo-1588614959060-4d144f28b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3078&q=80',
      title: 'Colosseum',
      description: 'This is Colosseum',
      url: 'https://en.wikipedia.org/wiki/Colosseum',
      showDetailsOnHover: true,
      imageFit: ImageFit.cover
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588614959060-4d144f28b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3078&q=80',
      title: 'Colosseum',
      description: 'This is Colosseum',
      url: 'https://en.wikipedia.org/wiki/Colosseum',
      showDetailsOnHover: true,
      imageFit: ImageFit.cover
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1588614959060-4d144f28b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3078&q=80',
      title: 'Colosseum',
      description: 'This is Colosseum',
      url: 'https://en.wikipedia.org/wiki/Colosseum',
      showDetailsOnHover: true,
      imageFit: ImageFit.cover
    }
  ]}
  onMoveNextClicked={(index: number) => { console.log(`Next button clicked: ${index}`); }}
  onMovePrevClicked={(index: number) => { console.log(`Prev button clicked: ${index}`); }}
/>
    );

};
export default PnpcCarousel;
