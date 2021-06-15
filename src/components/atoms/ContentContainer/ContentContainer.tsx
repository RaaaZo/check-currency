import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginTop: 130,
      marginBottom: 60,

      [theme.breakpoints.up('md')]: {
        marginLeft: 240,
        marginBottom: 0,
      },
    },
  })
);

const ContentContainer: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
};

export default ContentContainer;
