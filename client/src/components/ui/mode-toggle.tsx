import { Moon, Sun } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useTheme } from '@/hooks/useTheme';

type ModeToggleVariant = 'dropdown' | 'icon';

interface ModeToggleProps {
    variant: ModeToggleVariant;
}

export const ModeToggle = ({ variant }: ModeToggleProps) => {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        if (variant === 'icon') {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }
    };

    if (variant === 'dropdown') {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='icon'>
                        <Sun className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100' />
                        <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
                        <span className='sr-only'>Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    } else if (variant === 'icon') {
        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button variant='outline' size='icon' onClick={handleToggle}>
                            <Sun className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100' />
                            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
                            <span className='sr-only'>Toggle theme</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toggle theme to {theme === 'dark' ? 'light' : 'dark'}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }

    return null; // Return null for unsupported variants
};

export default ModeToggle;
