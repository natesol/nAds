import { useState } from 'react';
import ChannelButton from '@/components/ChannelButton';

import { Button } from '@/components/ui/button';

import ChannelData from '@/components/ChannelData';
import { ScrollArea } from '@/components/ui/scroll-area';

import useFetch from '@/hooks/useFetch';

export const ChannelsPage = () => {
    const [count, setCount] = useState(0);

    const { data, isLoading, error } = useFetch(`/api`);

    return (
        <div className='flex flex-row'>
            <ScrollArea className=' w-60 rounded-md border p-1 min-w-[7.8rem]'>
                <div className='flex flex-col items-center justify-between gap-3'>
                    <ChannelButton channelName='11' background={true} className='w-full h-20 p-3 pr-4' />
                    <ChannelButton channelName='12' background={true} className='w-full h-20 p-1' />
                    <ChannelButton channelName='13' background={true} className='w-full h-20 p-2' />
                    <ChannelButton channelName='14' background={true} className='w-full h-20 scale-[1.2]' />
                </div>
            </ScrollArea>

            <div className='p-5'>
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
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

                <br />
                <br />
                <br />

                <h4>[GET] &ldquo;/api/12&rdquo;</h4>
                <ChannelData channelName='12' />
            </div>
        </div>
    );
};

export default ChannelsPage;
