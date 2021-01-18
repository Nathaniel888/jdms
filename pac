function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*amemv.com/webcast/certification/*")) {
        return "PROXY 81.68.79.199:10086";
    }
    return "DIRECT";
}
