import { useEffect, useRef, useState } from "react";
import { useInfiniteScrollResult } from "../types/types";

export function useInfiniteScroll<T>(items: T[], initialCount = 5, step = 5) : useInfiniteScrollResult<T> {
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadMore = () => {
            setVisibleCount((prev) => Math.min(prev + step, items.length));
        };

        const handleScroll = () => {
            if (!containerRef.current) return;
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if(scrollTop + clientHeight >= scrollHeight - 100) {
                loadMore();
            }
        }

        const container = containerRef.current;
        if(container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if(container) {
                container.removeEventListener("scroll", handleScroll);
            }
        }
    },  [items, step]);

    useEffect(() => {
        setVisibleCount(initialCount);
    }, [items, initialCount])

    return {
        containerRef,
        visibleItems: items.slice(0, visibleCount),
    }
}