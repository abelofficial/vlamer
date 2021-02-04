import { makeStyles } from '@material-ui/core';

const style = (props) => {
  const style = makeStyles((theme, ...props) => ({
    page: {
      borderRadius: 0,
      height: '100vw'
    },
    container: {
      padding: theme.spacing(),
      boxShadow: theme.shadows[8],
      margin: `${theme.spacing(20)}px auto`,
      maxWidth: theme.spacing(60)
    },

    // Properties
    text_padding__small: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    rounded_button: {
      borderRadius: theme.spacing(5)
    }
  }));

  return style();
};

export default style;
