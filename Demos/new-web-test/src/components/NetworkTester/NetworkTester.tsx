import React, {FunctionComponent, useEffect, useState} from 'react';
import {Button, Box, Meter, Text, DataTable, Heading} from 'grommet';
import NetworkSpeed from 'network-speed';

const testNetworkSpeed = new NetworkSpeed();

export const NetworkTester: FunctionComponent = () => {
  const [showInformation, setShowInformation] = useState(false);
  const [networkInformation, setNetworkInformation] = useState<NetworkInformation>();
  const [downloadSpeed, setDownloadSpeed] = useState(0);

  const handleToggleInformation = () => setShowInformation(!showInformation);

  const updateNetworkSpeed = () => {
    const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
    const fileSizeInBytes = 50000000;
    testNetworkSpeed
      .checkDownloadSpeed(baseUrl, fileSizeInBytes)
      .then(speed => setDownloadSpeed(parseInt(speed.mbps, 10)));
  };

  useEffect(() => {
    if (showInformation) {
      updateNetworkSpeed();
    }
  }, [showInformation]);

  useEffect(() => {
    const connection = navigator.connection;

    if (connection) {
      setNetworkInformation(connection);
    }
  }, []);

  const tableData = networkInformation
    ? [
        {name: 'Type', value: networkInformation.type},
        {name: 'Effective Type', value: networkInformation.effectiveType},
        {name: 'Download Speed', value: downloadSpeed, max: 5000},
        {name: 'Downlink', value: networkInformation.downlink, max: 100},
        {name: 'Downlink Max', value: networkInformation.downlinkMax, max: 100},
        {name: 'Ping', value: networkInformation.rtt, max: 400},
        {name: 'Save Data', value: networkInformation.saveData},
      ]
    : [];

  return (
    <Box width="100%" align="center">
      {/* eslint-disable-next-line */}
      <Heading margin="large">📡 Network Tester 📡</Heading>
      <Box>
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
          <>
            <DataTable
              pad="medium"
              columns={[
                {
                  property: 'name',
                  header: <Text>Property</Text>,
                  primary: true,
                },
                {
                  property: 'value',
                  header: 'Value',
                  render: datum => {
                    if (typeof datum.value === 'number') {
                      return (
                        <Box pad={{vertical: 'xsmall'}}>
                          <Meter
                            values={[
                              {
                                value: datum.value,
                              },
                            ]}
                            size="xsmall"
                            max={datum.max}
                            type="circle"
                            aria-label="meter"
                          />
                        </Box>
                      );
                    } else if (typeof datum.value === 'boolean') {
                      return (
                        <Box>
                          <Text>{datum.value ? '👍' : '👎'}</Text>{' '}
                        </Box>
                      );
                    }

                    return <Box pad={{vertical: 'xsmall'}}>{datum.value}</Box>;
                  },
                },
              ]}
              data={tableData.filter(({value}) => value !== undefined)}
            />
            <Button onClick={updateNetworkSpeed} fill={false} size="large" label="Refresh" />
          </>
        )}
      </Box>
    </Box>
  );
};
