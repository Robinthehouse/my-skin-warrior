# DNS-Zone myskinwarrior.de — Stand vor dem Umzug

**Aufgenommen am 11. August 2026**, bevor irgendetwas an der Zone geändert wurde.
Anbieter: **IONOS** (Nameserver `ns1039.ui-dns.com` und drei weitere).

Diese Datei ist die Rückversicherung. Wenn beim Umschalten auf Vercel etwas
verloren geht, steht hier der Ursprungszustand.

## Was beim Umzug geändert wird — und nur das

| Typ | Name | Wert **vorher** | Wert **nachher** |
|---|---|---|---|
| A | `@` | `75.2.60.5` (Netlify) | Vercel-Wert aus dem Vercel-Dashboard |
| CNAME | `www` | `myskinwarrior.netlify.app.` | `cname.vercel-dns.com.` |
| CNAME | `app` | `66ea861f5222673f.vercel-dns-017.com.` | entfällt bzw. Vercel-Redirect |

**Sonst nichts.** Alles unten Stehende bleibt exakt wie es ist.

## ⚠️ Diese Einträge NIEMALS anfassen

Wenn einer davon beim Bearbeiten verschwindet, brechen E-Mail-Zustellung oder
Newsletter-Versand — und das merkt man tagelang nicht.

### E-Mail-Empfang (IONOS Mail)
```
MX   @   10 mx00.ionos.de.
MX   @   10 mx01.ionos.de.
```

### E-Mail-Absenderprüfung
```
TXT  @                    "v=spf1 include:_spf-eu.ionos.com ~all"
TXT  _dmarc               "v=DMARC1; p=none;"   (via CNAME dmarc.ionos.de.)
```

### Brevo — Newsletter und Benachrichtigungen
```
TXT    @                  "brevo-code:308b4612cea7a83dc47b1f0af7eec4f2"
CNAME  brevo1._domainkey  b1.myskinwarrior-de.dkim.brevo.com.
CNAME  brevo2._domainkey  b2.myskinwarrior-de.dkim.brevo.com.
```

### IONOS-Mail-Komfort
```
CNAME  autodiscover       adsredir.ionos.info.
```

## Nameserver

```
ns1039.ui-dns.com.
ns1061.ui-dns.biz.
ns1103.ui-dns.org.
ns1067.ui-dns.de.
```

## Vorgehen am Umschalttag

1. **Zwei Tage vorher:** TTL des A-Records auf 300 Sekunden senken, Wert
   unverändert lassen. Danach dauert ein Rückweg Minuten statt Stunden.
2. **Am Tag selbst:** nur die drei Zeilen aus der oberen Tabelle ändern.
3. **Direkt danach prüfen:** `dig myskinwarrior.de MX` und
   `dig brevo1._domainkey.myskinwarrior.de CNAME` müssen unverändert
   antworten. Zusätzlich einen MXToolbox-Check laufen lassen.

## Rückweg

A-Record zurück auf `75.2.60.5`, `www` zurück auf `myskinwarrior.netlify.app.`
Die Netlify-Site bleibt vier Wochen unverändert stehen, damit das
funktioniert — sie darf in dieser Zeit weder gelöscht noch von der Domain
getrennt werden.
