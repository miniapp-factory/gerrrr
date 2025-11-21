import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import DayOfWeek from "@/components/day-of-week";

export { generateMetadata };

export default function Home() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <DayOfWeek month={month} year={year} />
    </main>
  );
}
