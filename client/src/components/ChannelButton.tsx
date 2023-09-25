import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ChannelLogo from '@/components/ChannelLogo';

type ChannelDataProps = {
    channelName: '11' | '12' | '13' | '14';
    background?: boolean;
    className?: string;
};

const channelsBg = {
    '11': 'bg-[#000000] hover:bg-[#000000]/[0.8]',
    '12': 'bg-[#171722] hover:bg-[#171722]/[0.8]',
    '13': 'bg-[#00104c] hover:bg-[#00104c]/[0.8]',
    '14': 'bg-[#e21f26] hover:bg-[#e21f26]/[0.8]',
};

export const ChannelButton = ({ channelName, background, className }: ChannelDataProps) => {
    const btnClasses = 'w-full h-max ' + (background ? channelsBg[channelName] : '');

    return (
        <Link to={`/channels/${channelName}`} className='w-full'>
            <Button variant='ghost' className={btnClasses}>
                <ChannelLogo className={className} background={background} channelName={channelName} />
            </Button>
        </Link>
    );
};

export default ChannelButton;
