# Prerender demo

This project demonstrates the basics of a dynamic website using prerender.

The dynamic website uses jQuery to call [Giphy API](https://api.giphy.com/).
It is served by nginx, and configured with prerender middleware pointing to
a prerender service, which is also included as part of this project.

## Running

The project is setup with Docker and Docker Compose. If you have Docker setup,
you can run it with

```
docker-compose up
```

## Testing

Assuming you have Docker for Windows or Docker for Mac, you can reach the
website here: <http://localhost:8000/>

You can call the prerender service directly here:
<http://localhost:3000/http://web>

Lastly, you can simulate Google Bot with this:
<http://localhost:8000/?_escaped_fragment_=>
