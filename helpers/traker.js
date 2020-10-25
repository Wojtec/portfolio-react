function Tracking() {
    (function (v, i, s, a) {
        if (!v._visaSettings) {
            v._visaSettings = {};
        }
        v._visaSettings["e0746b85-155a-11eb-b589-901b0edac50a"] = {
            v: "0.3",
            s: "e0746b85-155a-11eb-b589-901b0edac50a",
            a: "1"
        };
        _v = i.getElementsByTagName("head")[0];
        _a = _v;
        _i = i.createElement("script");
        _s = _i;
        _s.defer = "defer";
        _s.src = s + a + v
            ._visaSettings["e0746b85-155a-11eb-b589-901b0edac50a"]
            .v;
        _a.appendChild(_s);
    })(
        window,
        document,
        "//app-worker.visitor-analytics.io/main",
        ".js?s=e0746b85-155a-11eb-b589-901b0edac50a&v="
    )
}

export default Tracking;