import clx from 'classnames';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { NextSeo } from 'next-seo';

import main from '@styles/main';

const useStyle = makeStyles(() => ({}));

export default function Error() {
  const classes = main();
  const fastforwardCookie = 'nextjs-material-ui-admin'; //
  const fastforwardPage = '/dashboard';

  return (
    <div>
      <NextSeo
        title="Nextjs With Material Ui"
        canonical="http://localhost/3000"
        openGraph={{
          title: 'Nextjs With Material Ui',
          url: 'http://localhost/3000'
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `if (document.cookie && document.cookie.includes('${fastforwardCookie}')) {
          window.location.href = "${fastforwardPage}"
        }`
        }}
      />

      <Paper className={clx(classes.page)}>
        <Grid
          container
          direction="column"
          className={clx(classes.container)}
          spacing={2}
        >
          <Grid item>
            <Typography
              variant="h1"
              className={clx(classes.text_padding__small)}
            >
              Something went wrong
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Page could not be loaded</Typography>
            <Button
              color="primary"
              variant="outlined"
              className={clx(classes.rounded_button, classes.button)}
            >
              home
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
