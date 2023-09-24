import useFetch from '../hooks/useFetch';

type ChannelDataProps = {
    channelName: string;
};

const ChannelData = ({ channelName }: ChannelDataProps) => {
    const apiUrl = `/api/${channelName}`;
    const { data, isLoading, error } = useFetch(apiUrl);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div>
                    <h2>Channel {channelName} Data</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ChannelData;
