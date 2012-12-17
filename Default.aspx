<%@ Page Language="C#" %>

<!DOCTYPE HTML5>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Mobile Insurance Demo</title>
    <WebSharper:ScriptManager runat="server" />
    <meta name="viewport" content="width=device-width, initial-scale=1"> 

</head>
<body>
    <div>
        <div>
            <div data-role="page" id="dummy2"></div>
            <ws:MobileInsuranceViewer runat="server" />
        </div>
    </div>
</body>
</html>
