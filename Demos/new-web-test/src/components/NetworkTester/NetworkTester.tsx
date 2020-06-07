import React, {FunctionComponent, useEffect, useState} from 'react';
import {Button, Box, Meter, Heading} from 'grommet';

export const NetworkTester: FunctionComponent = () => {
  const [showInformation, setShowInformation] = useState(false);
  const [networkInformation, setNetworkInformation] = useState<NetworkInformation>();

  const handleToggleInformation = () => setShowInformation(!showInformation);

  useEffect(() => {
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    const updateConnectionStatus: EventListener = e => {
      setNetworkInformation(e.currentTarget!);
    };

    if (connection) {
      setNetworkInformation(connection);

      connection.addEventListener('change', updateConnectionStatus);
    }

    return () => connection?.removeEventListener('change', updateConnectionStatus);
  }, []);

  return (
    <Box height="100%" width="100%" align="center" justify="center">
      <Box height="50%" width="50%">
        {!showInformation && (
          <Button
            onClick={handleToggleInformation}
            fill={false}
            size="large"
            primary
            label="Test my Network"
          />
        )}
        {showInformation && (
          <Box>
            <Heading level={4}>
              {`Network Download Speed: ${networkInformation?.downlink || 0}mbps`}{' '}
            </Heading>
            <Meter
              size="small"
              values={[
                {
                  value: networkInformation?.downlink || 0,
                },
              ]}
              max={100}
              aria-label="meter"
              type="circle"
            />
            {networkInformation?.rtt}
          </Box>
        )}
      </Box>
    </Box>
  );
};
