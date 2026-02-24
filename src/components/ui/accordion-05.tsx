import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface AccordionItemType {
  id: string;
  title: string;
  content: string;
}

interface Accordion05Props {
  items: AccordionItemType[];
  className?: string;
  defaultValue?: string;
}

export function Accordion05({
  items,
  className,
  defaultValue = "1",
}: Accordion05Props) {
  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <Accordion type="single" defaultValue={defaultValue} collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b border-foreground/10">
            <AccordionTrigger className="text-left pl-6 md:pl-14 overflow-hidden text-foreground/80 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-primary [&>svg]:hidden">
              <div className="flex flex-1 items-start gap-4">
                <p className="text-xs font-bold">{item.id}</p>
                <h2 className="font-display uppercase relative text-center text-2xl md:text-4xl tracking-wide">
                  {item.title}
                </h2>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground pb-6 pl-6 md:px-20 font-sans">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
