import { MutableRefObject, useCallback, useRef, useState } from "react";

const handleMouseOut = (setValue: Function): void => setValue(0);

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

  const handleMouseOutWithSetValue = handleMouseOut.bind(setValue);
  const ref: any = useRef<T | null>(null);

  const callbackRef = useCallback<any>(
    (node: any) => {

      if (ref.current) {
        ref.current.removeEventListener("mousemove", handleMouseOver);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("mousemove", handleMouseOver);
      }
    },
    [ handleMouseOver, handleMouseOutWithSetValue ]
  );


  return [ callbackRef, value ];
}

export default useListingImageCarouselHoverSlide;