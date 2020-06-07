import React, {FunctionComponent, useEffect, useState} from 'react';
import {Button, Box, Meter, Text, DataTable} from 'grommet';

export const NetworkTester: FunctionComponent = () => {
  const [showInformation, setShowInformation] = useState(false);
  const [networkInformation, setNetworkInformation] = useState<NetworkInformation>();

  const handleToggleInformation = () => setShowInformation(!showInformation);

  useEffect(() => {
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    console.log(connection);

    if (connection) {
      setNetworkInformation(connection);
    }
  }, []);

  const tableData = networkInformation
    ? [
        {name: 'Type', value: networkInformation.type},
        {name: 'Effective Type', value: networkInformation.effectiveType},
        {name: 'Downlink', value: networkInformation.downlink, max: 100},
        {name: 'Downlink Max', value: networkInformation.downlinkMax, max: 100},
        {name: 'Ping', value: networkInformation.rtt, max: 400},
        {name: 'Save Data', value: networkInformation.saveData},
      ]
    : [];

  return (
    <Box height="100%" width="100%" align="center">
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
                          size="small"
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
            data={tableData.filter(({value}) => value)}
          />
        )}
      </Box>
    </Box>
  );
};
