import { cn } from '../../lib/utils';
import { forwardRef } from 'react';


const Textarea = forwardRef(({ className, ...props }, ref) => (
    <textarea
        className={cn(
            'peer block max-h-36 min-h-12 w-full appearance-none rounded-sm border border-neutrals-600 bg-neutrals-800 p-3 caret-primary shadow-[0_0_10px,_inset_0_0_10px] shadow-transparent transition-colors focus:border-primary focus:shadow-primary/70 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
            className,
        )}
        ref={ref}
        {...props}
    />
));

export default Textarea;
