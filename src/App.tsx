import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tweet } from 'react-twitter-widgets'
import { Button } from '@mui/material';

const App: React.FC = () => {
  const [more, setMore] = useState(0);
  const [nextToken, setNextToken] = useState('');
  const [tweets, setTweets] = useState<any>([]);

  const url = `http://localhost:8088?rowsPerPage=${10}&nextToken=${nextToken}`;
  
  const [{ data, loading: tweetsLoading, error }, fetchTweets] = useAxios(url, { manual: true });

  useEffect(() => {
    fetchTweets();
  }, [more]);

  useEffect(() => {
    if (data?.tweets?.length) {
      setTweets((existingTweets: any) => ([...existingTweets, ...data.tweets]));
    }
  }, [data?.tweets]);

  useEffect(() => {
    if (data?.nextToken?.length && data?.nextToken !== nextToken) {
      setNextToken(data?.nextToken);
    }
  }, [data?.nextToken]);

  console.log(data);

  const onLoadMore = () => {
    setMore((m) => m += 1);
  };

  const rows = tweets?.map((row: any) => {
    const urls = row?.entities?.urls;
    const gif = urls?.length ? urls[0].display_url : null;
    return {
      id: row.id,
      text: row.text,
      gif
    }
  });

  const loading = tweetsLoading;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows?.filter((row: any) => row.gif).map((row: any) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{
                    borderBottom: '2px solid black',
                  }}>
                    <div style={{ width: '500px', margin: '0 auto', textAlign: 'center' }}>
                      <Tweet tweetId={row.id} />
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <Button color="success" variant="contained">Keep Tweet</Button>
                        <Button color="error" variant="contained">Delete Tweet</Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
            <div style={{ width: '500px', margin: '0 auto', textAlign: 'center' }}>
              <Button variant="contained" onClick={onLoadMore} disabled={loading}>Load More</Button>
            </div>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
