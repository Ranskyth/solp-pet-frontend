/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef, useState } from "react";
import { Icon } from "./icon";
import { Button } from "./button";
import { CardActionsContext } from "./context/card-actions-context";

export const CardAnimais = ({ nome, dono }: { nome: string; dono: string }) => {
  const [buttonActive, setButtonActive] = useState(false);
  const { setActive } = useContext(CardActionsContext);
  const isCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIsCard = (event: MouseEvent) => {
      if (!isCard.current?.contains(event.target as Node)) {
        setButtonActive(false);
      }
    };
    if (buttonActive) {
      document.addEventListener("click", handleIsCard);
    }

    return () => {
      document.removeEventListener("click", handleIsCard);
    };
  }, [buttonActive]);

  return (
    <div ref={isCard} className="relative">
      <button
        onClick={() => setButtonActive(true)}
        className={`w-full h-[95px] rounded-2xl bg-gradient-to-br from-[#011e4d] to-[#000915] hover:outline-4 hover:outline-[#01c6fb] flex items-center px-5 ${
          buttonActive && `outline-4 outline-[#01c6fb]`
        }`}
      >
        <Icon icon={0} />
        <div className="ml-5">
          <div className="flex gap-2">
            <img src="Group.svg" alt="" />
            <p>{nome}</p>
          </div>
          <div className="flex gap-2">
            <img src="Vector.svg" alt="" />
            <p>{dono}</p>
          </div>
        </div>
      </button>

      {buttonActive && (
        <div
          className="z-10 absolute bg-gradient-to-br from-[#011e4d] to-[#000915] mt-4 border-4
    border-[#01c6fb] rounded-2xl w-full h-52 p-2"
        >
          <h1>Raça : {}</h1>
          <h1>Telefone : {}</h1>
          <h1>Idade : {}</h1>
          <div className="flex flex-col gap-2">
            <Button
              text="Editar"
              click={() => {
                setActive((prev: boolean) => !prev);
                setButtonActive((prev) => !prev);
              }}
            />
            <Button
              text="Remover"
              click={() => {
                setActive((prev: boolean) => !prev);
                setButtonActive((prev) => !prev);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
