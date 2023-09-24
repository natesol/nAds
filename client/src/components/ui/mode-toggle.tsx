// tslint:disable-next-line: no-submodule-imports

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from './switch';

import { useTheme } from '@/hooks/useTheme';

type ModeToggleVariant = 'dropdown' | 'icon' | 'switch';

interface ModeToggleProps {
    variant: ModeToggleVariant;
}

export const ModeToggle = ({ variant }: ModeToggleProps) => {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        if (variant === 'icon' || variant === 'switch') {
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
            <Button variant='outline' size='icon' onClick={handleToggle}>
                <Sun className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100' />
                <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
                <span className='sr-only'>Toggle theme</span>
            </Button>
        );
    } else if (variant === 'switch') {
        return <Switch checked={theme === 'dark'} onChange={handleToggle} onLabel='on' offLabel='off' />;
    }

    return null; // Return null for unsupported variants
};

export default ModeToggle;
