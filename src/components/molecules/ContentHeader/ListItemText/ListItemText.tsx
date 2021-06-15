import { GridDirection } from '@material-ui/core';
import { TooltipProps } from '@material-ui/core';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

interface Props {
  xs: GridSize;
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
        <Typography variant='button' component='h6'>
          {text}
        </Typography>
      </Tooltip>
      {secondTitle && (
        <Tooltip title={secondTitle} placement={placement} arrow>
          <Typography variant='button' component='h6'>
            {secondText}
          </Typography>
        </Tooltip>
      )}
    </Grid>
  );
};

export default ListItemText;
