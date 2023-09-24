import { useState } from 'react';
import './styles/App.css';

// import { ReactComponent as Kan11Logo } from './assets/images/Kan11-channel_logo_full-v2.svg';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';

import ChannelData from './components/ChannelData';

import useFetch from './hooks/useFetch';

const App = () => {
    const [count, setCount] = useState(0);

    const { data, isLoading, error } = useFetch(`/api`);

    return (
        <>
            <header className='container lg flex flex-row justify-between py-2 px-4 bg-slate-50'>
                <h1 className='text-2xl font-bold'>No-Ads</h1>
                <div>
                    <ModeToggle variant='icon' />
                    <ModeToggle variant='dropdown' />
                    <ModeToggle variant='switch' />
                </div>
            </header>

            <main className='flex flex-col items-center min-h-screen text-center'>
                <h1 className='text-6xl font-bold'>Hello World !!!</h1>

                <div className='my-10'>
                    <Button variant='default' size='lg'>
                        Kan11Logo
                    </Button>
                    <Button variant='secondary' size='lg'>
                        Button
                    </Button>
                    <Button variant='outline' size='lg'>
                        Button
                    </Button>
                    <Button variant='destructive' size='lg'>
                        Button
                    </Button>
                </div>

                <div className='card'>
                    <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                </div>
                <p>test test test...</p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur reprehenderit
                    quaerat dolorum iste, illum, voluptatum excepturi nesciunt saepe cumque odit, minus
                    aspernatur veritatis beatae amet veniam dolores itaque fugiat dolore facilis quidem
                    laboriosam. Quis!
                </p>

                <br />
                <br />
                <br />

                <h4>[GET] &ldquo;/api&rdquo;</h4>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && (
                    <p>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </p>
                )}

                <br />
                <br />
                <br />

                <h4>[GET] &ldquo;/api/12&rdquo;</h4>
                <ChannelData channelName='12' />
            </main>
        </>
    );
};

export default App;
