import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import ChannelData from '@/components/ChannelData';
import useFetch from '@/hooks/useFetch';

export const HomePage = () => {
    const [count, setCount] = useState(0);

    const { data, isLoading, error } = useFetch(`/api`);

    return (
        <>
            <h1 className='text-6xl font-bold'>No Ads - Home Page</h1>

            <br />
            <br />

            <p>test test test...</p>
            <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur reprehenderit quaerat
                dolorum iste, illum, voluptatum excepturi nesciunt saepe cumque odit, minus aspernatur
                veritatis beatae amet veniam dolores itaque fugiat dolore facilis quidem laboriosam. Quis!
            </p>

            <br />
            <br />

            <Link to='/channels'>
                <Button variant='link' size='lg' className='text-green-600'>
                    Go To Channels
                </Button>
            </Link>

            <br />

            <Link to='/channels/11'>
                <Button variant='default' size='lg' className='bg-green-600'>
                    Go To Channel 11
                </Button>
            </Link>

            <br />
            <br />

            <h4>[GET] &ldquo;/api&rdquo;</h4>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

            <br />
            <br />
            <br />

            <h4>[GET] &ldquo;/api/12&rdquo;</h4>
            <ChannelData channelName='12' />
        </>
    );
};

export default HomePage;
