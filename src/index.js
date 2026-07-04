export default {
  async fetch(request, env) {
    // Future API example:
    // if (new URL(request.url).pathname === "/api/health") {
    //   return Response.json({ status: "ok" });
    // }

    return env.ASSETS.fetch(request);
  },
};
