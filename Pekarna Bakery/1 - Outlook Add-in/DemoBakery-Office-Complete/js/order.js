(function () {
    "use strict";

    // The Office initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            displayOrderDetails();
        });
    };

    function displayOrderDetails() {
        var rawId = Office.context.mailbox.item.getRegExMatches().BAKID;
        var id = rawId[0].split(':');
        $('#orderDetails').html("<b>Order:</b> " + id[1] + "<br /> <b>Status:</b> Processing at coffee shop.");
    }
})();