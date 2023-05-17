import { instance } from "./AxiosInstance";

export async function getPreviewContents(payload) {
    console.log("🚀 ~ file tagContents.js:4 ~ getTagsContents ~ payload:", payload)
    const { previewID } = payload
    const response = await instance.get(`/tempEditor/${previewID}`)
        .then(res => res.data)
    // const { data, currentPage, limit, totalCount, totalPages } = response
    // console.group('getTagsContents')
    console.log(response)
    // console.groupEnd('getTagsContents')

    return response
}


// get sitemap url
export async function getCheckURLContents(payload) {
    console.log("🚀 ~ file: sitemapContent.js:17 ~ getCheckURLContents ~ payload:", payload)
    const { id } = payload
    const response = await instance.get(`/checkUrl/${id}`)
        .then(res => res.data.data)
    // const { data, currentPage, limit, totalCount, totalPages } = response
    // console.group('getTagsContents')
    console.log(response)
    // console.groupEnd('getTagsContents')

    return response
}

export async function getOriginContents(payload) {
    console.log("🚀 ~ file: sitemapContent.js:17 ~ getCheckURLContents ~ payload:", payload)
    const { id } = payload
    const response = await instance.get(`/checkUrl/${id}`)
        .then(res => res.data.data)
    // const { data, currentPage, limit, totalCount, totalPages } = response
    // console.group('getTagsContents')
    console.log(response)
    // console.groupEnd('getTagsContents')

    return response
}
