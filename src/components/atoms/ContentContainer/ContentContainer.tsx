import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginTop: 130,

      [theme.breakpoints.up('md')]: {
        marginLeft: 240,
      },
    },
  })
);

const ContentContainer: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
};

export default ContentContainer;
