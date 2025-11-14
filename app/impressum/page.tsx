export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              <span className="text-primary">Impressum</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Imprint Information */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Angaben gemäß § 5 TMG</h2>
            <div className="text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground text-lg">RG Rüsselsheimer Garage GmbH</p>
              <p>Alexander-Fleming-Ring 19A</p>
              <p>65428 Rüsselsheim</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Handelsregister */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Handelsregister</h3>
              <div className="text-muted-foreground space-y-2">
                <p><span className="text-foreground font-medium">Nummer:</span> HRB06142-3306222</p>
                <p><span className="text-foreground font-medium">Registergericht:</span> Darmstadt</p>
              </div>
            </div>

            {/* Geschäftsführer */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Geschäftsführer</h3>
              <p className="text-muted-foreground">Erkan Tapiklama</p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Umsatzsteuer-ID</h3>
              <div className="text-muted-foreground space-y-2">
                <p className="text-sm">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                <p className="font-semibold text-foreground text-lg">DE06142-3306222</p>
              </div>
            </div>

            {/* Steuernummer */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-bold text-secondary mb-4">Steuernummer</h3>
              <p className="text-muted-foreground font-medium">06142-3306222</p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <h3 className="text-xl font-bold text-secondary mb-4">Kontakt</h3>
            <div className="text-muted-foreground space-y-2">
              <p><span className="text-foreground font-medium">Telefon:</span> 06142 33 06 222</p>
              <p><span className="text-foreground font-medium">Fax:</span> 06142-3306222</p>
              <p>
                <span className="text-foreground font-medium">E-Mail:</span>{" "}
                <a href="mailto:info@rg-garage.de" className="text-secondary hover:underline">
                  info@rg-garage.de
                </a>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8">Datenschutzerklärung</h2>
            
            <div className="space-y-8">
              {/* Section 1: Datenschutz auf einen Blick */}
              <div className="bg-card rounded-lg border border-border p-6 md:p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">1. Datenschutz auf einen Blick</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Allgemeine Hinweise</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Datenerfassung auf unserer Website</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-foreground font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                      </div>

                      <div>
                        <p className="text-foreground font-medium mb-2">Wie erfassen wir Ihre Daten?</p>
                        <p className="text-muted-foreground leading-relaxed mb-2">
                          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
                        </p>
                      </div>

                      <div>
                        <p className="text-foreground font-medium mb-2">Wofür nutzen wir Ihre Daten?</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>
                      </div>

                      <div>
                        <p className="text-foreground font-medium mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-2">
                          Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Analyse-Tools und Tools von Drittanbietern</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Allgemeine Hinweise und Pflichtinformationen */}
              <div className="bg-card rounded-lg border border-border p-6 md:p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">2. Allgemeine Hinweise und Pflichtinformationen</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Datenschutz</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Hinweis zur verantwortlichen Stelle</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="text-muted-foreground leading-relaxed space-y-1 mb-3">
                      <p className="font-medium text-foreground">RG Rüsselsheimer Garage UG (haftungsbeschränkt)</p>
                      <p>Alexander-Fleming-Ring 19A</p>
                      <p>65428 Rüsselsheim</p>
                      <p className="pt-2">Telefon: 06142 33 06 222</p>
                      <p>E-Mail: <a href="mailto:info@rg-garage.de" className="text-secondary hover:underline">info@rg-garage.de</a></p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Recht auf Datenübertragbarkeit</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">SSL- bzw. TLS-Verschlüsselung</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Auskunft, Sperrung, Löschung und Berichtigung</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Recht auf Einschränkung der Verarbeitung</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                    </p>
                    <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                      <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                      <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                      <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                      <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Datenerfassung auf unserer Website */}
              <div className="bg-card rounded-lg border border-border p-6 md:p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">3. Datenerfassung auf unserer Website</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Cookies</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Kontaktformular</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschluss fragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Anfrage per E-Mail, Telefon oder Telefax</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und / oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: Soziale Medien */}
              <div className="bg-card rounded-lg border border-border p-6 md:p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">4. Soziale Medien</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Social-Media-Plugins mit Shariff</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Auf unseren Seiten werden Plugins von sozialen Medien verwendet (z.B. Facebook, Twitter, Google+, Instagram, Pinterest, XING, LinkedIn, Tumblr).
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Die Plugins können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf unserer Website zu gewährleisten, verwenden wir diese Plugins nur zusammen mit der sogenannten „Shariff"-Lösung. Diese Anwendung verhindert, dass die auf unserer Website integrierten Plugins Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter übertragen.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Erst wenn Sie das jeweilige Plugin durch Anklicken der zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Plugin aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z.B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Facebook Plugins (Like & Share-Button)</h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California 94025, USA, integriert. Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem "Like-Button" ("Gefällt mir") auf unserer Seite. Eine Übersicht über die Facebook Plugins finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook "Like-Button" anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://de-de.facebook.com/privacy/explanation</a>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien.
                    </p>
                  </div>
                </div>
              </div>

              {/* Source */}
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">e-recht24.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
