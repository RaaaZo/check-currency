import Grid, { GridDirection, GridSize } from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

interface Props {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  placement: TooltipProps['placement'];
  title: string;
  direction?: GridDirection;
  secondText?: string;
  text: any;
  secondTitle?: string;
}

const ListItemText: React.FC<Props> = ({
  xs,
  sm,
  md,
  placement,
  text,
  secondText,
  title,
  direction,
  secondTitle,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={xs}
      sm={sm}
      md={md}
      direction={direction}
      justify='center'
    >
      <Tooltip placement={placement} arrow title={title}>
        <Typography
          className={classes.typography}
          variant='button'
          component='h6'
        >
          {text}
        </Typography>
      </Tooltip>
      {secondTitle && (
        <Tooltip title={secondTitle} placement={placement} arrow>
          <Typography
            className={classes.typography}
            variant='button'
            component='h6'
          >
            {secondText}
          </Typography>
        </Tooltip>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      cursor: 'default',
    },
  })
);

export default ListItemText;
