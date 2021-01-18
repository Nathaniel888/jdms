function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*amemv.com/webcast/certification/*")) {
        return "PROXY 10.0.0.219:8888";
    }
    return "DIRECT";
}
