import { MutableRefObject, useCallback, useRef, useState } from "react";

function useListingImageCarouselHoverSlide<T>(): [ MutableRefObject<T>, number ] {
  const [ value, setValue ] = useState<number>(0);
  const handleMouseOver = (e: MouseEvent): void => {
    const node = e.target as HTMLElement;
    if (e.target) {
      const rect = node.getBoundingClientRect();
      let positionInPercents = (e.clientX - rect.left) / rect.width * 100;
      if (positionInPercents < 0) {
        positionInPercents = 0;
      }
      setValue(positionInPercents);
    }
  };
  const handleMouseOut = (): void => setValue(1);
  const ref: any = useRef<T | null>(null);

  const callbackRef = useCallback<any>(
    (node: HTMLElement) => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", handleMouseOver);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("mousemove", handleMouseOver);
        ref.current.addEventListener("mouseout", handleMouseOut);
      }
    },
    [ handleMouseOver, handleMouseOut ]
  );


  return [ callbackRef, value ];
}

export default useListingImageCarouselHoverSlide;