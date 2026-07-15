const FLOW_TEXTS=[
  {
    id:"start-1",title:"Zum ersten Mal",
    text:"Jetzt bin ich in Wien. Wien ist eine große Stadt. Ich gehe kurz durch die Stadt. Das ist mein erstes Mal hier, und ich finde das gut.",
    gist:"You are in Vienna for the first time and briefly walk through the city.",
    question:{prompt:"Is this your first time in Vienna?",choices:["Yes","No","The text does not say"],answer:0},
    grammar:{title:"Position one can be almost anything",note:"Jetzt fills the first position, so the verb bin comes next and ich follows it.",example:"Jetzt bin ich in Wien."},
    glosses:{finde:"find / consider"}
  },
  {
    id:"start-2",title:"Mein Hotel",
    text:"Ich will in ein Hotel gehen. Das Hotel ist hier. Ich gehe zum Hotel. Am Ende bin ich sicher: Das ist das richtige Hotel.",
    gist:"You find the correct hotel and feel sure you are in the right place.",
    question:{prompt:"Did you find the correct hotel?",choices:["Yes","No","You found a café"],answer:0},
    grammar:{title:"Zum compresses zu dem",note:"German combines common preposition-and-article pairs. Zum Hotel means zu dem Hotel.",example:"Ich gehe zum Hotel."},
    glosses:{hotel:"hotel"}
  },
  {
    id:"start-3",title:"Die Straße",
    text:"Ich bin in der Stadt. Vor mir ist eine Straße. Die Straße ist nicht sehr groß. Ich gehe weiter und bin bald am Ende.",
    gist:"You walk along a small street until you reach its end.",
    question:{prompt:"Is the street very large?",choices:["No","Yes","The text does not say"],answer:0},
    grammar:{title:"German nouns start with capitals",note:"Straße is a noun, so its capital letter helps you find it quickly in the sentence.",example:"Vor mir ist eine Straße."},
    glosses:{straße:"street",bald:"soon"}
  },
  {
    id:"start-4",title:"Ein Kaffee",
    text:"Hier ist ein Café. Ich gehe hinein und sage: Einen Kaffee, bitte. Der Kaffee ist gut. Ich habe Zeit und bleibe noch kurz hier.",
    gist:"You enter a café, order coffee, and stay for a little while.",
    question:{prompt:"What do you order?",choices:["Coffee","Tea","Bread"],answer:0},
    grammar:{title:"Masculine objects use einen",note:"Kaffee is masculine. As the thing you order, ein changes to einen.",example:"Einen Kaffee, bitte."},
    glosses:{café:"café",hinein:"inside",kaffee:"coffee",bitte:"please",bleibe:"stay"}
  },
  {
    id:"start-5",title:"Das Zimmer",
    text:"Ich bin im Hotel. Mein Zimmer ist hier. Das Zimmer ist klein, aber gut. Ich gehe hinein. Jetzt bin ich im Zimmer.",
    gist:"You enter your small but pleasant hotel room.",
    question:{prompt:"How is the room?",choices:["Small but good","Large and cold","Not in the hotel"],answer:0},
    grammar:{title:"Im compresses in dem",note:"Im Hotel and im Zimmer describe location. Im is the common short form of in dem.",example:"Jetzt bin ich im Zimmer."},
    glosses:{hotel:"hotel",zimmer:"room",klein:"small",hinein:"inside"}
  },
  {
    id:"start-6",title:"Der Schlüssel",
    text:"Ich will in mein Zimmer, aber ich habe keinen Schlüssel. Der Schlüssel ist an der Rezeption. Ich gehe zurück und habe ihn bald in der Hand.",
    gist:"You return to reception to get the key for your room.",
    question:{prompt:"Where is the key?",choices:["At reception","In the café","On the train"],answer:0},
    grammar:{title:"Kein negates a noun",note:"Use kein where English might use no or not any. The ending changes with the noun’s role.",example:"Ich habe keinen Schlüssel."},
    glosses:{zimmer:"room",schlüssel:"key",rezeption:"reception",zurück:"back",bald:"soon"}
  },
  {
    id:"start-7",title:"Am Bahnhof",
    text:"Jetzt bin ich am Bahnhof. Der Bahnhof ist groß. Viele Menschen sind hier. Ich will weiter, aber ich weiß noch nicht wie.",
    gist:"You are at a busy station and have not yet worked out how to continue.",
    question:{prompt:"Do you already know how to continue?",choices:["No","Yes","You are going home"],answer:0},
    grammar:{title:"Noch nicht means “not yet”",note:"Read noch nicht as a single time expression: something has not happened yet but may happen later.",example:"Ich weiß noch nicht wie."},
    glosses:{bahnhof:"station",menschen:"people"}
  },
  {
    id:"start-8",title:"Der Zug",
    text:"Am Bahnhof ist ein Zug. Der Zug soll nach Salzburg gehen. Ich bin nicht ganz sicher und frage einen Herrn. Ja, das ist der richtige Zug.",
    gist:"A man confirms that this is the correct train to Salzburg.",
    question:{prompt:"Is it the correct train?",choices:["Yes","No","It goes to the hotel"],answer:0},
    grammar:{title:"Soll can report an expectation",note:"Here soll means the train is supposed or expected to go to Salzburg.",example:"Der Zug soll nach Salzburg gehen."},
    glosses:{bahnhof:"station",zug:"train",salzburg:"Salzburg",frage:"ask"}
  },
  {
    id:"start-9",title:"Die Fahrkarte",
    text:"Ich will mit dem Zug gehen. Dafür muss ich eine Fahrkarte haben. Die Fahrkarte ist nicht in meiner Hand. Ich muss sie noch kaufen.",
    gist:"You need to buy a ticket before taking the train.",
    question:{prompt:"What do you still need to buy?",choices:["A ticket","A key","Coffee"],answer:0},
    grammar:{title:"Sie can mean “it”",note:"Fahrkarte is feminine, so sie refers back to it in the next sentence.",example:"Ich muss sie noch kaufen."},
    glosses:{zug:"train",fahrkarte:"ticket",kaufen:"buy"}
  },
  {
    id:"start-10",title:"Es ist kalt",
    text:"Heute ist es in Wien sehr kalt. Ich will in die Stadt gehen, aber nicht ohne meinen Mantel. Der Mantel ist im Zimmer.",
    gist:"It is cold, so you need your coat before going into the city.",
    question:{prompt:"What do you need before leaving?",choices:["Your coat","A ticket","Coffee"],answer:0},
    grammar:{title:"Weather often uses es",note:"German uses es as the grammatical subject in weather expressions.",example:"Heute ist es sehr kalt."},
    glosses:{heute:"today",kalt:"cold",ohne:"without",mantel:"coat",zimmer:"room"}
  },
  {
    id:"start-11",title:"Der Markt",
    text:"In der Stadt ist ein Markt. Ich gehe auf den Markt. Der Markt ist nicht groß, aber hier gibt es viel zu sehen.",
    gist:"You visit a small city market with plenty to see.",
    question:{prompt:"Is the market large?",choices:["No","Yes","The text does not say"],answer:0},
    grammar:{title:"Place and direction use different cases",note:"In der Stadt gives a location. Auf den Markt describes movement toward a place.",example:"Ich gehe auf den Markt."},
    glosses:{markt:"market",sehen:"see"}
  },
  {
    id:"start-12",title:"Brot und Käse",
    text:"Auf dem Markt gibt es Brot und Käse. Ich will nicht viel. Ich kaufe einen Teil und gebe dem Herrn das Geld.",
    gist:"You buy a small amount of bread and cheese at the market.",
    question:{prompt:"What do you buy?",choices:["Bread and cheese","A coat","A train ticket"],answer:0},
    grammar:{title:"Dem marks the receiver",note:"The dative dem Herrn identifies the person who receives the money.",example:"Ich gebe dem Herrn das Geld."},
    glosses:{markt:"market",brot:"bread",käse:"cheese",kaufe:"buy",geld:"money"}
  },
  {
    id:"ankunft-1",title:"Jetzt in Wien",
    text:"Ich bin jetzt in Wien. Die Stadt ist groß, aber ich habe Zeit. Ich gehe kurz durch die Stadt. Hier ist mein Hotel. Am Ende der Straße ist auch ein Café. Das ist gut. Ich will erst ins Hotel gehen und dann einen Kaffee haben.",
    gist:"You have arrived in Vienna and are walking toward your hotel before getting coffee.",
    question:{prompt:"What will happen first?",choices:["Going to the hotel","Getting coffee","Leaving Vienna"],answer:0},
    grammar:{title:"The verb takes position two",note:"In a normal main clause, the conjugated verb is the second idea: Ich bin · Die Stadt ist · Am Ende ist …",example:"Am Ende der Straße ist auch ein Café."},
    glosses:{hotel:"hotel",straße:"street",café:"café",kaffee:"coffee",erst:"first"}
  },
  {
    id:"ankunft-2",title:"Wo ist das Hotel?",
    text:"Ich bin in der Stadt, aber ich kenne den Weg nicht. Ein Herr ist hier. Ich sage: Entschuldigung, wo ist das Hotel? Er sagt: Gehen Sie hier geradeaus und dann nach rechts. Das Hotel ist nicht weit. Ich sage danke und gehe weiter.",
    gist:"You ask a man for directions to the hotel, and he sends you straight ahead and then right.",
    question:{prompt:"Which way should you go?",choices:["Straight, then right","Left, then back","Only straight"],answer:0},
    grammar:{title:"Sie is formal “you”",note:"Directions often use the polite command form: Gehen Sie … The verb comes first, followed by Sie.",example:"Gehen Sie hier geradeaus."},
    glosses:{weg:"way",entschuldigung:"excuse me",geradeaus:"straight ahead",rechts:"right",danke:"thank you"}
  },
  {
    id:"ankunft-3",title:"Nicht weit",
    text:"Das Hotel ist nicht weit. Ich gehe geradeaus durch die Stadt. Nach kurzer Zeit sehe ich die Straße. Rechts ist ein Café, und links ist das Hotel. Vor dem Hotel steht ein Herr. Er sieht mich und sagt: Guten Tag.",
    gist:"The hotel is on the left, across from a café, and someone greets you outside.",
    question:{prompt:"Where is the hotel?",choices:["On the left","On the right","Behind the café"],answer:0},
    grammar:{title:"Location uses ist or steht",note:"German often describes location with sein or stehen. Use the position words as anchors: rechts, links, vor.",example:"Rechts ist ein Café, und links ist das Hotel."},
    glosses:{hotel:"hotel",geradeaus:"straight ahead",sehe:"see",straße:"street",rechts:"right",links:"left",café:"café",steht:"stands",guten:"good",tag:"day / hello"}
  },
  {
    id:"hotel-1",title:"An der Rezeption",
    text:"Im Hotel ist eine Frau an der Rezeption. Ich sage: Guten Abend. Mein Name ist Keegan. Ich habe hier ein Zimmer. Die Frau sagt: Ja, richtig. Hier ist Ihr Schlüssel. Das Zimmer ist im zweiten Teil des Hotels. Ich sage danke.",
    gist:"At reception, you give your name and receive the key to your room.",
    question:{prompt:"What does the receptionist give you?",choices:["A key","A ticket","A coffee"],answer:0},
    grammar:{title:"Nouns announce themselves",note:"German capitalizes every noun. Hotel, Frau, Rezeption, Name, Zimmer and Schlüssel are visual anchors when you scan.",example:"Hier ist Ihr Schlüssel."},
    glosses:{hotel:"hotel",frau:"woman",rezeption:"reception",abend:"evening",name:"name",zimmer:"room",schlüssel:"key",zweiten:"second",hotels:"hotel",danke:"thank you"}
  },
  {
    id:"hotel-2",title:"Der Schlüssel",
    text:"Ich bin vor meinem Zimmer. Aber wo ist der Schlüssel? Er ist nicht in meiner Hand und auch nicht in der Tasche. Ich gehe zurück zur Rezeption. Die Frau sieht mich. Dann sehe ich den Schlüssel: Er ist in meiner anderen Hand.",
    gist:"You think the room key is missing, but it is in your other hand.",
    question:{prompt:"Where is the key?",choices:["In the other hand","At reception","In the bag"],answer:0},
    grammar:{title:"Case endings clarify the object",note:"Der Schlüssel is the subject. Den Schlüssel is the thing you see. Masculine der changes to den as a direct object.",example:"Dann sehe ich den Schlüssel."},
    glosses:{zimmer:"room",schlüssel:"key",tasche:"bag",zurück:"back",rezeption:"reception",frau:"woman",sehe:"see",anderen:"other"}
  },
  {
    id:"hotel-3",title:"Das Zimmer ist kalt",
    text:"Das Zimmer ist gut, aber es ist sehr kalt. Ich will nicht so schlafen. Ich gehe zur Rezeption und sage: Das Zimmer ist kalt. Können Sie mir helfen? Die Frau gibt mir eine Decke. Jetzt ist alles gut.",
    gist:"The room is cold, so reception gives you a blanket.",
    question:{prompt:"What solves the problem?",choices:["A blanket","A new key","Coffee"],answer:0},
    grammar:{title:"Modal verb plus infinitive",note:"With können, the conjugated modal comes early and the action waits at the end.",example:"Können Sie mir helfen?"},
    glosses:{zimmer:"room",kalt:"cold",schlafen:"sleep",rezeption:"reception",helfen:"help",frau:"woman",decke:"blanket",alles:"everything"}
  },
  {
    id:"cafe-1",title:"Im Café",
    text:"Am Morgen gehe ich in ein Café. Ein Herr ist schon hier. Ich sage: Guten Morgen. Ich möchte einen Kaffee, bitte. Der Herr fragt: Mit Milch? Ja, mit Milch. Der Kaffee kommt, und ich habe Zeit. So ist das Leben gut.",
    gist:"You order coffee with milk and take your time in a café.",
    question:{prompt:"How do you take the coffee?",choices:["With milk","Without milk","With tea"],answer:0},
    grammar:{title:"Möchte makes a polite request",note:"Ich möchte … is the dependable way to ask for something. The item follows in the accusative: einen Kaffee.",example:"Ich möchte einen Kaffee, bitte."},
    glosses:{morgen:"morning",café:"café",möchte:"would like",kaffee:"coffee",bitte:"please",fragt:"asks",milch:"milk"}
  },
  {
    id:"cafe-2",title:"Noch ein Kaffee?",
    text:"Der Kaffee ist gut. Der Herr fragt: Möchten Sie noch einen Kaffee? Ich sage: Nein, danke. Ich möchte jetzt zahlen. Er sagt: Das macht vier Euro. Ich gebe ihm das Geld und gehe wieder in die Stadt.",
    gist:"You decline another coffee, pay four euros, and return to the city.",
    question:{prompt:"How much is the coffee?",choices:["Four euros","Two euros","Eight euros"],answer:0},
    grammar:{title:"Noch means another or still",note:"In an offer, noch einen Kaffee means another coffee. Context decides whether noch means still, yet, or another.",example:"Möchten Sie noch einen Kaffee?"},
    glosses:{kaffee:"coffee",möchten:"would like",danke:"thank you",zahlen:"pay",euro:"euros",geld:"money"}
  },
  {
    id:"cafe-3",title:"Die Rechnung",
    text:"Ich bin noch im Café. Ich will zahlen, aber der Herr ist nicht hier. Nach kurzer Zeit kommt er wieder. Ich sage: Die Rechnung, bitte. Er gibt mir die Rechnung. Sie ist richtig. Ich gebe ihm das Geld und sage danke.",
    gist:"You wait for the server, ask for the bill, check it, and pay.",
    question:{prompt:"What do you ask for?",choices:["The bill","The menu","The key"],answer:0},
    grammar:{title:"Pronouns refer back to nouns",note:"Die Rechnung is feminine, so the next sentence can call it sie. Track the noun’s gender to follow pronouns.",example:"Er gibt mir die Rechnung. Sie ist richtig."},
    glosses:{café:"café",zahlen:"pay",rechnung:"bill",bitte:"please",geld:"money",danke:"thank you"}
  },
  {
    id:"bahn-1",title:"Am Bahnhof",
    text:"Ich bin am Bahnhof und will nach Salzburg. Wo kann ich eine Fahrkarte kaufen? Ein Herr sagt: Der Automat ist dort. Ich gehe zum Automaten. Die Fahrkarte kostet vierzig Euro. Das ist viel, aber ich brauche die Fahrkarte.",
    gist:"At the station, you find the ticket machine and buy an expensive ticket to Salzburg.",
    question:{prompt:"Where can you buy the ticket?",choices:["At the machine","In the hotel","At the café"],answer:0},
    grammar:{title:"Modal verbs send actions to the end",note:"With wollen and können, the main action appears as an infinitive at the end: kaufen.",example:"Wo kann ich eine Fahrkarte kaufen?"},
    glosses:{bahnhof:"station",salzburg:"Salzburg",fahrkarte:"ticket",kaufen:"buy",automat:"machine",dort:"there",automaten:"machine",kostet:"costs",euro:"euros",brauche:"need"}
  },
  {
    id:"bahn-2",title:"Welches Gleis?",
    text:"Ich habe die Fahrkarte, aber ich weiß das Gleis nicht. Auf der Fahrkarte steht: Gleis drei. Ich gehe zu Gleis drei. Dort ist schon der Zug. Ein Herr fragt: Fährt dieser Zug nach Salzburg? Ja, das ist der richtige Zug.",
    gist:"The ticket says platform three, where the correct train to Salzburg is waiting.",
    question:{prompt:"Which platform is correct?",choices:["Platform three","Platform one","Platform five"],answer:0},
    grammar:{title:"Separable verbs split apart",note:"Abfahren and similar verbs split in main clauses. Here fährt carries the verb meaning while other information follows.",example:"Fährt dieser Zug nach Salzburg?"},
    glosses:{fahrkarte:"ticket",gleis:"platform / track",steht:"says / stands",drei:"three",dort:"there",zug:"train",fragt:"asks",fährt:"travels",salzburg:"Salzburg"}
  },
  {
    id:"bahn-3",title:"Der Zug kommt spät",
    text:"Der Zug soll um zwei Uhr kommen. Jetzt ist es schon nach zwei, aber der Zug ist noch nicht hier. Viele Menschen warten am Gleis. Dann kommt eine Nachricht: Der Zug kommt zehn Minuten später. Das ist nicht so schlimm.",
    gist:"The train is ten minutes late, and people wait on the platform.",
    question:{prompt:"How late is the train?",choices:["Ten minutes","One hour","Two minutes"],answer:0},
    grammar:{title:"Time can occupy position one",note:"When a time phrase comes first, the verb still stays second and the subject moves after it.",example:"Jetzt ist es schon nach zwei."},
    glosses:{zug:"train",zwei:"two",uhr:"o’clock",menschen:"people",warten:"wait",gleis:"platform",nachricht:"message",zehn:"ten",minuten:"minutes",später:"later",schlimm:"bad"}
  },
  {
    id:"bahn-4",title:"Im Zug",
    text:"Ich sitze im Zug nach Salzburg. Vor mir sitzt eine Frau, und neben mir sitzt ein Herr. Der Herr fragt: Ist hier noch frei? Ja, der Platz ist frei. Er setzt sich und sieht aus dem Fenster. Der Zug fährt weiter.",
    gist:"A man asks whether the seat beside you is free and then sits down.",
    question:{prompt:"What does the man want?",choices:["A free seat","A ticket","A hotel room"],answer:0},
    grammar:{title:"Separable prefixes can hide at the end",note:"In sich setzen, the reflexive pronoun stays near the verb. In other separable verbs, a prefix may wait at the clause end.",example:"Er setzt sich."},
    glosses:{sitze:"sit",zug:"train",salzburg:"Salzburg",frau:"woman",neben:"beside",fragt:"asks",frei:"free",platz:"seat",setzt:"sits",fenster:"window",fährt:"travels"}
  },
  {
    id:"winter-1",title:"Ein kalter Morgen",
    text:"Am Morgen ist Wien sehr kalt. Ich sehe aus dem Fenster. Auf der Straße liegt Schnee. Ich muss heute einen warmen Mantel haben. Ohne Mantel will ich nicht in die Stadt gehen. Zum Glück ist mein Mantel im Zimmer.",
    gist:"It is snowy and cold, so you need your warm coat before going outside.",
    question:{prompt:"What do you need before leaving?",choices:["A warm coat","A ticket","A key"],answer:0},
    grammar:{title:"The verb bracket carries the action",note:"The modal muss appears in position two; the action haben waits at the end.",example:"Ich muss heute einen warmen Mantel haben."},
    glosses:{morgen:"morning",wien:"Vienna",kalt:"cold",sehe:"see",fenster:"window",straße:"street",liegt:"lies",schnee:"snow",warmen:"warm",mantel:"coat",ohne:"without",glück:"luck",zimmer:"room"}
  },
  {
    id:"winter-2",title:"Der Mantel ist weg",
    text:"Ich will in die Stadt gehen, aber mein Mantel ist nicht im Zimmer. Wo ist er? Ich sehe in die Tasche und hinter die Tür. Dann weiß ich es wieder: Der Mantel ist noch an der Rezeption. Ich gehe schnell zurück.",
    gist:"You remember that your missing coat is still at reception.",
    question:{prompt:"Where is the coat?",choices:["At reception","Behind the door","In the bag"],answer:0},
    grammar:{title:"Pronouns keep a story moving",note:"Mantel is masculine, so er can replace it in the next sentence.",example:"Wo ist er?"},
    glosses:{mantel:"coat",zimmer:"room",sehe:"see",tasche:"bag",hinter:"behind",tür:"door",rezeption:"reception",schnell:"quickly",zurück:"back"}
  },
  {
    id:"winter-3",title:"Schnee in der Stadt",
    text:"In der Nacht kommt viel Schnee. Am Morgen ist die ganze Stadt weiß. Viele Menschen gehen langsam durch die Straßen. Ich finde das sehr schön. Aber ohne warme Schuhe kann ich nicht lange draußen sein.",
    gist:"Snow makes the city beautiful, but you need warm shoes to stay outside.",
    question:{prompt:"Why can’t you stay outside long?",choices:["You need warm shoes","The hotel is closing","The train is leaving"],answer:0},
    grammar:{title:"Adjective endings point toward the noun",note:"German adjectives change form before nouns. For reading, first find the noun, then treat the adjective as its description.",example:"ohne warme Schuhe"},
    glosses:{nacht:"night",schnee:"snow",morgen:"morning",ganze:"whole",weiß:"white",menschen:"people",langsam:"slowly",straßen:"streets",finde:"find",schön:"beautiful",warme:"warm",schuhe:"shoes",lange:"long",draußen:"outside"}
  },
  {
    id:"markt-1",title:"Auf dem Markt",
    text:"Heute gehe ich auf den Markt. Der Markt ist in der Stadt und nicht weit vom Hotel. Hier gibt es Brot, Käse und Obst. Ich möchte Brot und Käse kaufen. Das Obst sieht auch gut aus.",
    gist:"At the nearby market, you plan to buy bread and cheese and notice the fruit.",
    question:{prompt:"What do you plan to buy?",choices:["Bread and cheese","Coffee and milk","A coat and shoes"],answer:0},
    grammar:{title:"Movement often uses the accusative",note:"Auf den Markt describes movement toward the market. The same place at rest would be auf dem Markt.",example:"Heute gehe ich auf den Markt."},
    glosses:{heute:"today",markt:"market",hotel:"hotel",brot:"bread",käse:"cheese",obst:"fruit",möchte:"would like",kaufen:"buy",sieht:"looks"}
  },
  {
    id:"markt-2",title:"Ein Kilo Äpfel",
    text:"Am Stand ist eine Frau. Ich sage: Ein Kilo Äpfel, bitte. Die Frau gibt mir die Äpfel. Sie kosten drei Euro. Ich gebe ihr das Geld. Dann frage ich: Woher kommt der Käse? Er kommt aus Österreich.",
    gist:"You buy a kilo of apples and learn that the cheese is Austrian.",
    question:{prompt:"Where is the cheese from?",choices:["Austria","Germany","The hotel"],answer:0},
    grammar:{title:"Gender controls the pronoun",note:"Die Äpfel are plural, so sie refers to them. Der Käse is masculine, so er refers to it.",example:"Woher kommt der Käse? Er kommt aus Österreich."},
    glosses:{stand:"stall",frau:"woman",kilo:"kilo",äpfel:"apples",bitte:"please",kosten:"cost",drei:"three",euro:"euros",geld:"money",frage:"ask",woher:"where from",käse:"cheese",österreich:"Austria"}
  },
  {
    id:"markt-3",title:"Zu viel Käse",
    text:"Ich habe Brot, Äpfel und Käse gekauft. Der Käse ist sehr gut, aber ich habe zu viel. Vor dem Hotel sehe ich einen Herrn. Ich gebe ihm einen Teil. Jetzt habe ich weniger, und er hat auch guten Käse.",
    gist:"You bought too much cheese, so you share some with a man outside the hotel.",
    question:{prompt:"Why do you give some cheese away?",choices:["You have too much","It is bad","You have no money"],answer:0},
    grammar:{title:"The participle completes the past",note:"In the perfect tense, haben appears early and the participle waits at the end.",example:"Ich habe Brot, Äpfel und Käse gekauft."},
    glosses:{brot:"bread",äpfel:"apples",käse:"cheese",gekauft:"bought",hotel:"hotel",sehe:"see",weniger:"less",guten:"good"}
  },
  {
    id:"museum-1",title:"Vor dem Museum",
    text:"Das Museum ist in der Stadt. Ich bin schon hier, aber es ist noch nicht offen. Vor dem Museum warten viele Menschen. Ein Herr sagt: Es macht in zehn Minuten auf. Ich habe Zeit und warte auch.",
    gist:"The museum is still closed, but it will open in ten minutes.",
    question:{prompt:"How long until the museum opens?",choices:["Ten minutes","One hour","Two days"],answer:0},
    grammar:{title:"Aufmachen splits in a main clause",note:"The verb is aufmachen, but in a main clause it becomes macht … auf.",example:"Es macht in zehn Minuten auf."},
    glosses:{museum:"museum",offen:"open",warten:"wait",menschen:"people",zehn:"ten",minuten:"minutes",warte:"wait"}
  },
  {
    id:"museum-2",title:"Eine alte Welt",
    text:"Im Museum sehe ich einen alten Teil von Wien. Auf einem Bild ist die Stadt vor vielen Jahren. Die Straßen sehen anders aus, aber ein Teil ist noch gleich. Ich finde das Bild sehr gut und sehe es lange an.",
    gist:"A museum picture shows how Vienna looked many years ago.",
    question:{prompt:"What is in the picture?",choices:["Old Vienna","A train station","A hotel room"],answer:0},
    grammar:{title:"Ansehen also splits",note:"The full verb is ansehen. In a main clause, sehen stays near the front and an moves to the end.",example:"Ich sehe es lange an."},
    glosses:{museum:"museum",sehe:"see",alten:"old",wien:"Vienna",bild:"picture",jahren:"years",straßen:"streets",anders:"different",gleich:"same",finde:"find",lange:"for a long time"}
  },
  {
    id:"museum-3",title:"Die Ausstellung",
    text:"Die Ausstellung ist groß. Ich kann nicht alles genau sehen. Deshalb gehe ich erst durch den ersten Teil und mache dann eine kurze Pause. Nach der Pause sehe ich den anderen Teil. So habe ich mehr Zeit für jedes Bild.",
    gist:"You divide a large exhibition into two parts with a break between them.",
    question:{prompt:"Why do you take a break?",choices:["To see each picture carefully","Because the museum closes","To buy a ticket"],answer:0},
    grammar:{title:"Connectors organize the logic",note:"Deshalb gives a result and sends the verb directly after it. Erst … dann marks a sequence.",example:"Deshalb gehe ich erst durch den ersten Teil."},
    glosses:{ausstellung:"exhibition",alles:"everything",deshalb:"therefore",ersten:"first",pause:"break",anderen:"other",jedes:"each",bild:"picture"}
  },
  {
    id:"abend-1",title:"Am Abend",
    text:"Am Abend gehe ich wieder durch die Stadt. Viele Menschen sind hier. Vor einem Café ist Musik. Ich bleibe kurz stehen und höre zu. Dann gehe ich weiter, weil ich noch etwas essen will.",
    gist:"You pause to hear music outside a café, then continue because you want food.",
    question:{prompt:"Why do you continue walking?",choices:["You want to eat","The music ends","You lost your key"],answer:0},
    grammar:{title:"Weil sends the verb to the end",note:"After weil, the conjugated verb closes the clause.",example:"weil ich noch etwas essen will"},
    glosses:{abend:"evening",menschen:"people",café:"café",musik:"music",bleibe:"remain",stehen:"stand",höre:"hear",weil:"because",etwas:"something",essen:"eat"}
  },
  {
    id:"abend-2",title:"Was gibt es heute?",
    text:"Ich sehe ein kleines Restaurant. Vor der Tür steht: Suppe und Brot, acht Euro. Das ist gut. Im Restaurant frage ich: Was gibt es heute? Die Frau sagt: Heute gibt es Suppe mit Kartoffeln. Ich nehme die Suppe.",
    gist:"A restaurant offers potato soup with bread for eight euros, and you order it.",
    question:{prompt:"What do you order?",choices:["Soup","Coffee","Cheese"],answer:0},
    grammar:{title:"Es gibt means “there is”",note:"Treat es gibt as one reading chunk. The thing that exists follows it.",example:"Heute gibt es Suppe mit Kartoffeln."},
    glosses:{sehe:"see",kleines:"small",restaurant:"restaurant",tür:"door",steht:"says / stands",suppe:"soup",brot:"bread",acht:"eight",euro:"euros",frage:"ask",frau:"woman",kartoffeln:"potatoes",nehme:"take"}
  },
  {
    id:"abend-3",title:"Zurück zum Hotel",
    text:"Nach dem Essen gehe ich zurück zum Hotel. Es ist schon spät, und die Straßen sind fast leer. Ich kenne den Weg jetzt gut. Links ist das Café, rechts ist die Schule, und am Ende ist mein Hotel.",
    gist:"Late at night, familiar landmarks guide you back to the hotel.",
    question:{prompt:"What is at the end of the route?",choices:["The hotel","The school","The station"],answer:0},
    grammar:{title:"After a first element, the subject follows the verb",note:"Nach dem Essen fills position one, so gehe is second and ich follows it.",example:"Nach dem Essen gehe ich zurück zum Hotel."},
    glosses:{essen:"meal",zurück:"back",hotel:"hotel",spät:"late",straßen:"streets",leer:"empty",weg:"way",links:"left",café:"café",rechts:"right",schule:"school"}
  }
];

const FLOW_GLOSSES={};
FLOW_TEXTS.forEach(t=>Object.assign(FLOW_GLOSSES,t.glosses||{}));
