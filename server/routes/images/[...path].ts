export default eventHandler(async (event) => {
  const { path } = await getRouterParams(event)

  return event.context.cloudflare.env.R2.get(path)
})
