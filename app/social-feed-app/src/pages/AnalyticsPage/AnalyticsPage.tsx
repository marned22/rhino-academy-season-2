import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import type { AnalyticsData } from "../../types/types";
import styles from "./Analytics.module.scss";

const cache = new Map<string, AnalyticsData>();

export const analyticsLoader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url).pathname;
    if (cache.has(url)) return cache.get(url);

    const data: AnalyticsData = {
        stats: [1, 2, 3, 4, 5],
        updated: new Date().toISOString(),
    };

    cache.set(url, data);
    return data;
};

export default function AnalyticsPage() {
    const data = useLoaderData() as AnalyticsData;

    return (
        <div className={styles.analyticsCard}>
            <h1 className={styles.analyticsTitle}>📊 Analytics</h1>
            <div className={styles.analyticsStats}>
                <strong>Stats:</strong>
                <ul>
                    {data.stats.map((stat, idx) => (
                        <li key={idx}>Value {idx + 1}: <b>{stat}</b></li>
                    ))}
                </ul>
                <div className={styles.analyticsUpdated}>
                    <strong>Last updated:</strong> {new Date(data.updated).toLocaleString()}
                </div>
            </div>
        </div>
    );
}
