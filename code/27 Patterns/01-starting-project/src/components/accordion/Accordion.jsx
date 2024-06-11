import {createContext, useContext, useState} from "react";
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext)
  if (!ctx) {
    throw new Error("Accordion related component only can be wrapped by <Accordion> ")
  }

  return ctx;
}

export default function Accordion({children, className}) {

  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(preItemId => preItemId === id ? null : id);
  }

  const ctx = {
    openItemId,
    toggleItem,
  }

  return <AccordionContext.Provider value={ctx}>
    <ul className={className}>{children}</ul>
  </AccordionContext.Provider>;
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
