# Windows 10 aplikace pro Pekárnu Bakery

Klíčový skript v souboru **OrderSuccess.cshtml**.

```html
<script type="text/javascript">
    if (typeof Windows !== 'undefined' && typeof Windows.UI !== 'undefined' && typeof Windows.UI.Notifications !== 'undefined') {
        var notifications = Windows.UI.Notifications;  // https://msdn.microsoft.com/EN-US/library/windows/apps/windows.ui.notifications.aspx
        var template = notifications.ToastTemplateType.toastImageAndText01; // https://msdn.microsoft.com/EN-US/library/windows/apps/hh761494.aspx

        /* ToastImageAndText01:
        <toast>
            <visual>
                <binding template="ToastImageAndText01">
                    <image id="1" src="image1" alt="image1"/>
                    <text id="1">bodyText</text>
                </binding>  
            </visual>
        </toast>
        */

        var toastXml = notifications.ToastNotificationManager.getTemplateContent(template); 

        var toastTextElements = toastXml.getElementsByTagName("text");
        toastTextElements[0].appendChild(toastXml.createTextNode("Order done."));

        var toastImageElements = toastXml.getElementsByTagName("image"); 
        toastImageElements[0].setAttribute("src", "http://<URL>/Images/Products/Thumbnails/lemon_tart.jpg"); 
        toastImageElements[0].setAttribute("alt", "bakery"); 

        var toastNode = toastXml.selectSingleNode("/toast");
        toastNode.setAttribute("duration", "long"); 

        var toastNode = toastXml.selectSingleNode("/toast");
        var audio = toastXml.createElement("audio"); 
        audio.setAttribute("src", "ms-winsoundevent:Notification.IM"); // https://msdn.microsoft.com/EN-US/library/windows/apps/hh761492.aspx

        toastXml.selectSingleNode("/toast").setAttribute("launch", '{"type":"toast","param1":"12345","param2":"67890"}'); // https://msdn.microsoft.com/en-us/library/windows/apps/br230846.aspx

        var toast = new notifications.ToastNotification(toastXml);
        var toastNotifier = notifications.ToastNotificationManager.createToastNotifier(); 
        toastNotifier.show(toast); 
    }
</script>
```