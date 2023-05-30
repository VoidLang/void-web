package org.voidlang.web;


import net.voidhttp.HttpServer;
import net.voidhttp.util.Handlers;
import net.voidhttp.util.console.Logger;

public enum VoidWeb {
    INSTANCE;

    private HttpServer server;

    public void start() {
        server = new HttpServer();

        loadRoutes();

        server.listen(1234, () -> Logger.info("[VoidWeb] Webserver has been started."));
    }

    private void loadRoutes() {
        server.use(Handlers.staticFolder("./frontend/public", "/public", true));

        server.get("/", (req, res) -> {
            res.render("index");
        });

        server.error(404, (req, res) -> {
            res.render("404");
        });
    }
}
