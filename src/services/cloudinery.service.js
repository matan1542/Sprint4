
export async function uploadImg(file) {
    const CLOUD_NAME = 'triplen91'
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'nmfortgu')
    try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: data
        })
        const response = await res.json()
        return response.url
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}