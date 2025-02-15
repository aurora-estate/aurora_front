export default defineEventHandler(async (event) => {
    event.node.res.setHeader('content-type', 'text/plain')

    const config = useRuntimeConfig(event);

    console.log('Frontend Base URL:', config.public.frontendBaseURL);
    const result = `User-Agent: *
Allow: /
Sitemap: ${config.public.frontendBaseURL}/sitemap.xml
Host: ${config.public.frontendBaseURL}/`
    return result
})