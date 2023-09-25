import Container from './layouts/Container';

import ModeToggle from './ui/mode-toggle';
import { Button } from './ui/button';

type AppHeaderProps = {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'default' | '2xl' | null | undefined;
};

export const AppHeader = ({ className, size = 'default' }: AppHeaderProps) => {
    return (
        <header className={className + ' py-2 px-4 bg-primary/[.04]'}>
            <Container size={size} className='flex flex-row justify-between'>
                <Button variant='link' className='text-2xl font-bold'>
                    <a href='/'>
                        <h1>No-Ads</h1>
                    </a>
                </Button>

                <div>
                    <ModeToggle variant='icon' />
                </div>
            </Container>
        </header>
    );
};

export default AppHeader;
