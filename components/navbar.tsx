import { DrawerView } from "@/components/drawer-view";
import {
  Drawer,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ChartPieIcon,
  CirclePlusIcon,
  HomeIcon,
  MessageSquareTextIcon,
  PiggyBankIcon,
} from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="pb-safe-bottom fixed bottom-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-around border-t border-white bg-background shadow-[0_-2px_4px_rgba(0,0,0,0.1)] md:h-16">
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary"
        prefetch={false}
      >
        <HomeIcon className="h-8 w-8" />
      </Link>

      <Link
        href="/overview"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary"
        prefetch={false}
      >
        <ChartPieIcon className="h-8 w-8" />
      </Link>

      <Drawer>
        <div className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary">
          <DrawerTrigger asChild>
            <CirclePlusIcon strokeWidth="1" className="h-12 w-12" />
          </DrawerTrigger>
          <DrawerView />
        </div>
      </Drawer>

      <Link
        href="/savings"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary"
        prefetch={false}
      >
        <PiggyBankIcon className="h-8 w-8" />
      </Link>

      <Link
        href="/advice"
        className="flex flex-col items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary"
        prefetch={false}
      >
        <MessageSquareTextIcon className="h-8 w-8" />
      </Link>
    </nav>
  );
};
