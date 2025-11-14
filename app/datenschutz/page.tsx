export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              RG Rüsselsheimer Garage UG <span className="text-primary">Datenschutzbestimmungen</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Informationen zum Datenschutz gemäß DSGVO
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Einführung</h2>
            <p className="text-muted-foreground leading-relaxed">
              In diesen Datenschutzbestimmungen stellt RG Rüsselsheimer Garage UG („wir", „unser" oder „das Unternehmen") seine Vorgehensweise bezüglich der von Benutzern erfassten Daten, die auf unsere Webseite unter www.rg-garage.de („Webseite") zugreifen oder uns auf andere Weise personenbezogene Daten bereitstellen (gemeinsam: „Benutzer"), dar.
            </p>
          </div>

          {/* Data Collection Basis */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Grundlage für die Datenerfassung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die Verarbeitung Ihrer personenbezogenen Daten (d. h. jegliche Daten, die mit vertretbaren Mitteln eine Identifizierung Ihrer Person zulassen; „personenbezogene Daten") ist erforderlich, um unseren vertraglichen Verpflichtungen Ihnen gegenüber nachzukommen und damit wir Ihnen unsere Services bereitstellen, unser legitimes Interesse schützen sowie rechtlichen und finanziellen Regulierungsverpflichtungen, denen wir unterworfen sind, nachkommen können.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Durch die Nutzung dieser Webseite stimmen Sie der Erfassung, Speicherung, Verwendung, Offenlegung und sonstigen Nutzung Ihrer personenbezogenen Daten wie in diesen Datenschutzbestimmungen beschrieben zu.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Bitte lesen Sie sich die Datenschutzbestimmungen sorgfältig durch, bevor Sie Entscheidungen treffen.
            </p>
          </div>

          {/* What Data is Collected */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Welche Daten werden erfasst?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wir erfassen zwei Arten von Daten und Informationen von Benutzern.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Nicht personenbezogene Daten</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zur ersten Kategorie gehören nicht identifizierende und nicht identifizierbare Benutzerdaten, die durch die Nutzung der Webseite bereitgestellt oder erfasst werden („Nicht personenbezogene Daten"). Wir kennen die Identität des Benutzers nicht, von dem nicht personenbezogene Daten erfasst wurden. Zu den nicht personenbezogenen Daten, die erfasst werden können, gehören aggregierte Nutzungsdaten und technische Daten, die von Ihrem Gerät übermittelt werden, einschließlich bestimmter Informationen bezüglich Software und Hardware (z. B. auf dem Gerät verwendeter Browser und verwendetes Betriebssystem, Spracheinstellung, Zugriffszeit usw.). Anhand dieser Daten verbessern wir die Funktionalität unserer Webseite. Wir können auch Daten über Ihre Aktivität auf der Webseite erfassen (z. B. aufgerufene Seiten, Surfverhalten, Klicks, Aktionen usw.).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Personenbezogene Daten</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Zur zweiten Kategorie gehören personenbezogene Daten, also Daten, die eine Einzelperson identifizieren oder durch angemessene Maßnahmen identifizieren können. Zu solchen Daten gehören:
                </p>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Gerätedaten:</strong> Wir erfassen personenbezogene Daten von Ihrem Gerät. Solche Daten umfassen Geolocation-Daten, IP-Adresse, eindeutige Kennungen (z. B. MAC-Adresse und UUID) sowie andere Daten, die sich aus Ihrer Aktivität auf der Webseite ergeben.
                  </p>
                  <p>
                    <strong className="text-foreground">Registrierungsdaten:</strong> Wenn Sie sich auf unserer Webseite registrieren, werden Sie um die Angabe bestimmter Informationen gebeten, z. B.: Vor- und Nachname, E-Mail-Adresse oder Anschrift bzw. andere Information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Obtain Data */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Wie erhalten wir Daten über Sie?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir beziehen Ihre personenbezogenen Daten aus verschiedenen Quellen:
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Sie stellen uns solche Daten freiwillig bereit, zum Beispiel bei der Registrierung auf unserer Webseite.</li>
              <li>Wir erhalten solche Daten, wenn Sie unsere Webseite nutzen oder in Verbindung mit einem unserer Services darauf zugreifen.</li>
              <li>Wir erhalten solche Daten von anderen Anbietern, Services und aus öffentlichen Registern (zum Beispiel von Datentraffic-Analyseanbietern).</li>
            </ul>
          </div>

          {/* Data Usage */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Wofür werden die Daten verwendet?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir geben Benutzerdaten nicht an Dritte weiter, außer wie in diesen Datenschutzbestimmungen beschrieben.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir verwenden Daten für folgende Zwecke:
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Zur Kommunikation mit Ihnen (Senden von Hinweisen bezüglich unserer Services, Bereitstellen von technischen Informationen und ggf. Bearbeiten von Kundendienstanfragen)</li>
              <li>Zur Information über neue Updates und Services</li>
              <li>Zur Anzeigenschaltung im Rahmen der Nutzung unserer Webseite (weitere Informationen unter „Werbung")</li>
              <li>Zur Vermarktung unserer Webseiten und Produkte (weitere Informationen unter „Marketing")</li>
              <li>Zu statistischen und Analysezwecken, die der Verbesserung der Webseite dienen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Neben den verschiedenen, oben aufgeführten Verwendungszwecken können wir personenbezogene Daten auch an unsere Tochtergesellschaften, verbundenen Unternehmen und Subunternehmer weitergeben.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Zusätzlich zu den in diesen Datenschutzbestimmungen aufgeführten Zwecken können wir personenbezogene Daten aus folgenden Gründen an unsere vertrauenswürdigen externen Anbieter weiterleiten, die ihren Sitz in unterschiedlichen Rechtsprechungen auf der ganzen Welt haben:
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside mt-4">
              <li>Hosten und Betreiben unserer Webseite</li>
              <li>Bereitstellen unserer Services, einschließlich der personalisierten Anzeige unserer Webseite</li>
              <li>Speichern und Verarbeiten solcher Daten in unserem Namen</li>
              <li>Schalten von Anzeigen sowie die Möglichkeit, den Erfolg unserer Werbekampagnen zu beurteilen, Retargeting von Benutzern</li>
              <li>Bereitstellen von Marketingangeboten und Werbematerialien in Zusammenhang mit unserer Webseite und unseren Services</li>
              <li>Durchführen von Studien, technischen Diagnosen oder Analysen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Wir können Daten auch offenlegen, wenn wir im guten Glauben sind, dies ist hilfreich oder angemessen, um: (i) geltenden Gesetzen, Vorschriften, Gerichtsverfahren oder behördlichen Anfragen zu entsprechen; (ii) unsere Richtlinien (einschließlich unserer Vereinbarung) durchzusetzen und ggf. diesbezügliche mögliche Verletzungen zu untersuchen; (iii) illegale Aktivitäten oder anderes Fehlverhalten, Betrugsverdacht oder Sicherheitsprobleme zu untersuchen, zu erkennen, zu verhindern oder Maßnahmen dagegen zu ergreifen; (iv) eigene Rechtsansprüche geltend zu machen oder durchzusetzen bzw. uns gegen die Ansprüche anderer zu verteidigen; (v) die Rechte, das Eigentum oder unsere Sicherheit, die Sicherheit unserer Benutzer, Ihre Sicherheit oder die Sicherheit von Dritten zu schützen; oder um (vi) mit Strafverfolgungsbehörden zusammenzuarbeiten und/oder geistiges Eigentum oder andere Rechtsansprüche zu schützen.
            </p>
          </div>

          {/* User Rights */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Benutzerrechte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sie haben folgende Rechte:
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
              <li>Eine Bestätigung, ob und inwieweit Ihre personenbezogenen Daten verwendet und verarbeitet werden, sowie den Zugriff auf die über Sie gespeicherten personenbezogenen Daten und zusätzliche Informationen anfordern</li>
              <li>Eine Kopie der personenbezogenen Daten, die Sie uns freiwillig bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format anfordern</li>
              <li>Eine Berichtigung der personenbezogenen Daten, die wir von Ihnen gespeichert haben, anfordern</li>
              <li>Das Löschen Ihrer personenbezogenen Daten beantragen</li>
              <li>Der Verarbeitung Ihrer personenbezogenen Daten durch uns widersprechen</li>
              <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten durch uns beantragen</li>
              <li>Eine Beschwerde bei einer Aufsichtsbehörde einreichen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Beachten Sie jedoch, dass diese Rechte nicht uneingeschränkt gelten, sondern unseren eigenen rechtmäßigen Interessen sowie behördlichen Vorschriften unterliegen.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wenn Sie eines der hier aufgeführten Rechte in Anspruch nehmen möchten oder weitere Informationen wünschen, wenden Sie sich an unseren Datenschutzbeauftragten unter: <a href="mailto:info@rg-garage.de" className="text-secondary hover:underline">info@rg-garage.de</a>
            </p>
          </div>

          {/* Storage */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Speicherung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir speichern Ihre personenbezogenen Daten so lange, wie es für die Bereitstellung unserer Services, die Einhaltung rechtlicher Verpflichtungen sowie die Beilegung von Streitigkeiten und die Durchsetzung unserer Richtlinien erforderlich ist. Die Aufbewahrungsfristen richten sich nach der Art der erfassten Daten und dem Zweck, für den diese Daten erfasst wurden, wobei sowohl die fallspezifischen Gegebenheiten als auch die Notwendigkeit berücksichtigt werden, veraltete, nicht genutzte Informationen baldmöglichst zu löschen. Datensätze mit personenbezogenen Daten von Kunden, Dokumente über die Kontoeinrichtung, Mitteilungen und andere Daten speichern wir gemäß geltender Gesetze und Vorschriften.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wir können jederzeit und in unserem alleinigen Ermessen unvollständige oder unrichtige Daten korrigieren, vervollständigen oder entfernen.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wir und unsere vertrauenswürdigen Partner verwenden Cookies und andere Technologien in unseren zugehörigen Services, einschließlich bei Ihrem Besuch unserer Webseite oder bei Ihrem Zugriff auf unsere Services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ein „Cookie" ist eine kleine Dateieinheit, die eine Webseite Ihrem Gerät zuweist, während Sie diese aufrufen. Cookies sind sehr nützlich und können für verschiedene Zwecke verwendet werden. Dazu gehören die problemlose Seitennavigation, eine mögliche automatische Aktivierung von bestimmten Funktionen, die Speicherung Ihrer Einstellungen sowie eine schnelle und einfache Interaktion zwischen Ihnen und unseren Services. Cookies werden auch verwendet, um Ihnen relevante, für Sie interessante Werbeanzeigen einzublenden und Statistiken über Ihre Nutzung unserer Services zusammenzustellen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Auf der Webseite werden folgende Arten von Cookies eingesetzt:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Session-Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Werden nur vorübergehend während einer Browsersitzung verwendet, um eine normale Systemnutzung zu ermöglichen. Diese Cookies werden von Ihrem Gerät gelöscht, sobald der Browser geschlossen wird.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Persistente Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Werden nur von der Webseite gelesen, auf Ihrem Computer für einen festgelegten Zeitraum gespeichert und nicht gelöscht, wenn der Browser geschlossen wird. Solche Cookies werden verwendet, damit wir Sie bei einem wiederholten Besuch erkennen. Dadurch können wir beispielsweise Ihre Einstellungen für die nächste Anmeldung speichern.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cookies von Dritten</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Werden von anderen Onlineservices platziert, die Inhalte auf der angezeigten Seite ausführen, zum Beispiel von externen Analyseunternehmen, die den Zugriff auf unsere Webseite überwachen und analysieren.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-6">
              Cookies enthalten keine Daten, anhand derer Sie identifiziert werden können. Personenbezogene Daten, die wir von Ihnen speichern, werden möglicherweise von uns mit den in Cookies gespeicherten und von Cookies abgerufenen Daten verknüpft. Informationen zum Entfernen dieser Cookies stehen in den Anweisungen der Geräteeinstellungen. Beachten Sie, dass durch das Deaktivieren von Cookies einige Funktionen unserer Webseite möglicherweise nicht mehr ordnungsgemäß funktionieren und Ihre Online-Erfahrung dadurch möglicherweise eingeschränkt wird.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-6">
              Wir verwenden auch das Tool „Google Analytics", um Daten über Ihre Nutzung der Webseite zu erfassen. Google Analytics erfasst beispielsweise, wie häufig die Webseite aufgerufen wird, welche Seiten bei einem Besuch aufgerufen werden usw. Wir verwenden die Google Analytics-Daten nur zur Verbesserung unserer Webseite und Services. Google Analytics erfasst die Ihnen am Tag Ihres Besuchs der Webseite zugewiesene IP-Adresse und nicht Ihren Namen oder andere identifizierbare Daten. Wir führen die erfassten Google Analytics-Daten nicht mit personenbezogenen Daten zusammen. Die Möglichkeiten von Google, die von Google Analytics erfassten Daten über Ihre Besuche auf dieser Webseite zu verwenden und freizugeben, unterliegen den Nutzungsbedingungen von Google Analytics und der Datenschutzerklärung von Google.
            </p>
          </div>

          {/* Third Party Data Collection */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Erfassung von Daten durch Dritte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In dieser Richtlinie werden nur die Nutzung und Offenlegung von Daten, die wir von Ihnen erfassen, behandelt. Wenn Sie Daten auf anderen Webseiten veröffentlichen oder Dritten im Internet offenlegen, gelten möglicherweise andere Bestimmungen. Lesen Sie sich daher die allgemeinen Geschäftsbedingungen und Datenschutzbestimmungen immer sorgfältig durch, wenn Sie Daten offenlegen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Diese Datenschutzbestimmungen beziehen sich nicht auf Geschäftspraktiken von Unternehmen, die sich nicht in unserem Besitz befinden bzw. nicht unter unserer Kontrolle stehen, oder auf andere Personen als unsere Angestellten und Mitarbeiter, einschließlich Dritter, denen wir diese Daten wie in diesen Datenschutzbestimmungen beschrieben offenlegen.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Wie schützen wir Ihre Daten?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir setzen die Sicherheitsmaßnahmen auf der Webseite mit großer Sorgfalt um und schützen Ihre Daten. Wir verwenden in der Branche übliche Verfahren und Richtlinien, um den Schutz der erfassten und gespeicherten Daten sicherzustellen, und verhindern die unbefugte Verwendung solcher Daten. Wir verlangen außerdem von Dritten, dass sie sich gemäß diesen Datenschutzbestimmungen an ähnliche Sicherheitsanforderungen halten. Obwohl wir angemessene Schritte für den Schutz von Daten unternehmen, können wir nicht verantwortlich gemacht werden für Handlungen von jenen, die sich unbefugten Zugang zu unserer Webseite verschafft haben oder diese missbräuchlich verwenden, und wir geben keine ausdrückliche noch stillschweigende Gewähr, dass wir einen solchen Zugriff verhindern können.
            </p>
          </div>

          {/* Data Transfer Outside EEA */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Übermittlung von Daten außerhalb des Europäischen Wirtschaftsraums</h2>
            <p className="text-muted-foreground leading-relaxed">
              Beachten Sie, dass einige Empfänger ihren Sitz möglicherweise nicht im Europäischen Wirtschaftsraum haben. Ist dies der Fall, werden wir Ihre Daten nur in von der Europäischen Kommission genehmigte Länder mit angemessenem Datenschutzniveau übermitteln oder durch eine rechtliche Vereinbarung ein angemessenes Datenschutzniveau sicherstellen.
            </p>
          </div>

          {/* Advertising */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Werbung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wenn Sie auf unsere Webseite zugreifen, schalten wir möglicherweise Anzeigen mithilfe von Anzeigentechnologie externer Anbieter. Diese Technologie verwendet für die Anzeigenschaltung Ihre Nutzungsdaten der Services (z. B. durch die Platzierung von Drittanbieter-Cookies in Ihrem Webbrowser).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sie können sich von zahlreichen Anzeigennetzwerken Dritter abmelden, auch von Netzwerken, die von Mitgliedern der Network Advertising Initiative („NAI") und der Digital Advertising Alliance („DAA") betrieben werden. Informationen über die Vorgehensweise von NAI- und DAA-Mitgliedern, über Ihre Optionen, die Sie bezüglich der Verwendung solcher Daten von diesen Unternehmen haben, und darüber, wie Sie sich aus Anzeigennetzwerken Dritter, die von NAI- und DAA-Mitgliedern betrieben werden, abmelden können, finden Sie auf der jeweiligen Webseite: <a href="http://optout.networkadvertising.org/#!/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">http://optout.networkadvertising.org/#!/</a> und <a href="http://optout.aboutads.info/#!/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">http://optout.aboutads.info/#!/</a>.
            </p>
          </div>

          {/* Marketing */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Marketing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir können Ihre personenbezogenen Daten wie Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer usw. selbst verwenden oder an einen externen Untervertragsnehmer weiterleiten, um Ihnen Werbematerialien bezüglich unserer Services bereitzustellen, die Sie möglicherweise interessieren.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir respektieren Ihr Recht auf Privatsphäre. Daher erhalten Sie in diesen Marketingmaterialien stets die Möglichkeit, sich von weiteren Zusendungen abzumelden. Wenn Sie sich abmelden, wird Ihre E-Mail-Adresse oder Telefonnummer aus unseren Marketing-Verteilerlisten entfernt.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beachten Sie, dass wir Ihnen auch nach einer Abmeldung vom Erhalt unserer Marketing-E-Mails weiterhin E-Mails mit wichtigen Informationen senden, die keine Abmeldeoption enthalten. Dazu gehören Wartungsmeldungen oder administrative Benachrichtigungen.
            </p>
          </div>

          {/* Corporate Transactions */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Unternehmenstransaktion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir können Daten im Fall einer Unternehmenstransaktion (z. B. beim Verkauf wesentlicher Unternehmensteile, bei einer Fusion, einer Konsolidierung oder einem Anlagenverkauf) weitergeben. Falls ein oben genannter Fall eintritt, übernimmt der Erwerber oder das entsprechende Unternehmen die in dieser Datenschutzerklärung dargelegten Rechte und Pflichten.
            </p>
          </div>

          {/* Minors */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Minderjährige</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Der Schutz der Daten von Kindern ist insbesondere im Online-Bereich sehr wichtig. Die Webseite ist nicht für Kinder konzipiert und richtet sich nicht an diese. Die Nutzung unserer Services durch Minderjährige ist nur mit der vorherigen Einwilligung oder Autorisierung von einem Elternteil oder Erziehungsberechtigten zulässig. Wir erfassen personenbezogene Daten von Minderjährigen nicht wissentlich.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wenn ein Elternteil oder Erziehungsberechtigter Kenntnis davon erlangt, dass sein oder ihr Kind uns personenbezogene Daten ohne deren Einwilligung bereitgestellt hat, kann er/sie sich unter <a href="mailto:info@rg-garage.de" className="text-secondary hover:underline">info@rg-garage.de</a> an uns wenden.
            </p>
          </div>

          {/* Updates */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Aktualisierungen oder Änderungen dieser Datenschutzbestimmungen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir behalten uns das Recht vor, diese Datenschutzbestimmungen von Zeit zu Zeit zu ändern oder zu prüfen. Sie finden das Datum der aktuellen Version unter „Zuletzt geändert am". Ihre fortgesetzte Nutzung der Plattform nach der Bekanntmachung solcher Änderungen auf unserer Webseite stellt Ihre Zustimmung zu solchen Änderungen an den Datenschutzbestimmungen dar und gilt als Ihr Einverständnis der Bindung an die geänderten Bestimmungen.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">So erreichen Sie uns</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wenden Sie sich bei allgemeinen Fragen zur Webseite, zu den von uns über Sie erfassten Daten oder der Verwendung dieser Daten an uns:
            </p>
            <div className="text-muted-foreground leading-relaxed space-y-1">
              <p className="font-semibold text-foreground text-lg">RG Rüsselsheimer Garage UG (haftungsbeschränkt)</p>
              <p>Alexander-Fleming-Ring 19A</p>
              <p>65428 Rüsselsheim</p>
              <p className="pt-2">Telefon: 06142 33 06 222</p>
              <p>E-Mail: <a href="mailto:info@rg-garage.de" className="text-secondary hover:underline">info@rg-garage.de</a></p>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Zuletzt geändert bei der Erstellung.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
