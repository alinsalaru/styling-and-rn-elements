import {Button, ThemeProvider} from 'react-native-elements';
import React from 'react';
import {AirbnbRating} from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
    containerStyle: {
      margin: 10,
    },
  },
};

const RNElementsPreview = () => {
  return (
    <ThemeProvider theme={theme}>
      <AirbnbRating
        count={11}
        reviews={[
          'Terrible',
          'Bad',
          'Meh',
          'OK',
          'Good',
          'Hmm...',
          'Very Good',
          'Wow',
          'Amazing',
          'Unbelievable',
          'Jesus',
        ]}
        defaultRating={11}
        size={20}
      />
      <Button title="Hey!" />
    </ThemeProvider>
  );
};

export default RNElementsPreview;
