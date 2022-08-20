import { useCallback, useEffect, useState } from 'react'

const ScrollOnTop = () => {
    const [show, setShow] = useState(false);

    const handleNavigation = useCallback(
    e => {
        const window = e.currentTarget;
        if (270 < window.scrollY) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, []
    );

    useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
        window.removeEventListener("scroll", handleNavigation);
    }});


    return {
        show,
    }

}

export default ScrollOnTop