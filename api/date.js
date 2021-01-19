module.exports = async function (context, req) {
  const date = Date.now().prototype.toDateString();
  
  context.res = {
      // status: 200, /* Defaults to 200 */
      body: date
  };
}