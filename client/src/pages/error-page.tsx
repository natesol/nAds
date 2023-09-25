import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <>
            <h1 className='text-6xl font-bold'>No Ads - Error Page</h1>

            <br />
            <br />

            <h3>404 - it seems like you are lost</h3>

            <br />
            <br />

            <Link to='/'>
                <Button>Go To Home</Button>
            </Link>
        </>
    );
};

export default ErrorPage;
