export default defineEventHandler(async (ev) => {
  const formData = await readFormData(ev)
  const file = formData.get('file') as File
  /*
  {
    "storageClass": "",
    "customMetadata": {},
    "httpMetadata": {},
    "uploaded": "2025-03-20T10:09:07.113Z",
    "checksums": {
        "md5": "96850b9fdf38491f9650ddd2fa7d7c33"
    },
    "httpEtag": "\"96850b9fdf38491f9650ddd2fa7d7c33\"",
    "etag": "96850b9fdf38491f9650ddd2fa7d7c33",
    "size": 19088,
    "version": "8a54e053a778dc83c2559b27722673ba",
    "key": "test/test.js"
}
  */
  return ev.context.cloudflare.env.R2.put(`test/${file.name}`, file)
})
