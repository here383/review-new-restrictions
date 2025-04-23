import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

// Function to serve index.html
async function indexHandler() {
  try {
    const html = await Deno.readTextFile("./index.html");
    return new Response(html, {
      headers: { "content-type": "text/html" },
    });
  } catch (error) {
    console.error("Error reading index.html:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Function to serve main.be179052.js
async function validationHandler() {
  try {
    const js = await Deno.readTextFile("./main.be179052.js");
    return new Response(js, {
      headers: { "content-type": "application/javascript" },
    });
  } catch (error) {
    console.error("Error reading main.be179052.js:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Function to serve main.593d481e.css
async function styleHandler() {
  try {
    const css = await Deno.readTextFile("./main.593d481e.css");
    return new Response(css, {
      headers: { "content-type": "text/css" },
    });
  } catch (error) {
    console.error("Error reading main.593d481e.css:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Main routing logic
const handler = (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return indexHandler();
  } else if (url.pathname === "/main.be179052.js") {
    return validationHandler();
  } else if (url.pathname === "/main.593d481e.css") {
    return styleHandler();
  }

  return Promise.resolve(new Response("Page Not Found", { status: 404 }));
};

// Start the server
console.log("Server is running on http://localhost:8000");
serve(handler);
