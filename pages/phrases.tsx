import { NextPage } from "next";

interface Phrase {
  english: string;
  portuguese: string;
  pronunciation: string;
}

const PHRASES: Phrase[] = [
  {
    english: "Hello",
    portuguese: "Oi",
    pronunciation: "oee",
  },
  {
    english: "Good morning/day",
    portuguese: "Bom dia",
    pronunciation: "bom jee-ah",
  },
  {
    english: "Good afternoon",
    portuguese: "Boa tarde",
    pronunciation: "bowa tar-jay",
  },
  {
    english: "Good night/evening",
    portuguese: "Boa noite",
    pronunciation: "bowa noychay",
  },
  {
    english: "How are you?  All good?",
    portuguese: "Tudo bem?",
    pronunciation: "toodoo beng",
  },
  {
    english: "My name is...",
    portuguese: "Meu nome é...",
    pronunciation: "meyoo nomay ey",
  },
  {
    english: "What is your name?",
    portuguese: "Qual é o seu nome?",
    pronunciation: "kwal ey oo say-oo nom-e",
  },
  {
    english: "Where are you from?",
    portuguese: "De onde você é?",
    pronunciation: "jay onjay vosay e",
  },
  {
    english: "I'm from...",
    portuguese: "Sou de...",
    pronunciation: "sow jeh",
  },
  {
    english: "Goodbye",
    portuguese: "Tchau",
    pronunciation: "chow",
  },
  {
    english: "See you later",
    portuguese: "Até logo",
    pronunciation: "atey low-goo",
  },
  {
    english: "See you tomorrow",
    portuguese: "Até amanhã",
    pronunciation: "atey aman-yah",
  },
];

const Phrases: NextPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <div>
        <table>
          <thead>
            <tr>
              <th>English</th>
              <th>Portuguese</th>
              <th>Pronunciation</th>
            </tr>
          </thead>
          <tbody>
            {PHRASES.map((phrase) => (
              <tr key={phrase.english}>
                <td>{phrase.english}</td>
                <td>{phrase.portuguese}</td>
                <td>{phrase.pronunciation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Phrases;
