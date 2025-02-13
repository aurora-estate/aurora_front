export default defineEventHandler(async (event) => {
    event.node.res.setHeader('content-type', 'text/plain')

    const config = useRuntimeConfig(event);

    const result = `
    User-Agent: *
    Allow: /
    Allow: /about
    
    Disallow: /prices
    
    Sitemap: ${config.public.frontendBaseURL}/sitemap.xml
    Host: ${config.public.frontendBaseURL}
    `
    return result
})