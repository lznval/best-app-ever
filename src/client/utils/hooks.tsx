import { RefObject, useEffect } from "react"

type THooks = {
    ref: RefObject<HTMLElement>,
    callback: (isOutside: boolean) => void
}

export const useClickOutside = (ref: RefObject<HTMLElement>, callback: (isOutside: boolean) => void): void => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [ref, callback])
}