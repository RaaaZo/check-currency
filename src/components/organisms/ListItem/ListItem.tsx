import ListItemText from 'components/molecules/ContentHeader/ListItemText/ListItemText';

import ListItemMUI from '@material-ui/core/ListItem';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface Props {
  ask: number;
  bid: number;
  currency: string;
  code: string;
}

const ListItem: React.FC<Props> = ({ ask, bid, currency, code }) => {
  const askRounded = Math.round(ask * 100) / 100;
  const bidRounded = Math.round(bid * 100) / 100;
  const uppercaseCurrency = currency.toUpperCase();

  return (
    <>
      <ListItemMUI divider key={currency}>
        <ListItemText
          xs={6}
          sm={4}
          md={3}
          direction='column'
          placement='left-start'
          title='Nazwa waluty'
          secondTitle='Kod waluty'
          secondText={code}
          text={uppercaseCurrency}
        />

        <ListItemText
          xs={2}
          sm={3}
          placement='top'
          title='Kupno'
          text={askRounded}
        />

        <ListItemText
          xs={2}
          sm={3}
          placement='top'
          title='Sprzedaż'
          text={bidRounded}
        />

        <ListItemText
          xs={2}
          sm={3}
          md={3}
          placement='top'
          title='Ulubione'
          text={<FavoriteBorderIcon />}
        />
      </ListItemMUI>
    </>
  );
};

export default ListItem;
