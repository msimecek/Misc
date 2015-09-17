# Web pekárny Fourth Coffee
Vítejte u Fourth Coffee, fiktivní pekárny, která kromě pečení provozuje také útulnou kavárnu.

Tento web poslouží jako startovací bod pro postupy předvedené v rámci **Pekárna Bakery**. Možná šablonu poznáváte - vychází z ukázkového webu, který je dostupný např. v nástroji [WebMatrix](http://www.microsoft.com/web/webmatrix/) nebo v galerii webových stránek [Microsoft Azure](https://azure.microsoft.com).

Úpravy:
* V souboru `Order.cshtml` se k potvrzovacímu e-mailu přidává navíc řádek s generovaným ID objednávky. Pro jednoduchost používám pokaždé nový GUID.

	```csharp
	body += "<br />";
	body += "<span style=\"font-size: 9pt; color: #999999\">#BAKID:" + Guid.NewGuid() + "</span>";
	```

* Dál je ve stejném souboru změněna konfigurace na odesílání e-mailu přes Office 365.

	```csharp
	//SMTP Configuration for Office 365
	WebMail.SmtpServer = "smtp.office365.com";
	WebMail.SmtpPort = 587;
	WebMail.EnableSsl = true;
	
	//Enter your Office 365 credentials for UserName/Password and a "From" address for the e-mail
	WebMail.UserName = "<user>@<tenant>.onmicrosoft.com";
	WebMail.Password = "<password>";
	WebMail.From = "<user>@<tenant>.onmicrosoft.com";
	```
	
Kromě těchto dvou úprav je startovací projekt beze změny oproti originálu.