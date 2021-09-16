import { useState, useEffect } from "react";

type UseInfiniteScrollArgs = {
    hasMore?: boolean;
    threshold?: number;
}

export const useInfiniteScroll = ({ hasMore = false, threshold = 0.95 }: UseInfiniteScrollArgs = {}): boolean => {
    const [loadMore, setLoadMore] = useState(false);
    const handleScroll = () => {
        const isElementAtBottom = window.innerHeight + document.documentElement.scrollTop >= threshold * document.documentElement.offsetHeight;
        setLoadMore(isElementAtBottom);
    }

    useEffect(() => {
        if (!loadMore && hasMore) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMore, hasMore]);

    return loadMore;
};
