import { useEffect } from "react";

function useListingImageCarouselPostRender(id: number) {
  useEffect(() => {
    setInterval(() => {
      const el = document.getElementById(`listing-carousel-${id}`);
      if (el) {
        const imgEl = document.querySelector(`#listing-carousel-${id} img`) as HTMLImageElement;
        if (imgEl) {
          el.style.height = `${imgEl.height}px`;
        }
      }
    }, 1000);
  }, [  ]);
}

export default useListingImageCarouselPostRender;