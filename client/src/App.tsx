import { Outlet } from 'react-router-dom';

import { Container } from '@/components/layouts/Container';
import { AppHeader } from '@/components/AppHeader';

export const App = () => {
    return (
        <>
            <AppHeader size='xl' className='mb-10' />

            <main>
                <Container size='xl'>
                    <Outlet />
                </Container>
            </main>
        </>
    );
};

export default App;
