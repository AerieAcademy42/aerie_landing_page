// "use client";

// import * as DialogPrimitive from "@radix-ui/react-dialog";
// import { AnimatePresence, motion } from "framer-motion";
// import { ReactNode, useState } from "react";
// import { DialogTitle } from "../ui/dialog";

// interface DialogBoxProps {
//   trigger: ReactNode;
//   title?: string;
//   description?: string;
//   children: ReactNode;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
// }

// export function DialogBox({
//   trigger,
//   title,
//   description,
//   children,
//   open: controlledOpen,
//   onOpenChange,
// }: DialogBoxProps) {
//   const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

//   const isControlled = controlledOpen !== undefined;
//   const open = isControlled ? controlledOpen : uncontrolledOpen;
//   const setOpen = isControlled ? onOpenChange! : setUncontrolledOpen;

//   return (
//     <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
//       <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
//       <DialogPrimitive.Portal>
//         <AnimatePresence>
//           {open && (
//             <>
//               {/* Animated Overlay */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="fixed inset-0 z-50 bg-black/60"
//                 onClick={() => setOpen(false)}
//               />

//               {/* Animated Content */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
//                 transition={{
//                   duration: 0.3,
//                   ease: "easeInOut",
//                 }}
//                 className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]"
//               >
//                 <DialogPrimitive.Content className="grid w-full max-w-4xl  border border-border bg-card p-6  rounded-lg sm:rounded-lg">
//                   <DialogTitle>{title}</DialogTitle>
//                   <div className="">{children}</div>
//                 </DialogPrimitive.Content>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </DialogPrimitive.Portal>
//     </DialogPrimitive.Root>
//   );
// }

// components/common/dialog-box.tsx

"use client";

import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { DialogTitle } from "../ui/dialog";

interface DialogBoxProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function DialogBox({
  open,
  onOpenChange,
  trigger,
  children,
  className,
  title,
}: DialogBoxProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      )}

      <AnimatePresence>
        {(open ?? true) && (
          <DialogPrimitive.Portal forceMount>
            {/* Overlay */}
            <DialogPrimitive.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
              />
            </DialogPrimitive.Overlay>

            {/* Content */}
            <DialogPrimitive.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] outline-none",
                  className,
                )}
              >
                <DialogTitle>{title}</DialogTitle>
                {/* Close Button */}
                {/* <DialogPrimitive.Close asChild>
                  <button className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur transition-all hover:scale-105 hover:bg-white">
                    <X className="h-5 w-5 text-neutral-700" />
                  </button>
                </DialogPrimitive.Close> */}

                {children}
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
