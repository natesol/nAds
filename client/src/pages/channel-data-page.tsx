import { useParams } from 'react-router-dom';

import ChannelButton from '@/components/ChannelButton';

import ChannelData from '@/components/ChannelData';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChannelLogo from '@/components/ChannelLogo';

export const ChannelDataPage = () => {
    const { channelId } = useParams() as { channelId: string };

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

                <div>
                    <ChannelLogo channelName={channelId} variant='full' className='h-40' />
                </div>

                <br />

                <p>{channelId}</p>

                <h4>[GET] &ldquo;/api/{channelId}&rdquo;</h4>
                <ChannelData channelName={channelId} />
            </div>
        </div>
    );
};

export default ChannelDataPage;
