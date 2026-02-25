import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hrfcustoms.com'

    const routes = [
        '',
        '/about',
        '/areas',
        '/areas/bear-lake-region-utah-idaho',
        '/areas/cache-valley-utah',
        '/areas/jackson-hole-region-wyoming',
        '/areas/logan-utah-area',
        '/areas/northern-utah',
        '/areas/preston-idaho-area',
        '/areas/soda-springs-idaho-area',
        '/areas/southern-idaho',
        '/areas/star-valley-wyoming',
        '/areas/western-wyoming',
        '/contact',
        '/faq',
        '/gallery',
        '/portfolio',
        '/process',
        '/services',
        '/services/concrete-services',
        '/services/custom-home-builder',
        '/services/design-build-contractor',
        '/services/excavation-work',
        '/services/framing-contractors',
        '/services/general-contractor-for-custom-homes',
        '/services/home-build-consultation',
        '/services/luxury-custom-home-builder',
        '/services/preconstruction-planning',
        '/services/project-management',
        '/testimonials',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
