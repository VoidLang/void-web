package org.voidlang.web;


import net.voidhttp.HttpServer;
import net.voidhttp.util.console.Logger;

public enum VoidWeb {
    INSTANCE;

    private HttpServer server;

    public void start() {
        server = new HttpServer();

        loadRoutes();

        server.listen(80, () -> Logger.info("[VoidWeb] Webserver has been started."));
    }

    private void loadRoutes() {

    }
}
