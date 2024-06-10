import { useState } from "preact/hooks";

export default function piscaParaCarregarImagens() {
  const [carregaImagens, setCarregaImagens] = useState("d-block opacity-0");
  setTimeout(() => {
    setCarregaImagens("");
  }, 0);
  return carregaImagens;
}
