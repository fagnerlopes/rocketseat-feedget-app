import { CloseButton } from "./CloseButton";
import bugImageUrl from "../assets/images/bug.svg";
import ideaImageUrl from "../assets/images/idea.svg";
import thoughtImageUrl from "../assets/images/thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 relative p-4 rounded-2xl mb-4 flex flex-col items-center justify-between shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header className="flex items-center gap-4 justify-between">
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com &#10084; pela{" "}
        <a
          href="https://rocketseat.com.br"
          className="underline text-violet-200 underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
