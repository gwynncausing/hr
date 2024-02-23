export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  console.log("🚀 ~ defineEventHandler ~ email, password:", email, password)
  if(email === 'test@test.com' && password === 'test') {
    return true
  }
  event.node.res.statusCode = 401;
  return { message: "Incorrect email/password" };
})
