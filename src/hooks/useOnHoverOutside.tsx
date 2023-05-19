import { useEffect } from "react";

export function useOnHoverOutside(ref: React.RefObject<HTMLElement>, handler: (event: MouseEvent | TouchEvent) => void) {
    useEffect(
        () => {
            const listener = (event: MouseEvent | TouchEvent) => {
                if (!ref.current || ref.current.contains(event.target as Node)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mouseover", listener);
            return () => {
                document.removeEventListener("mouseout", listener);
            };
        },
        [ref, handler]
    );
}