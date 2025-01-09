import { getPosts } from '@/app/utils/utils'
import { baseURL, routes as routesConfig } from '@/app/resources'

export default async function sitemap() {
    const activeRoutes = Object.keys(routesConfig)
        .filter((route) => routesConfig[route])
        .map((route) => ({
            url: `${baseURL}${route === '/' ? '' : route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }));

    return activeRoutes;
}