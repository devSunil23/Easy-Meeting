import { useEffect, useState } from 'react';

const useMedia = (query) => {
    const [media, setMedia] = useState(false);

    useEffect(() => {
        const matched = window.matchMedia(query);
        setMedia(matched.matches);
        matched.addEventListener('change', (e) => {
            setMedia(e.matches);
        });
    }, [media, query]);

    return media;
};

export default useMedia;
