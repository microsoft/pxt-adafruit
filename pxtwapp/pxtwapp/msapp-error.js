(function () {
    var validParameterNames = ["httpStatus", "failureName", "failureUrl"];
    //var startUrl = "https://makecode.adafruit.com/app/0d3abd96cb0441f42443cfef5e961dd06220f2ec-a7804babf6";
    var startUrl = "https://makecode.adafruit.com";

    function parseQueryParameters() {
        var query = location.search.slice(1);
        return query.split("&").reduce(function (queryParameters, rawPair) {
            var pair = rawPair.split("=").map(decodeURIComponent);
            queryParameters[pair[0]] = pair[1];
            return queryParameters;
        }, {});
    }

    function initialize() {
        document.getElementById("retryButton").addEventListener("click", (e) => {
            window.location.href = startUrl;
        });
        var queryParameters = parseQueryParameters();
        validParameterNames.forEach(function (parameterName) {
            var parameterValue = queryParameters[parameterName] || "N/A";
            document.getElementById(parameterName + "Value").textContent = parameterValue;
        });
    }

    function updateOnlineStatus(e) {
        history.back();
        if (history.length == 1) {
            window.location.href = startUrl;
        }
    }

    window.addEventListener("online", updateOnlineStatus);
    document.addEventListener("DOMContentLoaded", initialize);
}());
